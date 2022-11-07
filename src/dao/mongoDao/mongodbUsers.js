import MongoDBcontainer from "./mongodbContainer.js";
import { collection, usersSchema} from '../models/user.model.js';


  export default class MongoUsers extends MongoDBcontainer {
    constructor() {
        super(collection, usersSchema)
    }
  }