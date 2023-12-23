import { createClient } from "@supabase/supabase-js";

const supabase_url = import.meta.env.VITE_APP_SUPABASE_URL; //process.env.VITE_APP_SUPABASE_URL
const supabase_anon_key = import.meta.env.VITE_APP_SUPABASE_ANON_KEY; //process.env.VITE_APP_SUPABASE_ANON_KEY

console.log("Supabase URL:", supabase_url);
console.log("Supabase Anon Key:", supabase_anon_key);

export const supabase = createClient(supabase_url, supabase_anon_key);
