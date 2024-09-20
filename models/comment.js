import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Comment = sequelize.define(
	"comment",
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		created_at: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
		comment: {
			type: DataTypes.TEXT,
		},
		user_id: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		clip_id: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		is_edited: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		is_active: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
	},
	{
		tableName: "comments",
		timestamps: false, // Handling `created_at` manually
	}
);

export default Comment;
