const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Group Schema
const GroupSchema = new mongoose.Schema({
  name: String,
  category: String,
  link: String,
});
const Group = mongoose.model("Group", GroupSchema);

// Routes
app.get("/api/groups", async (req, res) => {
  const groups = await Group.find();
  res.json(groups);
});

app.post("/api/groups", async (req, res) => {
  const group = new Group(req.body);
  await group.save();
  res.json(group);
});

app.delete("/api/groups/:id", async (req, res) => {
  await Group.findByIdAndDelete(req.params.id);
  res.json({ message: "Group deleted" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
