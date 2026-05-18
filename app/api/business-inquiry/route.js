import { getSupabase } from "@/lib/supabase";

export async function POST(req) {
  const { company, email, training_area, message } = await req.json();

  if (!company || !email) {
    return Response.json({ error: "Company name and email are required." }, { status: 400 });
  }

  const { error } = await getSupabase()
    .from("business_inquiries")
    .insert([{ company, email, training_area: training_area || null, message: message || null }]);

  if (error) {
    console.error("Business inquiry insert error:", error);
    return Response.json({ error: "Could not save. Please try again." }, { status: 500 });
  }

  return Response.json({ success: true });
}
