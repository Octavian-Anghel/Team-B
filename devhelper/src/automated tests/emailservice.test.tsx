import EmailService from '../components/emailservice';
import nodemailer from 'nodemailer';

jest.mock('nodemailer');

describe('EmailService', () => {
    let emailService: EmailService;
    let mockedSendMail: jest.Mock;

    beforeEach(() => {
        mockedSendMail = jest.fn();
        jest.mocked(nodemailer.createTransport).mockReturnValue({
            sendMail: mockedSendMail
        } as any);
        emailService = new EmailService();
    });

    afterEach(() => {
        jest.mocked(nodemailer.createTransport).mockClear();
        mockedSendMail.mockClear();
    });

    it('should send an email with correct parameters', () => {
        const to = 'test@example.com';
        const subject = 'Test Subject';
        const text = 'Test email content';

        emailService.sendEmail(to, subject, text);

        expect(mockedSendMail).toHaveBeenCalledWith(
            {
                from: 'your-email@gmail.com',
                to: to,
                subject: subject,
                text: text
            },
            expect.any(Function)
        );
    });

    it('should handle email sending errors', () => {
        // Set up the mock to simulate an error
        mockedSendMail.mockImplementation((mailOptions, callback) => {
            callback(new Error('Failed to send email'), null);
        });

        const consoleSpy = jest.spyOn(console, 'log');
        emailService.sendEmail('test@example.com', 'Test Subject', 'Test email content');
        expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error));
        consoleSpy.mockRestore();
    });
});
