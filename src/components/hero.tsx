"use client";
 
import { portfolioConfig } from "@/data/portfolio";
import { useLang } from "@/lib/lang-context";
import { KeyboardButton } from "./keyboard-button";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

function SpikeBurst({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="currentColor" className={className}>
      <path d="M30 0 L35 20 L55 15 L40 30 L55 45 L35 40 L30 60 L25 40 L5 45 L20 30 L5 15 L25 20 Z" />
    </svg>
  );
}

function Asterisk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="currentColor" className={className}>
      <path d="M27 0h6v22l16-16 4 4-16 16h22v6H37l16 16-4 4-16-16v22h-6V38L11 54 7 50l16-16H0v-6h23L7 12l4-4 16 16V0z" />
    </svg>
  );
}

function Heart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 55" fill="currentColor" className={className}>
      <path d="M30 54 C30 54 2 36 2 17 C2 8 9 2 17 2 C22 2 27 5 30 10 C33 5 38 2 43 2 C51 2 58 8 58 17 C58 36 30 54 30 54Z" />
    </svg>
  );
}

function FlowerStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="currentColor" className={className}>
      <path d="M30 2C32 18 18 18 2 18C2 20 18 22 18 30C18 38 2 40 2 42C18 42 32 42 30 58C28 42 42 42 58 42C58 40 42 38 42 30C42 22 58 20 58 18C42 18 28 18 30 2Z" />
    </svg>
  );
}

function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 30" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className={className}>
      <path d="M5 15 C15 5, 25 25, 35 15 C45 5, 55 25, 65 15 C70 10, 75 15, 75 15" />
    </svg>
  );
}

function Cross({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="currentColor" className={className}>
      <rect x="14" y="0" width="12" height="40" rx="2" />
      <rect x="0" y="14" width="40" height="12" rx="2" />
    </svg>
  );
}

function TypingEffect() {
  const { lang } = useLang();
  const words = lang.typingWords;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  const charIndex = useRef(0);

  const word = words[currentWordIndex];

  const tick = useCallback(() => {
    if (phase === "typing") {
      charIndex.current += 1;
      setDisplayText(word.slice(0, charIndex.current));
      if (charIndex.current >= word.length) setPhase("pausing");
    } else if (phase === "deleting") {
      charIndex.current -= 1;
      setDisplayText(word.slice(0, charIndex.current));
      if (charIndex.current <= 0) {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setPhase("typing");
      }
    }
  }, [phase, word, words]);

  useEffect(() => {
    let delay: number;
    if (phase === "typing") delay = 80;
    else if (phase === "pausing") delay = 2000;
    else delay = 40;

    const timer = window.setTimeout(() => {
      if (phase === "pausing") setPhase("deleting");
      else tick();
    }, delay);

    return () => window.clearTimeout(timer);
  }, [displayText, phase, tick]);

  useEffect(() => {
    charIndex.current = 0;
    setDisplayText("");
  }, [currentWordIndex]);

  return (
    <span className="text-neo-blue inline-flex items-baseline">
      <AnimatePresence mode="popLayout">
        {displayText.split("").map((char, i) => (
          <motion.span
            key={`${currentWordIndex}-${i}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.1 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="ml-0.5 inline-block w-[3px] h-[1em] bg-neo-blue translate-y-[2px]"
      />
    </span>
  );
}

const floatingStickers = [
  { Shape: SpikeBurst, pos: "-top-5 -left-5", color: "text-neo-yellow", size: "w-10 h-10", delay: 0, rotate: 12 },
  { Shape: Heart, pos: "-top-3 -right-7", color: "text-neo-pink", size: "w-8 h-8", delay: 0.25, rotate: -15 },
  { Shape: Asterisk, pos: "-bottom-5 -left-3", color: "text-neo-green", size: "w-9 h-9", delay: 0.5, rotate: 20 },
  { Shape: Cross, pos: "-bottom-3 -right-5", color: "text-neo-blue", size: "w-7 h-7", delay: 0.75, rotate: 45 },
  { Shape: FlowerStar, pos: "top-1/3 -right-9", color: "text-neo-orange", size: "w-9 h-9", delay: 1.0, rotate: 0 },
  { Shape: Squiggle, pos: "top-1/2 -left-12", color: "text-neo-pink", size: "w-14 h-6", delay: 1.25, rotate: -10 },
  { Shape: SpikeBurst, pos: "-top-8 left-1/3", color: "text-neo-orange", size: "w-7 h-7", delay: 0.4, rotate: 30 },
];

export function Hero() {
  const { lang } = useLang();

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="mx-auto max-w-6xl w-full px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="neo-border inline-block rounded-lg bg-neo-accent px-3 py-1 mb-4">
              <span className="text-sm font-bold text-neo-accent-foreground">
                {lang.pronouns} &middot; {portfolioConfig.location}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-4">
              {portfolioConfig.name}
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-2">
              {lang.title}
            </h2>

            <p className="text-xl md:text-2xl font-bold mb-6">
              {lang.subtitle}{" "}
              <TypingEffect />
            </p>

            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              {lang.bio}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#cv">
                <KeyboardButton variant="default" size="lg">
                  <Download className="h-5 w-5" />
                  {lang.buttons.downloadCV}
                </KeyboardButton>
              </a>
              <a href="#contact">
                <KeyboardButton variant="accent" size="lg">
                  <Mail className="h-5 w-5" />
                  {lang.buttons.contact}
                </KeyboardButton>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="neo-border rounded-2xl overflow-hidden neo-shadow-lg bg-neo-blue w-64 h-80 md:w-80 md:h-96 relative">
                <Image
                  src={portfolioConfig.profileImage}
                  alt={portfolioConfig.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
              {floatingStickers.map(({ Shape, pos, color, size, delay, rotate }, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${pos} ${color}`}
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  animate={{ opacity: 1, scale: 1, rotate }}
                  transition={{ delay: 0.6 + delay, type: "spring", stiffness: 260, damping: 20 }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0], rotate: [rotate, rotate + 8, rotate] }}
                    transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
                  >
                    <Shape className={size} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
