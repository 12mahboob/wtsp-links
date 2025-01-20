import { supabase } from '../supabase';

const signup = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return data.user;
  } catch (error) {
    console.error('Error during signup:', error.message);
    throw error;
  }
};

export { signup };