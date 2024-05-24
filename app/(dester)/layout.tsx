import type { Metadata } from "next";
import "../globals.css";
import Navigation from "@/lib/components/Navigation";

export const metadata: Metadata = {
  title: "Dester Desktop App",
  description: "An intuvitive way to see all your content library at one place",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-screen relative">
      <Navigation />
      <div className="flex h-full relative w-full overflow-y-overlay">
        {children}
      </div>
    </div>
  );
}
