import logger from "../config/winston.config.js";
import {
  getAllCarts,
  saveCart,
  getCartById,
  deleteCartById,
  updateCart,
  getPopulateCart,
} from "../services/carts.services.js";
import { getProductById } from "../services/products.services.js";

const getCartsController = async (req, res) => {
  let data = await getAllCarts();
  return res.json(data);
};

const postCartsController = async (req, res) => {
  let data = await saveCart();
  res.status(201).json(data);
};

const getCartByIdController = async (req, res) => {
  let cid = req.params.cid;
  let data = await getCartById(cid);
  return res.json(data);
};

const deleteCartByIdControler = async (req, res) => {
  let cid = req.params.cid;
  let data = await deleteCartById(cid);
  return res.status(202).send({
    "Cart Removed": data,
  });
};

const getProductsInCartController = async (req, res) => {
  let cid = req.params.cid;
  let result = await getPopulateCart(cid);
  logger.log("debug", `Que devuelve populate: ${JSON.stringify(result)}`);
  return res.send(result);
};

// ////////////////// To add products to the cart by their product id
const addProductInCartContoller = async (req, res) => {
  let productsInCart;
  let newData;
  let cartID = req.params.cid;
  let addProduct = req.body;
  let cart = await getCartById(cartID);
  if (cart === null) {
    return res.status(400).send('{ "error" : "non-existent cart"}');
  }
  let existProduct = await getProductById(addProduct.product);
  if (existProduct === null) {
    return res.status(400).send('{"error": "non-existent product}');
  }
  if (addProduct.quantity === undefined) {
    addProduct.quantity = 1;
  };
 productsInCart = cart.products
 const prodIndex = productsInCart.findIndex(
  (item) => item.product.toString() === addProduct.product.toString()
);
if (prodIndex === -1) {
  // If there are no products, it is added directly
  productsInCart.push(addProduct); //I update the cart with the added product
} else {
  let newCuantity =
    productsInCart[prodIndex].quantity + addProduct.quantity;
  addProduct.quantity = newCuantity;
  productsInCart.splice(prodIndex, 1); // I delete the old object and
  productsInCart.push(addProduct); // I push the new updated object
}
newData = {
  products: productsInCart,
};
let result = await updateCart(cartID, newData)
 
  return res.send(result);
};

export {
  getCartsController,
  postCartsController,
  getCartByIdController,
  deleteCartByIdControler,
  getProductsInCartController,
  addProductInCartContoller,
};


