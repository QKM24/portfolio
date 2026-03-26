import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LangProvider } from "@/lib/lang-context";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio — Khouloud Mrabtini",
  description: "Développeuse Full-Stack — Portfolio Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LangProvider>
            {children}
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  border: "2px solid var(--foreground)",
                  borderRadius: "8px",
                  boxShadow: "4px 4px 0px 0px var(--foreground)",
                  fontWeight: "bold",
                },
              }}
            />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
