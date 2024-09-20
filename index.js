import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import clipRoutes from "./routes/clipRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import likeRoutes from "./routes/likeRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// Routes
app.use("/auth", authRoutes);
app.use("/clips", clipRoutes);
app.use("/comments", commentRoutes);
app.use("/likes", likeRoutes);
app.use("/users", userRoutes);

// Test database connection and sync models

sequelize
	.authenticate()
	.then(() => {
		console.log("Database connected successfully.");
		sequelize
			.sync({ alter: true })
			.then(() => {
				console.log("Database synced with model");
			})
			.catch((err) => {
				console.error("Error syncing database:", err);
			});
	})
	.catch((err) => {
		console.error("Unable to connect to the database:", err);
	});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
