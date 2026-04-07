const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
},
{
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

module.exports = mongoose.model("User", userSchema);