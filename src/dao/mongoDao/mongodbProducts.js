import mongoose from "mongoose";
import MongoDBcontainer from "./mongodbContainer.js";

const collection = 'products';

const productsSchema = mongoose.Schema({
    name:{type:String, required: true},
    description:{type:String, required: true},
    code:{type:String, required: true, max: 10},
    price:{type:Number, required: true},
    stock:{type:Number, required: true},
    thumbnail:{type:String, required: true},
    timestamp:{type:Number},
});

export default class MongoProducts extends MongoDBcontainer {
    constructor() {
        super(collection,productsSchema)
    }
}