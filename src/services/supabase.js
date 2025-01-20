import { createClient } from '@supabase/supabase-js';

<<<<<<< HEAD
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
=======
const SUPABASE_URL = 'https://your-supabase-url.supabase.co'; // Replace with your Supabase URL
const SUPABASE_KEY = 'your-supabase-anon-key'; // Replace with your Supabase public key

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
>>>>>>> 0ef80afe (hi)
