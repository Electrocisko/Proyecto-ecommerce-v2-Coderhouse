import MongoDBcontainer from './mongodbContainer.js';
import { collection, cartsSchema } from '../models/cart.model.js';

export default class MongoCarts extends MongoDBcontainer {
    constructor() {
        super(collection,cartsSchema)
    }
}