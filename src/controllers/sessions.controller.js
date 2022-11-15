import logger from "../config/winston.config.js";
import jwt from "jsonwebtoken";
import dotenvConfig from "../config/dotenv.config.js";
import UserDtoPresenter from "../dto/userDTO.js";

const registerController = async (req, res) => {
  res.send({
    status: "success",
    payload: req.user,
  });
};

const loginController = async (req, res) => {
 const loginUser = UserDtoPresenter(req.user)
  const token = jwt.sign(loginUser, dotenvConfig.jwt.SECRET, {
    expiresIn: 600,
  });
  res.cookie(dotenvConfig.jwt.COOKIE, token, { maxAge: 600000, httpOnly:true }).send(req.user);
};

const logoutController = async (req,res) => {
  try {
    res.clearCookie(dotenvConfig.jwt.COOKIE).redirect("/login");
  } catch (error) {
    logger.log("error", `logout error: ${error}`);
  }
};

const loginFailControler = async (req,res) => {
    res.status(400).send({ status: "error", message: "user registration error" });;
};

const registerFailControler = async (req, res) => {
  res.status(400).send({ status: "error", message: "user registration error" });
};



export { registerController, loginController, logoutController, loginFailControler,registerFailControler };
