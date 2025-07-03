const express = require("express");
const router = express.Router();
const Course = require("../models/Course");
const auth = require("../middleware/auth");

// POST /api/courses — create course
router.post("/", auth, async (req, res) => {
  const { title, description } = req.body;
console.log("Token payload:", req.user); // 🔍 This line is important
  console.log("Request body:", req.body);
  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required" });
  }

  try {
    const course = new Course({
      title,
      description,
      instructor: req.user.id,
    });

    await course.save();
    res.json(course);
  } catch (err) {
    console.error("Course creation error:", err);
    res.status(500).json({ error: "Server error" });
  }
});


// GET /api/courses — list all courses
router.get("/", async (req, res) => {
  const courses = await Course.find().populate("instructor", "email");
  res.json(courses);
});

module.exports = router;
