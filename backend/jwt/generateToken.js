import jwt from "jsonwebtoken";

export const generateToken = async (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  await res.cookie("authToken", token, {
    httpOnly: true, // protect against xss
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict", // protect against csrf
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    domain:
      process.env.NODE_ENV === "production"
        ? "https://chatapp-5y51.onrender.com"
        : "localhost",
  });
};
