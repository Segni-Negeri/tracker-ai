// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "tracker-ai",
  description:
    "AI-powered expense tracker to help you manage your finances",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
        <body>
          <Navbar></Navbar>
          {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
