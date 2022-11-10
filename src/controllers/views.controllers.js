import logger from "../config/winston.config.js";
import dotenvConfig from "../config/dotenv.config.js";
import jwt from "jsonwebtoken";
import {
    getAllProducts,
    saveProducts,
    getProductById,
    deleteProductById,
    updateProduct,
  } from "../services/products.services.js";

const viewMenuController = async (req, res) => {
  logger.log(
    "info",
    `request type ${req.method} en route ${req.path} ${new Date()}`
  );
  const token = req.cookies[dotenvConfig.jwt.COOKIE];
  if (!token) return res.redirect("/login");
  const user = jwt.verify(token, dotenvConfig.jwt.SECRET);
  let products = await getAllProducts();
  logger.log("debug", `Cookie JWT user: ${user}`);
  res.render("pages/menu.ejs",{user, products});
};

const viewLoginController = async (req, res) => {
  logger.log(
    "info",
    `request type ${req.method} en route ${req.path} ${new Date()}`
  );
  res.render("pages/login.ejs");
};

const viewRegisterController = async (req, res) => {
  logger.log(
    "info",
    `request type ${req.method} en route ${req.path} ${new Date()}`
  );
  res.render("pages/register.ejs");
};

const viewIndexController = async (req, res) => {
  logger.log(
    "info",
    `request type ${req.method} en route ${req.path} ${new Date()}`
  );
  res.render("pages/index.ejs");
};

const viewCartController = async (req,res) => {
  const token = req.cookies[dotenvConfig.jwt.COOKIE];
  if (!token) return res.redirect("/login");
  const user = jwt.verify(token, dotenvConfig.jwt.SECRET);
  console.log(user)
  res.render('pages/cart.ejs',{user})
}

export {
  viewLoginController,
  viewMenuController,
  viewRegisterController,
  viewIndexController,
  viewCartController
};
