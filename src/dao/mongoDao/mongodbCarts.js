import mongoose from "mongoose";
import MongoDBcontainer from "./mongodbContainer.js";

const collection = 'carts';
const cartsSchema = mongoose.Schema({
    products:Array,
    userId: String,
    timestamp:Number
})

export default class MongoCarts extends MongoDBcontainer{
    constructor(){
        super(collection,cartsSchema);
    }
}