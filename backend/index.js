import express, { json } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());

// Supabase Client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Routes
app.get('/', (req, res) => {
    res.send('Backend is running...');
});

// Example: Fetch Groups from Supabase
app.get('/groups', async (req, res) => {
    const { data, error } = await supabase.from('groups').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
});

// Example: Add a Group to Supabase
app.post('/groups', async (req, res) => {
    const { name, category, link } = req.body;

    if (!name || !category || !link) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const { data, error } = await supabase.from('groups').insert([{ name, category, link }]);
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json(data);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
