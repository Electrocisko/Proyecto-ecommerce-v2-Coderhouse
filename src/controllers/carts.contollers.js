import {
  getAllCarts,
  saveCart,
  getCartById,
  deleteCartById,
  updateCart,
} from "../services/carts.services.js";

const getCartsController = async (req, res) => {
    let data = await getAllCarts();
    return res.json(data);
  };

  const postCartsController = async (req, res) => {
   let data =  await saveCart();
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
    return  res.status(202).send({
      "Cart Removed": data,
    });
  };

  const updateCartControler = async (req,res) => {
    let cid = req.params.cid;
    let newData = req.body;
    let result = await updateCart(cid,newData);
    return    res.status(200).send({
      message: "Modified cart",
      status: result,
    });
};

export {
    getCartsController,
    postCartsController,
    getCartByIdController,
    deleteCartByIdControler,
    updateCartControler
}