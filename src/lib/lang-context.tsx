"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { fr } from "@/data/fr";
import { en } from "@/data/en";

type LangCode = "fr" | "en";

const LangContext = createContext<{
  lang: typeof fr;
  langCode: LangCode;
  toggle: () => void;
}>({
  lang: fr,
  langCode: "fr",
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [langCode, setLangCode] = useState<LangCode>("fr");
  const lang = langCode === "fr" ? fr : en;
  const toggle = () => setLangCode((prev) => (prev === "fr" ? "en" : "fr"));
  return (
    <LangContext.Provider value={{ lang, langCode, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
