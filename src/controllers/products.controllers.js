import { getAllProducts, saveProducts } from '../services/products.services.js';


const getProductsController = async (req,res) => {
    let data = await getAllProducts();
    return res.json(data)
}

const postProductsController = async (req,res) => {
    const data = req.body;
    await saveProducts(data);
    res.status(201).json(data)
}

export {
    getProductsController,
    postProductsController
}