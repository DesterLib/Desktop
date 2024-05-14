import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/lib/components/Navbar";
import Sidebar from "@/lib/components/Sidebar";
import Background from "@/lib/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dester Desktop App",
  description: "An intuvitive way to see all your content library at one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full w-full relative">
          <Background />
          <div className="flex h-full z-10 relative">
            <Sidebar />
            <div className="w-[calc(100%-68px)] h-screen">
              <Navbar />
              <div className="w-full h-[calc(100%-68px)] overflow-y-scroll rounded-lg pr-4">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
