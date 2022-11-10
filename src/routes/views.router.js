import { Router } from "express";
import {
  viewLoginController,
  viewMenuController,
  viewRegisterController,
  viewIndexController,
  viewCartController
} from "../controllers/views.controllers.js";

const router = new Router();

router.get("/", viewIndexController);

router.get("/register", viewRegisterController);

router.get("/login", viewLoginController);

router.get("/menu", viewMenuController);

router.get("/cart", viewCartController);

export default router;
