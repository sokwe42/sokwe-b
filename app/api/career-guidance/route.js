import { getSupabase } from "@/lib/supabase";

export async function POST(req) {
  const { name, email, interests, goals } = await req.json();

  if (!name || !email) {
    return Response.json({ error: "Name and email are required." }, { status: 400 });
  }

  const { error } = await getSupabase()
    .from("career_guidance_requests")
    .insert([{ name, email, interests: interests || null, goals: goals || null }]);

  if (error) {
    console.error("Career guidance insert error:", error);
    return Response.json({ error: "Could not save. Please try again." }, { status: 500 });
  }

  return Response.json({ success: true });
}
