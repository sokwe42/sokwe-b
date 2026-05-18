import { supabase } from "@/lib/supabase";

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email) {
    return Response.json({ error: "Name and email are required." }, { status: 400 });
  }

  const { error } = await supabase
    .from("mailing_list")
    .insert([{ name, email, message: message || null }]);

  if (error) {
    console.error("Mailing list insert error:", error);
    return Response.json({ error: "Could not save. Please try again." }, { status: 500 });
  }

  return Response.json({ success: true });
}
