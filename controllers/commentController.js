import Comment from "../models/comment.js";

// Get comments by clip ID
export const getCommentsByClipId = async (req, res) => {
	const { clipId } = req.params;

	try {
		const comments = await Comment.findAll({ where: { clip_id: clipId, is_active: true } });

		if (!comments.length) {
			return res.status(200).json({ message: null, success: true, data: [], statusCode: 200 });
		}

		res.status(200).json({
			success: true,
			message: null,
			data: comments,
			statusCode: 200,
		});
	} catch (error) {
		console.log("Error fetching comments!!: ", error);
		res.status(200).json({ message: "Error fetching comments", success: false, data: null, statusCode: 400 });
	}
};

// Create a new comment
export const createComment = async (req, res) => {
	const { comment, clip_id } = req.body;
	const user_id = req.user.userId; // Extract userId from the token
	console.log("req.body: ", req.body);
	console.log("user_id: ", user_id);

	try {
		const newComment = await Comment.create({
			comment,
			user_id,
			clip_id,
			is_edited: false,
			is_active: true,
		});

		res.status(201).json({ message: "createdSuccessfully", data: newComment, success: true, statusCode: 201 });
	} catch (error) {
		res.status(500).json({ message: "Error creating comment", error });
	}
};


// Update Comment
export const updateCommentsByClipId = async (req, res) => {
	try {
	  const { clipId } = req.params;
	  const { content } = req.body;
  
	  // Clip ID'ye göre tüm yorumları bul
	  const comments = await Comment.findAll({ where: { clip_id: clipId } });
  
	  if (!comments.length) {
		return res.status(404).json({ success: false, message: "No comments found for this clip" });
	  }
  
	
	  const updatedComments = await Promise.all(
		comments.map(async (comment) => {
		  comment.content = content || comment.content;
		  comment.is_edited = true; // 
		  await comment.save();
		  return comment;
		})
	  );
  
	  res.status(200).json({
		success: true,
		message: `Comments for clipId ${clipId} updated successfully`,
		data: updatedComments,
	  });
	} catch (err) {
	  res.status(500).json({ success: false, error: err.message });
	}
  };
  
  

// delete comment
export const deleteComment = async (req, res) => {
	const { commentId } = req.params;
	const user_id = req.user.userId;

	try {
		const clips = await Comment.update({ is_active: false }, { where: { user_id, id: commentId } });

		if (!clips.length) {
			return res.status(200).json({ message: "noCommentsFoundToDelete", success: false, statusCode: 404 });
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
