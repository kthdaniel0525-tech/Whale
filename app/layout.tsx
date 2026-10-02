import type { Metadata, Viewport } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: {
    default: "Whale AI — We build ideas into real products.",
    template: "%s | Whale AI",
  },
  description:
    "Whale AI는 AI와 소프트웨어를 활용해 실제 사용 가능한 서비스를 기획하고, 개발하고, 배포하는 제품 팀입니다.",
  keywords: ["Whale AI", "AI", "Product Team", "Investment Agent", "Fintech", "Software"],
  authors: [{ name: "Whale AI" }],
  creator: "Whale AI",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://whale-ai-product-team.b2hg6wj4sd.chatgpt.site",
  ),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Whale AI — We build ideas into real products.",
    description: "AI와 소프트웨어로 아이디어를 실제 제품으로 만드는 팀.",
    type: "website",
    locale: "ko_KR",
    siteName: "Whale AI",
  },
  twitter: {
    card: "summary",
    title: "Whale AI — We build ideas into real products.",
    description: "AI와 소프트웨어로 아이디어를 실제 제품으로 만드는 팀.",
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0c10",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
