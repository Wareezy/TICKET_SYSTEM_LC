import nodemailer from 'nodemailer'
import 'dotenv/config'

export default {
    MAIL_ENGINE : async (req, res) => {

        const mailOptions = {
            from: 'brandonroulstone465@gmail.com',
            to: 'brandonroulstone71@example.com',
            subject: 'This test is finally working??',
            text: 'Lorem ipsum is what html speaks in? or ... ??',
            html: `<p>This is probably paid for I guess or maybe not?? :/</p>`
        };
    
        const transporter = nodemailer.createTransport({
            // service: process.env.PROTECTED_MAIL_PROVIDER,
            host: 'localhost',
            port: 1025,
            auth: {
                user: 'LCS',
                pass: process.env.USER_PWD
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