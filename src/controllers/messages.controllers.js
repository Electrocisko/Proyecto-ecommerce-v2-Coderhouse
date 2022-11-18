import nodemailer from 'nodemailer';
import dotenvConfig from "../config/dotenv.config.js";


let email = dotenvConfig.nodemail.NM_EMAIL;
let code = dotenvConfig.nodemail.NM_CODE;
let addressee = dotenvConfig.nodemail.NM_ADDRESSEE;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: email,
        pass: code
    }
});

const mailController =  async (req,res) => {
    let {message, cartId, userMail } = req.body;
    let messagePlus = `<br>
                        <p>Estimado Cliente, Gracias por su compra, su orden esta en proceso en breve nos contactaremos con usted para coordinar pago y entrega</p>
                        <br>
                        ${message}
                        <br>
                        Saludos Cordiales`
    let result = await transporter.sendMail({
        from: 'Ecommerce-Coderhouse',
        to: userMail,
        subject: `Orden de compra Nr ${cartId}`,
        html: messagePlus
    })
    res.send({message: 'Email sent'})
}

export {
    mailController
}


