import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
	const authHeader = req.headers.authorization;

	// Check if authorization header is present and formatted correctly
	if (authHeader && authHeader.startsWith("Bearer ")) {
		const token = authHeader.split(" ")[1];

		try {
			// Verify token using the JWT_SECRET
			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			// Attach user information to the request
			req.user = decoded;
			next(); // Continue to the next middleware or route handler
		} catch (error) {
			return res.status(401).json({ message: "Not authorized, invalid token" });
		}
	} else {
		return res.status(401).json({ message: "Not authorized, token missing" });
	}
};

export default protect;
