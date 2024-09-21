import Like from "../models/like.js";
import Clip from "../models/clip.js"; // Clip modelini ekledik
import User from "../models/user.js"; // User modelini ekledik

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
    const likes = await Like.findAll({
      where: { userId: req.params.userId },
      include: [
        {
          model: Clip,
          attributes: ['id', 'title'], // Klip için sadece gerekli alanları seçiyoruz
        },
        {
          model: User,
          attributes: ['id', 'username', 'avatar_url'], // Kullanıcı için sadece gerekli alanları seçiyoruz
        }
      ]
    });

    res.status(200).json({
      success: true,
      data: likes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
};

// Get Clip Like Count
export const getClipLikesCount = async (req, res) => {
  try {
      const { clipId } = req.params;
      const likesCount = await Like.count({ where: { clip_id: clipId } });

      res.status(200).json({
          success: true,
          likesCount,
      });
  } catch (error) {
      res.status(500).json({
          success: false,
          message: "Like sayısı alınamadı",
          error: error.message,
      });
  }
};
