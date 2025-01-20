import { supabase } from '../supabase';

const login = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data.session;
  } catch (error) {
    console.error('Error during login:', error.message);
    throw error;
  }
};

export { login };