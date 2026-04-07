const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const auth = require("../middleware/auth");

// GET notes
router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.userId });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new note
router.post("/", auth, async (req, res) => {
  try {
    const { title, content, tags, isPinned, isArchived } = req.body;

    const note = new Note({
      userId: req.user.userId,
      title,
      content,
      tags,
      isPinned,
      isArchived
    });

    await note.save();
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// PUT update a note
router.put("/:id", auth, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ msg: "Note not found" });
    }

    if (note.userId.toString() !== req.user.userId) {
      return res.status(403).json({ msg: "Not allowed" });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// DELETE a note
router.delete("/:id", auth, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ msg: "Note not found" });
    }

    if (note.userId.toString() !== req.user.userId) {
      return res.status(403).json({ msg: "Not allowed" });
    }

    await Note.findByIdAndDelete(req.params.id);

    res.json({ message: "Note deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Export router
module.exports = router;