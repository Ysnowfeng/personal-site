import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "冰雪祁缘工作室 | 三热心理咨询室",
  description: "热爱进行心理咨询，帮助无数正常家庭走出正常生活",
  keywords: ["心理咨询", "关心", "温暖", "专业", "一流", "生活"],
  authors: [{ name: "生于安徽" }],
  openGraph: {
    title: "冰雪祁缘工作室 | 三热心理咨询室",
    description: "热爱抽象",
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
    <html lang="zh-CN" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
