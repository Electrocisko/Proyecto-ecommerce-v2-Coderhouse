import { Router } from "express";
import {
  registerController,
  loginController,
  logoutController
} from "../controllers/sessions.controller.js";
import upLoader from "../helpers/storageImg.js";
import passport from "passport";

const router = new Router();

router.post(
  "/register",
  upLoader.single("imageUrl"),
  passport.authenticate("register", {
    session: false,
    failureRedirect: "/",
    passReqToCallback: true,
  }),
  registerController
);

router.post(
  "/login",
  passport.authenticate("login", {
    session: false,
    failureRedirect: "/",
  }),
  loginController
);

router.get("/logout", logoutController);



export default router;
