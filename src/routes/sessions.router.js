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
    failureRedirect: "/api/sessions/registerfail",
    passReqToCallback: true,
  }),
  registerController
);

router.post(
  "/login",
  passport.authenticate("login", {
    session: false,
    failureRedirect: "/api/sessions/loginfail",
  }),
  loginController
);

router.get("/logout", logoutController);

router.get("/loginfail", (req, res) => {
  res.status(400).send({ status: "error", message: "user registration error" });
});

router.get("/registerfail", (req, res) => {
  res.status(400).send({ status: "error", message: "user registration error" });
});


export default router;
