import mongoose from "mongoose";
import MongoDBcontainer from "./mongodbContainer.js";

const collection = 'users';

const usersSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    age: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
    imageUrl: { type: String },
    admin:{
      type:Boolean,
      default:false
  },
  });

  export default class MongoUsers extends MongoDBcontainer {
    constructor() {
        super(collection, usersSchema)
    }
  }