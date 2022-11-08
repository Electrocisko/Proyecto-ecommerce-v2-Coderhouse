import logger from "../config/winston.config.js";


const registerController = async (req, res) => {
  res.send({
    status: "success",
    payload: req.user
  });
};

const loginController = async (req,res) => {
  //  const  { email, password } = req.body;
  //  if(!email||!password) return res.status(400).send({status:"error",error:"Valores incompletos"})
  //  logger.log('debug',`Login controller req body: ${JSON.stringify(req.body)}`)
    res.send( req.user)
} 





export { registerController, loginController };
