import mongoose from "mongoose";

const preferenceSchema = new mongoose.Schema(
  {
    teacherId: {
      type: String,
      required: true,
    },
    moduleId: {
      type: String,
      required: true,
    },
    sessionType: {
      type: String,
      required: true,
      enum: ["Cour", "TD", "TP"],
    },
    priority: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    submissionDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Preference = mongoose.model("preference", preferenceSchema);
