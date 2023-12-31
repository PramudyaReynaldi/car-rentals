import express from "express";
import { uploadImage, getImage } from "../controllers/Uploads.js";

const router = express.Router();

router.use("/images", express.static("public/images"));
router.post("/upload", uploadImage);
router.get("/images/:imageName", getImage);

export default router;