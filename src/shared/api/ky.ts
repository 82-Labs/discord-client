import ky from "ky";
import Cookies from "js-cookie";

function isLikelyJwt(token: string): boolean {
  return /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/.test(token);
}

function safeBase64Decode(value: string): string | null {
  try {
    let normalized = value.replace(/-/g, "+").replace(/_/g, "/");
    const pad = normalized.length % 4;
    if (pad) normalized += "=".repeat(4 - pad);
    if (typeof atob === "function") return atob(normalized);
    return null;
  } catch {
    return null;
  }
}

function normalizeToken(raw: string): string | null {
  if (isLikelyJwt(raw)) return raw;
  const decoded = safeBase64Decode(raw);
  if (decoded) {
    const unquoted = decoded.replace(/^"|"$/g, "");
    if (isLikelyJwt(unquoted)) return unquoted;
    if (isLikelyJwt(decoded)) return decoded;
  }
  const unquoted = raw.replace(/^"|"$/g, "");
  if (isLikelyJwt(unquoted)) return unquoted;
  return null;
}

export const requestKy = ky.create({
  prefixUrl: import.meta.env.BASE_URL,
  hooks: {
    beforeRequest: [
      (request) => {
        const raw =
          typeof document !== "undefined" ? Cookies.get("accessToken") : null;
        const token = raw ? normalizeToken(raw) : null;
        if (token && !request.headers.has("Authorization")) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
  },
});
