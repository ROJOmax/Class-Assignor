import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "responsible", "teacher"],
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    ranking: {
      type: String,
      required: true,
      enum: [
        "Professeur",
        "Maître de Conférence Classe A",
        "Maître de Conférence Classe B",
        "Maître Assistant Classe A",
        "Maître Assistant Classe B",
      ],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("user", userSchema);
