"use server";

import { generatePin, storePin } from "./pin-store";
import { sendEmail } from "@/lib/mailjet";

export async function sendPinAction(email: string, purpose: "cv" | "contact") {
  if (!email || !email.includes("@")) {
    return { success: false, error: "Invalid email address" };
  }

  try {
    const pin = generatePin();
    storePin(email, pin, purpose);

    const purposeText = purpose === "cv" ? "download the CV" : "send the contact message";

    await sendEmail({
      to: email,
      subject: `Your verification code - ${pin}`,
      text: `Your verification code is: ${pin}\n\nUse this code to ${purposeText}. It expires in 5 minutes.`,
      html: `
        <div style="font-family: sans-serif; max-width: 400px; margin: 0 auto; padding: 24px;">
          <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px;">Verification Code</h2>
          <p style="font-size: 16px; color: #555; margin-bottom: 24px;">
            Use this code to ${purposeText}:
          </p>
          <div style="background: #f5f5f5; border: 2px solid #1a1a1a; padding: 16px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 8px; margin-bottom: 24px;">
            ${pin}
          </div>
          <p style="font-size: 14px; color: #888;">This code expires in 5 minutes.</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send pin:", error);
    return { success: false, error: "Failed to send verification email. Please try again." };
  }
}
