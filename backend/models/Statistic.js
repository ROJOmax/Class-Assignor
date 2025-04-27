import mongoose from "mongoose";

const statisticSchema = new mongoose.Schema({
  metric: {
    type: String,
    required: true,
    unique: true,
  },
  value: {
    type: Number,
    required: true,
    min: 0,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

export const Statistic = mongoose.model("statistic", statisticSchema);
