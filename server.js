const express = require('express');
const app = express();
// const users=require("./users.json");
// const secretkey="Akee@1234##";
// const jwt=require("jsonwebtoken")
const nodemailer = require("nodemailer");
require("dotenv").config();

app.use(express.json())


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post("/send-email", async (req, res) => {
    const { email } = req.body; 
    if (!email) {
        return res.status(400).json({ error: "Missing email" });
    }
});


 let info=   await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Verify your Mail",
        html: `<h1>Hi I'm from Express</h1>`,
    });

    res.json({ success: "Email sent successfully!" });



// let info = await transporter.sendMail({
//     from:"Tech Info <keerthreddy057@gmail.com>",
//     to:req.EMAIL_USER,
//     subject:"Verify mail",
//     html: `<h1>Hi I'm from Express</h1>
//     `

// })




// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });


// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const PORT = process.env.PORT || 3001;
   app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
   });

