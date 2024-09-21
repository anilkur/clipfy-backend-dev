import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({ message: "Yetkisiz giriş, geçersiz token" });
        }
    } else {
        return res.status(401).json({ message: "Yetkisiz giriş, token eksik" });
    }
};
