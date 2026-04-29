const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "ayeshaashima.ks@gmail.com",
        pass: "fpmb ihph czvb znxx",
    },
    tls: {
        rejectUnauthorized: false
    }
});

transporter.sendMail({
    replyTo: "test@example.com",
    to: "ayeshaashima.ks@gmail.com",
    subject: "Test email",
    text: "Test email body",
}).then(() => console.log("Success")).catch(console.error);
