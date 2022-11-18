import mongoose  from "mongoose";
import dotenvConfig from "../../config/dotenv.config.js";
import logger from "../../config/winston.config.js";
import { ObjectId } from "mongodb";

const MONGO_URL = dotenvConfig.mongo.MONGO_URL;

export default class MongoDBcontainer {
    constructor (collection, schema) {
        mongoose.connect(MONGO_URL)
        .then( () => {
            this.model = mongoose.model(collection, schema);
            logger.log('info',`Mongodb connected`)
        })
        .catch((error) => {
            logger.log('error', `Error in mongoose connect Error: ${error}`)
        })
    }

    getAll = async () => {
          let result = await this.model.find();
          return result;
      };

      save = async (document) => {
          let result = await this.model.create(document);
          return result;
      };

      getById = async (id) => {
          if (!ObjectId.isValid(id)) {
            return null;
          }
          let result = await this.model.findOne({ _id: id });
          if (Object.keys(result).length === 0) {
            return null;
          }
          return result;
      };

      deleteById = async (id) => {
          let result = false;
          if (!ObjectId.isValid(id)) {
            return result;
          }
          let deleted = await this.model.deleteOne({ _id: id });
          deleted.deletedCount === 0 ? (result = false) : (result = true);
          return result;
      };

      update = async (id, modifiedProduct) => {
        let result = false;
        if (!ObjectId.isValid(id)) {
          return result;
        }
        let modi = await this.model.updateOne(
          { _id: id },
          { $set: modifiedProduct }
        );
        return modi;
      };
    
}

