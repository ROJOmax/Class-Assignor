import express, { response } from "express";
import mongoose from "mongoose";
import { mongoDBURL, PORT } from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";

// // Load ENV
// dotenv.config();

// Initialize Express App
const app = express();

// Json parsing
app.use(express.json());

// CORS
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/teacher", teacherRoutes);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Testing");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App Connected To DataBase");
    app.listen(PORT, () => {
      console.log(`App is listening to port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
