const { default: fakeData } = require("../fakeData");
import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  const secret = process.env.NEXTAUTH_SECRET;
  return jwt.sign(payload, secret, { expiresIn: "15m" });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
