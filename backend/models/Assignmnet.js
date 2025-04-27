import mongoose from "mongoose";

const assignmentSchema = mongoose.Schema({
  speciality: {
    type: String,
    required: true,
    enum: ["LMD", "ING", "LP"],
  },
  level: {
    type: String,
    required: true,
    enum: ["L1", "L2", "L3", "M1", "M2"],
  },
});
