import express from "express";
import {} from "../controllers/clipController.js";
import protect from "../middleware/authMiddleware.js";
import { createComment, deleteComment, getCommentsByClipId, updateCommentsByClipId } from "../controllers/commentController.js";


const router = express.Router();

// Protected routes
router.get("/get-comments-by-clip-id/:clipId", protect, getCommentsByClipId);
router.delete("/delete-comment/:commentId", protect, deleteComment);
router.post("/create-comment", protect, createComment);
router.put("/clip/:clipId", updateCommentsByClipId);

export default router;
