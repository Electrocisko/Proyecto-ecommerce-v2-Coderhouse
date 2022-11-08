import logger from "../config/winston.config.js";
import jwt from "jsonwebtoken";
import dotenvConfig from "../config/dotenv.config.js";

const registerController = async (req, res) => {
  res.send({
    status: "success",
    payload: req.user,
  });
};

const loginController = async (req, res) => {
  logger.log("debug", `req user en login controller ${req.user}`);
  const loginUser = {
    role: req.user.role,
    email: req.user.email,
    name: req.user.name,
    imageUrl: req.user.imageUrl,
    cart: req.user.cart,
  };
  const token = jwt.sign(loginUser, dotenvConfig.jwt.SECRET, {
    expiresIn: 60000,
  });

  res.cookie(dotenvConfig.jwt.COOKIE, token, { maxAge: 60000, httpOnly:true }).send(req.user);
};

export { registerController, loginController };
