const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Supabase Client Setup
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Test Route
app.get("/", (req, res) => {
  res.send("Supabase API Backend Running");
});

// Add Group
app.post("/add-group", async (req, res) => {
  const { name, link, category_id } = req.body;

  if (!name || !link || !category_id) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const { data, error } = await supabase
    .from("groups")
    .insert([{ name, link, category_id }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
});

// Get Groups
app.get("/groups", async (req, res) => {
  const { data, error } = await supabase.from("groups").select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
});

// Delete Group
app.delete("/delete-group/:id", async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from("groups").delete().eq("id", id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ message: "Group deleted successfully" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
