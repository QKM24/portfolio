import "server-only";

interface PinEntry {
  pin: string;
  email: string;
  expiresAt: number;
  purpose: "cv" | "contact";
}

const pinStore = new Map<string, PinEntry>();

const PIN_TTL = 5 * 60 * 1000; // 5 minutes

export function generatePin(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function storePin(email: string, pin: string, purpose: "cv" | "contact"): void {
  const key = `${email}:${purpose}`;
  pinStore.set(key, {
    pin,
    email,
    expiresAt: Date.now() + PIN_TTL,
    purpose,
  });

  setTimeout(() => {
    pinStore.delete(key);
  }, PIN_TTL);
}

export function verifyPin(email: string, pin: string, purpose: "cv" | "contact"): boolean {
  const key = `${email}:${purpose}`;
  const entry = pinStore.get(key);

  if (!entry) return false;
  if (Date.now() > entry.expiresAt) {
    pinStore.delete(key);
    return false;
  }
  if (entry.pin !== pin) return false;

  pinStore.delete(key);
  return true;
}
