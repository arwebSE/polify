import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_PASS,
    },
    secure: true,
});

const verifyRecaptcha = async (token: string) => {
    const secretKey = process.env.CAPTCHA_SECRET;
    const verificationUrl = `${process.env.NEXT_PUBLIC_CAPTCHA_ENDPOINT}?secret=${secretKey}&response=${token}`;

    console.log("reCAPTCHA verification URL: ", verificationUrl);

    try {
        const response = await fetch(verificationUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        const data = await response.json();
        console.log("reCAPTCHA verification response: ", data);
        return data;
    } catch (error) {
        throw new Error("Failed to verify reCAPTCHA.");
    }
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { name, email, links, message, token } = req.body;

    if (!name || !email || !message) {
        console.error("Please fill out all required fields.");
        return res
            .status(400)
            .json({ error: "Please fill out all required fields." });
    }

    try {
        /* const recaptchaResponse = await verifyRecaptcha(token); */
        const recaptchaResponse = { success: true, score: 0.5 };

        if (recaptchaResponse.success && recaptchaResponse.score >= 0.5) {
            const mailData = {
                from: process.env.EMAIL_SENDER,
                to: process.env.EMAIL_RECEIVER,
                subject: `PolifyContact from: ${name}`,
                html: `<div>Sent From: ${name} (${email})</div><br><br>
                <div>Links: ${links}</div><br><br>
                <div>Message: ${message}</div><br><br>`,
            };

            await transporter.sendMail(mailData);

            console.log("Message sent successfully!");
            return res
                .status(200)
                .json({
                    message:
                        "Message sent successfully! We will be in contact.",
                });
        } else {
            console.error("reCAPTCHA verification failed. Please try again.");
            return res
                .status(400)
                .json({
                    error: "reCAPTCHA verification failed. Please try again.",
                });
        }
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ error: "Something went wrong. Please try again later." });
    }
}
