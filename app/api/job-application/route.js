import { supabase } from "@/lib/supabase";

export async function POST(req) {
  const { name, email, role, experience } = await req.json();

  if (!name || !email) {
    return Response.json({ error: "Name and email are required." }, { status: 400 });
  }

  const { error } = await supabase
    .from("job_applications")
    .insert([{ name, email, role: role || null, experience: experience || null }]);

  if (error) {
    console.error("Job application insert error:", error);
    return Response.json({ error: "Could not save. Please try again." }, { status: 500 });
  }

  return Response.json({ success: true });
}
