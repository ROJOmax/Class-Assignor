import mongoose from "mongoose";

const appealSchema = mongoose.Schema(
  {
    teacherId: {
      type: String,
      required: true,
    },
    assignmentId: {
      type: String,
      required: true,
    },
    originalAssignment: {
      type: Object,
      required: true,
    },
    proposedChanges: {
      type: Object,
      required: true,
    },
    status: {
      type: Object,
      default: "Pending",
      enum: ["Pending", "Approved", "Rejected"],
    },
    reason: {
      type: String,
      required: true,
    },
  },
  { Timestamps: true }
);

export const Appeal = mongoose.model("appeal", appealSchema);
