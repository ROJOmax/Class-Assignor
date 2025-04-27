import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  coeficient: {
    type: Number,
    required: true,
  },
  level: {
    type: String,
    required: true,
    enum: ["L1", "L2", "L3", "M1", "M2"],
  },
  semester: {
    type: String,
    required: true,
    enum: ["Pair", "Unpair"],
  },
});

export const Module = mongoose.model("module", moduleSchema);
