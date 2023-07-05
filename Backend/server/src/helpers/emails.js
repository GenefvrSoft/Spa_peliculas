const nodemailer = require("nodemailer");

const mensajeCorreo = (is_premium) => `En Beauty Salon estamos felices de haber recibido tu reservacion, ha sido agendada para el dia pautado,
nos preocupamos por el bienestar de cada uno de nuestros clientes para que pasen un rato totalmente agradable.
${is_premium ? 'El precio es $70' : 'El precio es $30'}
`


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'bricmichael@gmail.com',
    pass: 'cbsbqhprjjiuuyts'
  }
});

async function emailDeReservacion(sendTo, is_premium) { // Notificación - RESERVACIÓN RECIBIDA
  const info = await transporter.sendMail({
    from: 'bricmichael@gmail.com',
    to: sendTo,
    subject: "SPA - RESERVACIÓN RECIBIDA",
    text: mensajeCorreo(is_premium)
  });

  console.log("Notificación 'RESERVACIÓN RECIBIDA' ha sido enviada.", info);
}

module.exports = { emailDeReservacion }