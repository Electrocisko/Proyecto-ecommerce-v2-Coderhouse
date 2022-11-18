import MongoDBcontainer from "./mongodbContainer.js";
import { collection, cartsSchema } from "../models/cart.model.js";
import { ObjectId } from "mongodb";


export default class MongoCarts extends MongoDBcontainer {
  constructor() {
    super(collection, cartsSchema);
  }

  getById = async (id) => {
    if (!ObjectId.isValid(id)) {
      return null;
    }
    let result = await this.model.findOne({ _id: id }).lean();
    if (Object.keys(result).length === 0) {
      return null;
    }
    return result;
  };

  getByIdAndPopulate = async (id) => {
    let result = await this.model
      .find({ _id: id })
      .populate("products.product");
    return result;
  };

  saveCart = async () => {
    let result = await this.model.create({ products: [] });
    return result;
  };
}
