import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define(
	"users",
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
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		full_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		avatar_url: {
			type: DataTypes.STRING,
		},
		website: {
			type: DataTypes.STRING,
		},
		birthdate: {
			type: DataTypes.DATE,
		},
		country: {
			type: DataTypes.STRING,
		},
		city: {
			type: DataTypes.STRING,
		},
		is_private: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		bio: {
			type: DataTypes.TEXT,
		},
		is_active: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
		updated_at: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
	},
	{
		timestamps: false, // already handling manually
	}
);

export default User;
