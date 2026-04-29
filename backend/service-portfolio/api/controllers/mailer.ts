import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});

export const sendEmail = async (data: {
    name: string;
    email: string;
    phone: string;
    programPathway: string;
}) => {
    const mailOptions = {
        replyTo: data.email,
        to: "ayeshaashima.ks@gmail.com",
        subject: "New Contact Form Submission",
        html: `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f4f8fb; padding: 40px 0;">
                    <div style="max-width: 520px; margin: 0 auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 24px rgba(0,0,0,0.08); overflow: hidden;">
                        <div style="background: linear-gradient(90deg, #4f8cff 0%, #6ed6ff 100%); padding: 24px 32px;">
                            <h1 style="color: #fff; margin: 0; font-size: 1.7rem; letter-spacing: 1px;">New Program Enrollment</h1>
                        </div>
                        <div style="padding: 32px;">
                            <p style="font-size: 1.1rem; color: #333; margin-bottom: 24px;">You have received a new enrollment request for a program pathway. Here are the details:</p>
                            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                                <tr>
                                    <td style="padding: 12px 8px; font-weight: 600; color: #4f8cff; background: #f4f8fb; border-bottom: 1px solid #e6e6e6;">Full Name</td>
                                    <td style="padding: 12px 8px; color: #222; border-bottom: 1px solid #e6e6e6;">${data.name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 8px; font-weight: 600; color: #4f8cff; background: #f4f8fb; border-bottom: 1px solid #e6e6e6;">Email Address</td>
                                    <td style="padding: 12px 8px; color: #222; border-bottom: 1px solid #e6e6e6;">${data.email}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 8px; font-weight: 600; color: #4f8cff; background: #f4f8fb; border-bottom: 1px solid #e6e6e6;">Phone Number</td>
                                    <td style="padding: 12px 8px; color: #222; border-bottom: 1px solid #e6e6e6;">${data.phone}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 8px; font-weight: 600; color: #4f8cff; background: #f4f8fb;">Program Pathway</td>
                                    <td style="padding: 12px 8px; color: #222;">${data.programPathway}</td>
                                </tr>
                            </table>
                            <div style="text-align: center; margin-top: 32px;">
                                <span style="display: inline-block; background: #4f8cff; color: #fff; padding: 10px 28px; border-radius: 24px; font-size: 1rem; font-weight: 600; letter-spacing: 1px;">Enrollment Request</span>
                            </div>
                        </div>
                        <div style="background: #f4f8fb; padding: 18px 32px; text-align: center; color: #888; font-size: 0.95rem;">
                            &copy; ${new Date().getFullYear()} Program Enrollment Notification
                        </div>
                    </div>
                </div>
            `,
    };

    return transporter.sendMail(mailOptions);
};
