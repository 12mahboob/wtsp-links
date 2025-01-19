// src/services/api.js
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const SUPABASE_URL = 'your-supabase-url';  // Replace with your Supabase URL
const SUPABASE_KEY = 'your-supabase-key';  // Replace with your Supabase API Key
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Function to sign up a new user
export const signUp = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({ email, password });
  return { user, error };
};

// Function to log in a user
export const logIn = async (email, password) => {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  return { user, error };
};

// Function to fetch groups from the database
export const fetchGroups = async () => {
  const { data, error } = await supabase.from('groups').select('*');
  return { data, error };
};

// Function to add a new group
export const addGroup = async (groupData) => {
  const { data, error } = await supabase.from('groups').insert([groupData]);
  return { data, error };
};

// Function to delete a group
export const deleteGroup = async (groupId) => {
  const { data, error } = await supabase.from('groups').delete().eq('id', groupId);
  return { data, error };
};
