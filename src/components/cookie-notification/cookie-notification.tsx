"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Cookie, ShieldCheck, Lock } from "lucide-react";

const CookieNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    // If it was already accepted or declined in this session/browser, we hide it.
    // However, layout.tsx might also control rendering. We handle our own unmount safely.
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    const cookieDeclined = localStorage.getItem("cookieDeclined");
    if (cookieAccepted || cookieDeclined) {
      setIsVisible(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieDeclined", "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-[420px] w-[calc(100%-2rem)] bg-background border border-border shadow-xl rounded-2xl p-6 md:p-8">
      <h2 className="text-xl font-semibold mb-6">Allow use of cookies ?</h2>

      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-4">
          <Cookie className="w-[1.2rem] h-[1.2rem] mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Provide and improve content on HTML stream Products
          </p>
        </div>

        <div className="flex items-start gap-4">
          <ShieldCheck className="w-[1.2rem] h-[1.2rem] mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Provide a safer experience by using information that we recieve from
            cookies.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <Lock className="w-[1.2rem] h-[1.2rem] mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Provide and improve HTML Stream products for people who have an
            account.
          </p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
        You can allow the use of all cookies, just essential cookies or you can
        choose more options below. you can learn more about cookies and how we
        use them, and review or change your choice at any time in our{" "}
        <Link
          href="/privacy-policy"
          className="text-foreground underline underline-offset-2"
        >
          Cookies Policy
        </Link>
        .
      </p>

      <div className="flex items-center gap-3 w-full">
        <Button onClick={handleAccept} className="flex-1 rounded-xl" size="lg">
          Allow
        </Button>
        <Button
          onClick={handleDecline}
          variant="secondary"
          className="flex-1 rounded-xl"
          size="lg"
        >
          Decline
        </Button>
      </div>
    </div>
  );
};

export default CookieNotification;
