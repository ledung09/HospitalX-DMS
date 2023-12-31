import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import AuthProviders from "@/components/authproviders";

import type { Metadata } from "next";
import NavbarHandler from "@/components/navbar";

export const metadata: Metadata = {
  title: "Hospital X - DMS",
  description: "Data Management System of Hospital X",
  icons: {
    icon: [{ url: "/xlogo.png" }],
  },
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <AuthProviders>
          <NavbarHandler>
            {children}
          </NavbarHandler>
        </AuthProviders>
      </body>
    </html>
  );
}
