import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  const secret = process.env.NEXTAUTH_SECRET;
  return jwt.sign(payload, secret, { expiresIn: "1d" });
};

export const getDataFromToken = async (request) => {
  try {
    const secret = await process.env.NEXTAUTH_SECRET;
    const token = (await request.cookies.get("token")?.value) || "";
    const decodedJWT = jwt.verify(token, secret);
    return await decodedJWT.Eposta;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { generateToken, getDataFromToken };
