import { Router } from "express";
import {
  getCartsController,
  postCartsController,
  getCartByIdController,
  deleteCartByIdControler,
  updateCartControler,
} from "../controllers/carts.contollers.js";

const router = new Router();

router.get('/',getCartsController);

router.post('/',postCartsController);

router.get('/:cid',getCartByIdController);

router.delete('/:cid',deleteCartByIdControler);

router.put('/:cid',updateCartControler);

export default router;