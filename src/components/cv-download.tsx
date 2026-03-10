"use client";

import { portfolioConfig } from "@/data/portfolio";
import { KeyboardButton } from "./keyboard-button";
import { sendPinAction } from "@/app/actions/send-pin";
import { verifyPinAction } from "@/app/actions/verify-pin";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Mail, Loader2, CheckCircle, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type Step = "idle" | "email" | "pin" | "success";

export function CvDownload() {
  const [step, setStep] = useState<Step>("idle");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendPin = async () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    const result = await sendPinAction(email, "cv");
    setLoading(false);

    if (result.success) {
      toast.success("Verification code sent to your email!");
      setStep("pin");
    } else {
      toast.error(result.error || "Failed to send code");
    }
  };

  const handleVerifyPin = async () => {
    if (!pin || pin.length !== 6) {
      toast.error("Please enter the 6-digit code");
      return;
    }

    setLoading(true);
    const result = await verifyPinAction(email, pin, "cv");
    setLoading(false);

    if (result.success) {
      setStep("success");
      toast.success("Verified! Starting download...");
      const link = document.createElement("a");
      link.href = portfolioConfig.cvFile;
      link.download = `${portfolioConfig.name.replace(/\s+/g, "_")}_CV.pdf`;
      link.click();
    } else {
      toast.error(result.error || "Invalid code");
    }
  };

  const reset = () => {
    setStep("idle");
    setEmail("");
    setPin("");
  };

  return (
    <section id="cv" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="neo-border rounded-lg bg-neo-accent p-2">
              <Download className="h-6 w-6 text-neo-accent-foreground" />
            </div>
            <h2 className="text-4xl font-black uppercase">Download CV</h2>
          </div>

          <div className="neo-card max-w-lg mx-auto text-center">
            <AnimatePresence mode="wait">
              {step === "idle" && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ShieldCheck className="h-12 w-12 mx-auto mb-4 text-neo-blue" />
                  <h3 className="text-xl font-black uppercase mb-2">
                    Get My Resume
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Enter your email to receive a verification code and download my CV.
                  </p>
                  <KeyboardButton
                    variant="default"
                    size="lg"
                    onClick={() => setStep("email")}
                  >
                    <Download className="h-5 w-5" />
                    Download CV
                  </KeyboardButton>
                </motion.div>
              )}

              {step === "email" && (
                <motion.div
                  key="email"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Mail className="h-12 w-12 mx-auto mb-4 text-neo-blue" />
                  <h3 className="text-xl font-black uppercase mb-2">
                    Verify Your Email
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    We&apos;ll send a 6-digit code to your email.
                  </p>
                  <div className="flex flex-col gap-4">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSendPin()}
                      className="neo-border rounded-lg bg-background px-4 py-3 text-center font-bold placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neo-blue"
                    />
                    <div className="flex gap-3 justify-center">
                      <KeyboardButton variant="outline" onClick={reset}>
                        Cancel
                      </KeyboardButton>
                      <KeyboardButton
                        variant="blue"
                        onClick={handleSendPin}
                        disabled={loading}
                      >
                        {loading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          "Send Code"
                        )}
                      </KeyboardButton>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === "pin" && (
                <motion.div
                  key="pin"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <ShieldCheck className="h-12 w-12 mx-auto mb-4 text-neo-green" />
                  <h3 className="text-xl font-black uppercase mb-2">
                    Enter Code
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Check your inbox for the 6-digit code.
                  </p>
                  <div className="flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="000000"
                      maxLength={6}
                      value={pin}
                      onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
                      onKeyDown={(e) => e.key === "Enter" && handleVerifyPin()}
                      className="neo-border rounded-lg bg-background px-4 py-3 text-center text-2xl font-black tracking-[0.5em] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neo-green"
                    />
                    <div className="flex gap-3 justify-center">
                      <KeyboardButton variant="outline" onClick={() => setStep("email")}>
                        Back
                      </KeyboardButton>
                      <KeyboardButton
                        variant="accent"
                        onClick={handleVerifyPin}
                        disabled={loading}
                      >
                        {loading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          "Verify & Download"
                        )}
                      </KeyboardButton>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-neo-green" />
                  <h3 className="text-xl font-black uppercase mb-2">
                    Download Started!
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Your CV download should begin automatically.
                  </p>
                  <KeyboardButton variant="outline" onClick={reset}>
                    Done
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
