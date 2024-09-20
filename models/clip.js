import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Clip = sequelize.define(
	"clip", // Singular name for the model
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
		clip_url: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
		},
		hashtags: {
			type: DataTypes.TEXT, // For PostgreSQL
		},
		user_id: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		view: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
		is_muted: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		clip_cover_url: {
			type: DataTypes.STRING,
		},
		is_vertical: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		is_active: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
	},
	{
		tableName: "clips", // Explicit table name if the table is already named "clips"
		timestamps: false, // Disabling automatic timestamps
	}
);

export default Clip;
