import jwt from "jsonwebtoken";
import secretKey from "../jwtconfig.js";

function authenticateToken(req, res, next) {

    const authHeader = req.header("Authorization");

    if (!authHeader) {
        return res.status(401).json({
            message: "Authorization is missing"
        });
    }

    const [bearer, token] = authHeader.split(" ");

    if (bearer !== "Bearer" || !token) {
        return res.status(401).json({
            message: "Invalid Token Format"
        });
    }

    jwt.verify(token, secretKey, (err, user) => {

        if (err) {
            return res.status(401).json({
                message: "Invalid or expired token"
            });
        }

        req.user = user;
        next();
    });
}

export default authenticateToken;