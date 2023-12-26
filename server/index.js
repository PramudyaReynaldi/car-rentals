import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = 3000;

try {
    await db.authenticate();
    console.log("Database connected...");
} catch (error) {
    console.log(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

