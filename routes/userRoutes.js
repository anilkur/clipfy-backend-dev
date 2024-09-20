import express from "express";
import { getUserById, updateUserProfile, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/:userId", getUserById);
router.put("/:userId", updateUserProfile);
router.delete("/:userId", deleteUser);

export default router;
