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
  data.thumbnail = req.file.filename;
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
  return  res.status(202).send({
    "Product Removed": data,
  });
};

const updateProductControler = async (req,res) => {
    let pid = req.params.pid;
    let newData = req.body;
    if (req.file !== undefined) {
      newData.thumbnail = req.file.filename;
    }
    let result = await updateProduct(pid,newData);
    return    res.status(200).send({
      message: "Modified product",
      status: result,
    });
}

export {
  getProductsController,
  postProductsController,
  getProductByIdController,
  deleteProductByIdControler,
  updateProductControler
};
