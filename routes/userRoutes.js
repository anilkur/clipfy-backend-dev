import express from "express";
import { getUserById, updateUserProfile, deleteUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:userId", protect, getUserById);
router.put("/:userId", protect, updateUserProfile);
router.delete("/:userId", protect, deleteUser);

export default router;
