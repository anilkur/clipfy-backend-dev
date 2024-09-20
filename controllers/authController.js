import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Sign up user
export const signup = async (req, res) => {
	console.log("req.body: ", req.body);
	const { full_name, email, username, password } = req.body;

	try {
		// Hash password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create new user
		const user = await User.create({
			full_name,
			email,
			username,
			password: hashedPassword, // Store hashed password
		});

		res.status(201).json({ message: "User created successfully", user });
	} catch (error) {
		console.log("error: ", error);

		res.status(500).json({ message: "Error creating user", error });
	}
};

// Sign in user
export const signin = async (req, res) => {
	console.log("req.body: ", req.body);

	const { email, password } = req.body;

	try {
		// Find user by email
		const user = await User.findOne({ where: { email } });

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Compare password
		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		// Generate JWT token
		const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "23h" });

		res.status(200).json({ message: "Signed in successfully", token });
	} catch (error) {
		console.log("signin error: ", error);

		res.status(500).json({ message: "Error signing in", error });
	}
};
