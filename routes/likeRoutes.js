import express from "express";
import { likeAClip, dislikeAClip, getLikeHistory, getClipLikesCount } from "../controllers/likeController.js"; // getClipLikesCount fonksiyonunu ekliyoruz
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/like-a-clip", protect, likeAClip);
router.post("/dislike-a-clip", protect, dislikeAClip);
router.get("/like-history/:userId", protect, getLikeHistory);
router.get("/likes-count/:clipId", protect, getClipLikesCount);

export default router;
