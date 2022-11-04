import { Router } from "express";
import {
  getProductsController,
  postProductsController,
  getProductByIdController,
  deleteProductByIdControler,
  updateProductControler
} from "../controllers/products.controllers.js";

const router = new Router();

router.get("/", getProductsController);

router.post("/", postProductsController);

router.get("/:pid", getProductByIdController);

router.delete("/:pid", deleteProductByIdControler);

router.put("/:pid",updateProductControler);

export default router;
