import Like from "../models/like.js";

// Like a clip
export const likeAClip = async (req, res) => {
  try {
    const { clipId, userId } = req.body;
    const like = await Like.create({ clipId, userId });
    res.status(201).json({ success: true, data: like });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Dislike a clip
export const dislikeAClip = async (req, res) => {
  try {
    const { clipId, userId } = req.body;
    const dislike = await Like.destroy({ where: { clipId, userId } });
    res.status(200).json({ success: true, message: "Disliked" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get like history by user ID
export const getLikeHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const likeHistory = await Like.findAll({ where: { userId } });
    res.status(200).json({ success: true, data: likeHistory });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
