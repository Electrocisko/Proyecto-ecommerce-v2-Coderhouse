import { saveUser } from "../services/users.services.js";
import { saveCart } from "../services/carts.services.js";
import logger from "../config/winston.config.js";

const registerController = async (req, res) => {
  const { name, email, address, password, age, phoneNumber } = req.body;
  if (!name || !email || !address || !password || !age || !phoneNumber)
    return res.send({ message: "Faltan datos" });

  //let imageUrl = req.file.filename;
  logger.log("debug", `Register controller ${JSON.stringify(req.body)}`);
  const cart = await saveCart();
  logger.log("debug", `Id del carrito creado ${JSON.stringify(req.body)}`);
  const user = {
    name,
    email,
    address,
    password,
    age,
    phoneNumber,
    cart: cart._id,
  };
  const result = await saveUser(user);
  res.send({
    status: "success",
    payload: result,
  });
};

export { registerController };
