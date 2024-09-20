import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Notification = sequelize.define(
	"notifications",
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
		notification_creator_id: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		clip_id: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		notification_getter_id: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		notification: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		is_read: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		comment_id: {
			type: DataTypes.UUID,
		},
		user_notification_creator_id: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		user_notification_getter_id: {
			type: DataTypes.UUID,
			allowNull: false,
		},
	},
	{
		timestamps: false, // since you're already handling created_at manually
	}
);

export default Notification;
