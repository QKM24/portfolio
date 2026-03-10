"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { forwardRef } from "react";

interface KeyboardButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "accent" | "blue" | "outline";
  size?: "default" | "lg" | "sm";
}

const KeyboardButton = forwardRef<HTMLButtonElement, KeyboardButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const variantStyles = {
      default:
        "bg-primary text-primary-foreground hover:bg-primary/90",
      accent:
        "bg-neo-accent text-neo-accent-foreground hover:bg-neo-accent/90",
      blue:
        "bg-neo-blue text-white hover:bg-neo-blue/90",
      outline:
        "bg-background text-foreground hover:bg-muted",
    };

    const sizeStyles = {
      sm: "h-9 px-4 text-sm",
      default: "h-11 px-6 text-base",
      lg: "h-13 px-8 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "neo-border relative inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        style={{
          boxShadow: "4px 4px 0px 0px var(--foreground)",
        }}
        whileTap={{
          y: 4,
          boxShadow: "0px 0px 0px 0px var(--foreground)",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);

KeyboardButton.displayName = "KeyboardButton";

export { KeyboardButton };
