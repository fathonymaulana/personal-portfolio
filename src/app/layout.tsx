// src/layout.tsx

"use client";

import { Geist, Geist_Mono, Kalam } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/dark-mode/theme-provider";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { useEffect, useRef, useState } from "react";
import CookieNotification from "@/components/cookie-notification/cookie-notification";
import FloatingButton from "@/components/floating-button/floating-button";
import FloatingNav from "@/components/floating-nav/floating-nav";
import { Toaster } from "@/components/ui/sonner";
import SplashScreen from "@/components/splash-screen/splash-screen";
import gsap from "gsap";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kalam = Kalam({
  weight: ["300", "400", "700"],
  variable: "--font-custom-sans",
  subsets: ["latin"],
});

const licenseText = `
MIT License

Copyright (c) 2026 Fathony Maulana

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showCookieNotification, setShowCookieNotification] =
    useState<boolean>(false);
  const [showSplash, setShowSplash] = useState(true);
  const [splashDone, setSplashDone] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    const cookieDeclined = localStorage.getItem("cookieDeclined");
    if (!cookieAccepted && !cookieDeclined) {
      setShowCookieNotification(true);
    }

    const mitButton = document.getElementById("mit-button");
    if (mitButton) {
      mitButton.addEventListener("click", () => {
        const licenseElement = document.getElementById("license");
        if (licenseElement) {
          licenseElement.textContent = licenseText;
        }
      });
    }
  }, []);

  // Lock scroll during splash screen
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSplash]);

  const handleSplashComplete = () => {
    // Animate page content entrance
    if (mainContentRef.current) {
      gsap.fromTo(
        mainContentRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          onComplete: () => {
            setSplashDone(true);
          },
        },
      );
    }
    setShowSplash(false);
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kalam.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
          <div
            ref={mainContentRef}
            style={{
              opacity: splashDone ? 1 : 0,
            }}
          >
            <Navbar />
            {children}
            <Footer />
          </div>
          {showCookieNotification && <CookieNotification />}
          <FloatingNav />
          <FloatingButton />
          <Toaster position="top-center" offset={24} gap={12} duration={5000} />
        </ThemeProvider>
      </body>
    </html>
  );
}
