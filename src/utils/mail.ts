import nodemailer from "nodemailer";
import { SMTP_HOST, SMTP_PASS, SMTP_USER } from "../utils/envs";
import { mailData } from "../types/mailTypes";

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export const sendEmail = async (data: mailData) => {
  try {
    const info = await transporter.sendMail({
      from: SMTP_USER,
      to: "felpbanks@gmail.com",
      subject: "Thank you for your submission",
      html: `<!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Thank you for your submission</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f7f6;
                        padding: 20px;
                    }
                    h1 {
                        color: #333;
                        font-size: 24px;
                        margin-bottom: 10px;
                    }
                    p {
                        color: #666;
                        font-size: 16px;
                        margin-bottom: 20px;
                    }
                </style>
            </head>
            <body>
            <div class="container">
            <div class="header">
                <h1>Thank you for your submission</h1>
            </div>
            <div class="content">
            <p>Beste ${data.naam},</p>
            <p>Bedankt voor je verzoek om een email te versturen. Hieronder vind je de gegevens die je hebt opgegeven:</p>
                <p>Naam: ${data.naam}</p>
                <p>Voornaam: ${data.voornaam}</p>
                <p>Geboortedatum: ${data.geboortedatum}</p>
                <p>Haarkleur: ${data.haarkleur}</p>
                <p>Lengte: ${data.lengte}</p>
                <p>Geslacht: ${data.geslacht}</p>
                <p>Opmerking: ${data.opmerking}</p>
            </div>
            </div>
            </body>
            </html>`,
    });
    console.log(info);
    console.log("Email sent successfully");
    console.log(nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error(error);
  }
};
