import {
  getAllProducts,
  saveProducts,
  getProductById,
  deleteProductById,
  updateProduct,
} from "../services/products.services.js";

const getProductsController = async (req, res) => {
  let data = await getAllProducts();
  return res.json(data);
};

const postProductsController = async (req, res) => {
  const data = req.body;
  await saveProducts(data);
  res.status(201).json(data);
};

const getProductByIdController = async (req, res) => {
  let pid = req.params.pid;
  let data = await getProductById(pid);
  return res.json(data);
};

const deleteProductByIdControler = async (req, res) => {
  let pid = req.params.pid;
  let data = await deleteProductById(pid);
  return res.json(data);
};

const updateProductControler = async (req,res) => {
    let pid = req.params.pid;
    let newData = req.body;
    let result = await updateProduct(pid,newData);
    return res.json(result);
}

export {
  getProductsController,
  postProductsController,
  getProductByIdController,
  deleteProductByIdControler,
  updateProductControler
};
