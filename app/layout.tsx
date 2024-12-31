import type { Metadata } from "next";
import "./globals.css";

import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

export const metadata: Metadata = {
  title: "サイトタイトル",
  description: "サイトの説明",
  openGraph: {
    // OGP設定
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
