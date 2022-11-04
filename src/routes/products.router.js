import { Router } from "express";
import checkAdmin from "../helpers/checkAuth.js";
import {
  getProductsController,
  postProductsController,
  getProductByIdController,
  deleteProductByIdControler,
  updateProductControler
} from "../controllers/products.controllers.js";

const router = new Router();

router.get("/",getProductsController);

router.post("/", checkAdmin, postProductsController);

router.get("/:pid", getProductByIdController);

router.delete("/:pid", checkAdmin, deleteProductByIdControler);

router.put("/:pid", checkAdmin, updateProductControler);

export default router;
