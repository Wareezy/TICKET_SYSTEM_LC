import nodemailer from 'nodemailer'
import 'dotenv/config'

export default {
    MAIL_ENGINE : async (req, res) => {
        const { user_email, user_password } = req.body;

        const mailOptions = {
            from: 'your-email@gmail.com',
            to: 'recipient-email@example.com',
            subject: 'Subject of your email',
            text: 'Body of your email',
            html: `<p>This is the body of your email in HTML format</p>`
        };
    
        const transporter = nodemailer.createTransport({
            service: process.env.PROTECTED_MAIL_PROVIDER,
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: user_email,
                pass: user_password
            }
        });

        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                return console.log('Error occurred: ' + error.message);
            }
            console.log('Email sent: ' + info.response);
        })
    }
}