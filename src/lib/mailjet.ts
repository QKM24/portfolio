import "server-only";
import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY || "",
  apiSecret: process.env.MAILJET_SECRET_KEY || "",
});

export async function sendEmail({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}) {
  const result = await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.SENDER_EMAIL || "noreply@example.com",
          Name: "Portfolio",
        },
        To: [
          {
            Email: to,
          },
        ],
        Subject: subject,
        TextPart: text,
        HTMLPart: html || text,
      },
    ],
  });

  return result.body;
}
