import express from "express";
import { getClipsByUserId, createClip, deleteClip } from "../controllers/clipController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected routes
router.get("/get-clips-by-user-id/:userId", protect, getClipsByUserId);
router.delete("/delete-clip/:clipId", protect, deleteClip);
router.post("/create-clip", protect, createClip);

export default router;
