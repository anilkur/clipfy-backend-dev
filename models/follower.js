import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Follower = sequelize.define(
	"followers",
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
		first_user: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		second_user: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		user_first_user: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		user_second_user: {
			type: DataTypes.UUID,
			allowNull: false,
		},
	},
	{
		timestamps: false, // since you're handling created_at manually
	}
);

export default Follower;
