const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String },
    tags: [String],
    isPinned: { type: Boolean, default: false },
    isArchived: { type: Boolean, default: false }
  },
  { timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);

module.exports = mongoose.model("Note", noteSchema);