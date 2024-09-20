import express from "express";
import { likeAClip, dislikeAClip, getLikeHistory } from "../controllers/likeController.js";

const router = express.Router();

router.post("/like-a-clip", likeAClip);
router.post("/dislike-a-clip", dislikeAClip);
router.get("/like-history/:userId", getLikeHistory);

export default router;
