import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'elwyn.bayer76@ethereal.email',
        pass: 'Xuabdg9gauquefSBN5'
    }
});


const mailController =  async (req,res) => {
    let {message} = req.body;
    let messagePlus = `<br>
                        <p>Estimado Cliente, Gracias por su compra, su orden esta en proceso en breve nos contactaremos con usted para coordinar pago y entrega</p>
                        <br>
                        ${message}
                        <br>
                        Saludos Cordiales`
    let result = await transporter.sendMail({
        from: 'Ecommerce-Coderhouse',
        to: 'electrocisko@gmail.com',
        subject: "Mail info",
        html: messagePlus
    })
    res.send({message: 'Email sent'})
}

export {
    mailController
}


