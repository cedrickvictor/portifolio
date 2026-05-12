export function getSiteUrl() {
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_URL ||
    process.env.NEXT_PUBLIC_VERCEL_URL;

  if (!fromEnv) return "http://localhost:3000";
  if (fromEnv.startsWith("http")) return fromEnv;
  return `https://${fromEnv}`;
}

