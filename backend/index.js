const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Supabase Client Initialization
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Health Check Route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Backend is running!' });
});

// User Sign-Up
app.post('/auth/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ message: 'User signed up successfully!', data });
  } catch (err) {
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// User Login
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ message: 'User logged in successfully!', data });
  } catch (err) {
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// Add a New Group
app.post('/groups', async (req, res) => {
  const { groupName, groupLink, category, userId } = req.body;

  try {
    const { data, error } = await supabase.from('groups').insert([
      {
        group_name: groupName,
        group_link: groupLink,
        category,
        user_id: userId,
      },
    ]);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(201).json({ message: 'Group added successfully!', data });
  } catch (err) {
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// Get All Groups
app.get('/groups', async (req, res) => {
  try {
    const { data, error } = await supabase.from('groups').select('*');

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// Delete a Group
app.delete('/groups/:id', async (req, res) => {
  const groupId = req.params.id;

  try {
    const { data, error } = await supabase.from('groups').delete().eq('id', groupId);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ message: 'Group deleted successfully!', data });
  } catch (err) {
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// Server Start
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
