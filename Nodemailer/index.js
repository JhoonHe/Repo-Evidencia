const express = require('express');
const path = require('path');

const nodemailer = require('nodemailer');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '')));

app.listen(10101, () => {
    console.log('Servidor corriendo en el puerto 10101');
});

app.post('/datos', async (req, res) => {

    const { nombre, correo } = req.body;

    const contentHTML = `
        <h1>Información de usuario</h1>
        <ul>
            <li>Nombre de usuario: ${nombre}</li>
            <li>Correo de usuario: ${correo}</li>
        </ul>
    `;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "proverteen@gmail.com",
            pass: "vgpjnmhbncdcukem",
        }
    });

    let info = await transporter.sendMail({
        from: '"Test Nodemailer"',
        to: correo,
        subject: 'test_nodemailer@gmail.com',
        html: contentHTML
    });

    res.send('Correo enviado');

});