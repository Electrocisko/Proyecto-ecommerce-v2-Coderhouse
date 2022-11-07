import { saveUser, getUserByEmail } from "../services/users.services.js";
import { saveCart } from "../services/carts.services.js";
import logger from "../config/winston.config.js";
import { createHash, isValidPassword  } from '../helpers/cryptPassword.js';

const registerController = async (req, res) => {
  const { name, email, address, password, age, phoneNumber } = req.body;
  if (!name || !email || !address || !password || !age || !phoneNumber)
    return res.send({ message: "incomplete data" });
 let exist = await getUserByEmail(email);
 if(exist) return res.send({message: 'already registered user'})
 const hashedPassword = await createHash(password);
  let image = req.file.filename;
  const cart = await saveCart();
  const user = {
    name,
    email,
    address,
    password: hashedPassword,
    age,
    phoneNumber,
    imageUrl: image,
    cart: cart._id,
  };
  const result = await saveUser(user);
  logger.log('debug',`Session controller payload: ${result}`)
  res.send({
    status: "success",
    payload: result,
  });
};

export { registerController };
