import express from "express";
import { Login, Me, logOut } from "../controllers/Auth.js";
import { requireAuth } from "../middleware/RequireAuth.js";

const router = express.Router();

router.get("/me", requireAuth, Me);
router.post("/login", Login);
router.delete("/logout", logOut);

export default router;