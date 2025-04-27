import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
  teacherId: {
    type: String,
    required: true,
  },
  moduleId: {
    type: String,
    required: true,
  },
  sections: {
    type: [String],
    required: true,
  },
  groups: {
    type: [String],
    required: true,
  },
  hours: {
    type: Number,
    required: true,
    min: 0,
  },
  //history: {}
});

export const Section = mongoose.model("section", sectionSchema);
