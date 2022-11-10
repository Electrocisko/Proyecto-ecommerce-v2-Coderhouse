import { Router } from "express";
import {
  getCartsController,
  postCartsController,
  getCartByIdController,
  deleteCartByIdControler,
  updateCartControler,
  addProductInCartContoller,
  getProductsInCartController
} from "../controllers/carts.contollers.js";

const router = new Router();

router.get('/',getCartsController);

router.post('/',postCartsController);

router.get('/:cid',getCartByIdController);

router.delete('/:cid',deleteCartByIdControler);

router.put('/:cid',updateCartControler);

router.get("/:cid/products", getProductsInCartController );

router.post("/:cid/products", addProductInCartContoller );

export default router;