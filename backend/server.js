import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import doctorRoute from "./routes/doctorRoute.js";
import appointmentRoute from "./routes/appointmentRoute.js";
import userRouter from "./routes/userRoute.js";
import { pool } from "./config/db.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "public/images")));

// API Endpoints
app.use("/api/doctors", doctorRoute);
app.use("/api/appointments", appointmentRoute);
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
    res.send("Care Connect API is running");
});

// Database Connection Test
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Successfully connected to PostgreSQL database');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});