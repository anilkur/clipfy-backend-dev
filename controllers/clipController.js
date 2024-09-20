import Clip from "../models/clip.js";

// Get clips by user ID
export const getClipsByUserId = async (req, res) => {
	const { userId } = req.params;

	try {
		const clips = await Clip.findAll({ where: { user_id: userId, is_active: true } });

		if (!clips.length) {
			return res.status(404).json({ message: "No clips found for this user" });
		}

		res.status(200).json(clips);
	} catch (error) {
		res.status(500).json({ message: "Error fetching clips", error });
	}
};

// Create a new clip
export const createClip = async (req, res) => {
	const { clip_url, description, hashtags, clip_cover_url, is_vertical } = req.body;
	const user_id = req.user.userId; // Extract userId from the token

	try {
		const newClip = await Clip.create({
			clip_url,
			description,
			hashtags,
			user_id,
			clip_cover_url,
			is_vertical,
		});

		res.status(201).json({ message: "Clip created successfully", newClip });
	} catch (error) {
		console.log("errorerror: ", JSON.stringify(error));

		res.status(500).json({ message: "Error creating clip", error });
	}
};

// delete clip by user ID
export const deleteClip = async (req, res) => {
	const { clipId } = req.params;
	const user_id = req.user.userId;

	try {
		const clips = await Clip.update({ is_active: false }, { where: { user_id, id: clipId } });

		if (!clips.length) {
			return res.status(200).json({ message: "noClipsFound", success: false, statusCode: 404 });
		}

		res.status(200).json({
			success: true,
			message: "deletedSuccessfully",
			statusCode: 200,
		});
	} catch (error) {
		res.status(500).json({ message: "Error fetching clips", error });
	}
};
