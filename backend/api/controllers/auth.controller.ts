import { Request, Response } from 'express';
import { sendEmail } from './mailer';

export const SendDetails = async (req: Request, res: Response) => {
    const { name, email, phone, programPathway } = req.body;

    if (!name || !email || !phone || !programPathway) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        await sendEmail({ name, email, phone, programPathway });

        return res.status(200).json({ success: 'User details saved and email sent successfully.'});
    } catch (error) {
        console.error('Error saving user details or sending email:', error);
        return res.status(500).json({ error: 'Failed to save user details or send email.' });
    }
};
