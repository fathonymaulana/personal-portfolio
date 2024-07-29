"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Container from "../ui/container";
import Link from "next/link";

const CookieNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleAccept = () => {
    // Simpan persetujuan pengguna ke localStorage atau cookie
    localStorage.setItem("cookieAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Container>
      <div className="fixed bottom-0 left-0 right-0 bg-foreground py-4 px-8 md:px-24 z-50">
        <div className="flex justify-between items-center">
          <span className="text-background text-xs md:text-sm">
            We use cookies to improve your experience. By continuing to browse
            the site you are agreeing to our{" "}
            <Link href="/privacy-policy" target="_blank" className="underline-offset-4 group-hover:underline font-semibold">
              Privacy Policy
            </Link>
            .
          </span>
          <Button variant="secondary" onClick={handleAccept} className="ml-4">
            Accept
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default CookieNotification;
