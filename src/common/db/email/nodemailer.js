import nodemailer from 'nodemailer';
import {config} from "dotenv";
config()
 const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
    service: 'gmail',
    auth: {
      user:process.env.USER_MAIL,
        pass:process.env.USER_PASSWORD
    }
});

export async function sendEmail(to, subject, text) {
   
await transporter.sendMail({
    from: Process.env.USER_MAIL,
    to: to,
    subject: subject,
    text: text
});
}