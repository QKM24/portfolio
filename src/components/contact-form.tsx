"use client";

import { KeyboardButton } from "./keyboard-button";
import { sendPinAction } from "@/app/actions/send-pin";
import { verifyPinAction } from "@/app/actions/verify-pin";
import { sendMessageAction } from "@/app/actions/send-message";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Mail,
  Loader2,
  CheckCircle,
  ShieldCheck,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type Step = "form" | "pin" | "sending" | "success";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [step, setStep] = useState<Step>("form");
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRequestPin = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    const result = await sendPinAction(formData.email, "contact");
    setLoading(false);

    if (result.success) {
      toast.success("Verification code sent to your email!");
      setStep("pin");
    } else {
      toast.error(result.error || "Failed to send code");
    }
  };

  const handleVerifyAndSend = async () => {
    if (!pin || pin.length !== 6) {
      toast.error("Please enter the 6-digit code");
      return;
    }

    setLoading(true);
    const verifyResult = await verifyPinAction(formData.email, pin, "contact");

    if (!verifyResult.success) {
      setLoading(false);
      toast.error(verifyResult.error || "Invalid code");
      return;
    }

    setStep("sending");
    const sendResult = await sendMessageAction(formData);
    setLoading(false);

    if (sendResult.success) {
      setStep("success");
      toast.success("Message sent successfully!");
    } else {
      setStep("pin");
      toast.error(sendResult.error || "Failed to send message");
    }
  };

  const reset = () => {
    setStep("form");
    setPin("");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="neo-border rounded-lg bg-neo-blue p-2">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl font-black uppercase">Contact</h2>
          </div>

          <div className="neo-card max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              {step === "form" && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-2xl font-black uppercase mb-6 text-center">
                    Work Together
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-black uppercase mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className="w-full neo-border rounded-lg bg-background px-4 py-3 font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neo-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-black uppercase mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="w-full neo-border rounded-lg bg-background px-4 py-3 font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neo-blue"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-black uppercase mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project collaboration"
                      value={formData.subject}
                      onChange={(e) => updateField("subject", e.target.value)}
                      className="w-full neo-border rounded-lg bg-background px-4 py-3 font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neo-blue"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-black uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className="w-full neo-border rounded-lg bg-background px-4 py-3 font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neo-blue resize-none"
                    />
                  </div>
                  <div className="flex justify-center">
                    <KeyboardButton
                      variant="blue"
                      size="lg"
                      onClick={handleRequestPin}
                      disabled={loading}
                    >
                      {loading ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </KeyboardButton>
                  </div>
                </motion.div>
              )}

              {step === "pin" && (
                <motion.div
                  key="pin"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-center"
                >
                  <ShieldCheck className="h-12 w-12 mx-auto mb-4 text-neo-green" />
                  <h3 className="text-xl font-black uppercase mb-2">
                    Verify Your Email
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    We sent a 6-digit code to <strong>{formData.email}</strong>
                  </p>
                  <div className="flex flex-col gap-4 max-w-xs mx-auto">
                    <input
                      type="text"
                      placeholder="000000"
                      maxLength={6}
                      value={pin}
                      onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
                      onKeyDown={(e) => e.key === "Enter" && handleVerifyAndSend()}
                      className="neo-border rounded-lg bg-background px-4 py-3 text-center text-2xl font-black tracking-[0.5em] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neo-green"
                    />
                    <div className="flex gap-3 justify-center">
                      <KeyboardButton variant="outline" onClick={() => setStep("form")}>
                        Back
                      </KeyboardButton>
                      <KeyboardButton
                        variant="accent"
                        onClick={handleVerifyAndSend}
                        disabled={loading}
                      >
                        {loading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          "Verify & Send"
                        )}
                      </KeyboardButton>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === "sending" && (
                <motion.div
                  key="sending"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <Loader2 className="h-12 w-12 mx-auto mb-4 animate-spin text-neo-blue" />
                  <h3 className="text-xl font-black uppercase">
                    Sending Message...
                  </h3>
                </motion.div>
              )}

              {step === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-neo-green" />
                  <h3 className="text-xl font-black uppercase mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Thank you for reaching out. I&apos;ll get back to you soon!
                  </p>
                  <KeyboardButton variant="outline" onClick={reset}>
                    Send Another
                  </KeyboardButton>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
