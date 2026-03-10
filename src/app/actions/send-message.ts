"use server";

import { sendEmail } from "@/lib/mailjet";

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendMessageAction(data: ContactMessage) {
  const { name, email, subject, message } = data;

  if (!name || !email || !subject || !message) {
    return { success: false, error: "All fields are required" };
  }

  try {
    const ownerEmail = process.env.OWNER_EMAIL;
    if (!ownerEmail) {
      console.error("OWNER_EMAIL not configured");
      return { success: false, error: "Server configuration error" };
    }

    await sendEmail({
      to: ownerEmail,
      subject: `Portfolio Contact: ${subject}`,
      text: `New message from ${name} (${email}):\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="font-size: 24px; font-weight: bold; border-bottom: 2px solid #1a1a1a; padding-bottom: 12px; margin-bottom: 20px;">
            New Contact Message
          </h2>
          <table style="width: 100%; margin-bottom: 20px;">
            <tr>
              <td style="font-weight: bold; padding: 8px 0; width: 80px;">From:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 8px 0;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 8px 0;">Subject:</td>
              <td style="padding: 8px 0;">${subject}</td>
            </tr>
          </table>
          <div style="background: #f5f5f5; border: 2px solid #1a1a1a; padding: 16px; white-space: pre-wrap;">
            ${message}
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send message:", error);
    return { success: false, error: "Failed to send message. Please try again." };
  }
}
