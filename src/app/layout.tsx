import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { studioProfile } from "@/data/studio";

const notoSans = Noto_Sans_SC({
  weight: ["400", "500", "700", "900"],
  variable: "--font-sans-sc",
});

const notoSerif = Noto_Serif_SC({
  weight: ["400", "500", "700", "900"],
  variable: "--font-serif-sc",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: `${studioProfile.name} | 公约、室史与制度站点`,
    template: `%s | ${studioProfile.name}`,
  },
  description: studioProfile.description,
  keywords: [
    "冰雪祁缘工作室",
    "工作室公约",
    "室史",
    "组织架构",
    "三大纪律",
    "姚雪豹奖",
  ],
  authors: [{ name: studioProfile.name }],
  openGraph: {
    title: studioProfile.name,
    description: studioProfile.description,
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSans.variable} ${notoSerif.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
