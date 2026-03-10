"use server";

import { verifyPin } from "./pin-store";

export async function verifyPinAction(email: string, pin: string, purpose: "cv" | "contact") {
  if (!email || !pin) {
    return { success: false, error: "Email and pin are required" };
  }

  const isValid = verifyPin(email, pin, purpose);

  if (!isValid) {
    return { success: false, error: "Invalid or expired verification code" };
  }

  return { success: true };
}
