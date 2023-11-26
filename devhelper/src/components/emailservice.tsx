import nodemailer from 'nodemailer';
import { Transporter, SendMailOptions } from 'nodemailer';

class EmailService {
    private transporter: Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            //need to create a gmail for our application so that we can start sending the motivational emails
            service: 'gmail', 
            auth: {
                user: 'your-email@gmail.com', 
                pass: 'your-password' 
            }
        });
    }

    sendEmail(to: string, subject: string, text: string): void {
        const mailOptions: SendMailOptions = {
            from: 'your-email@gmail.com',
            to: to,
            subject: subject,
            text: text
        };

        this.transporter.sendMail(mailOptions, (error: Error | null, info: nodemailer.SentMessageInfo) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}
const emailService = new EmailService();
export default EmailService;
