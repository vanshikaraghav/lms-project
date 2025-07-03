const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config(); // ✅ Step 2: Load .env

const app = express();
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend
  credentials: true
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ Step 5: Use Auth Routes
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);
app.use("/api/courses", require("./routes/courses"));
app.get("/api/test", (req, res) => {
  res.send("API is working");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
