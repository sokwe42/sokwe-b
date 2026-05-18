import { createClient } from "@supabase/supabase-js";

// Called per-request so the client is never created at build time
export function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );
}
