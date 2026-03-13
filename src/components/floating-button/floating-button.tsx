"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, X, ArrowUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const FloatingButton: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [message, setMessage] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    const phoneNumber = "6281299056988";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappUrl, "_blank");
    setMessage("");
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const currentTime = new Date().toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={cn(
        "fixed right-4 md:right-8 z-40 flex flex-col items-end gap-4",
        pathname === "/" ? "bottom-24 md:bottom-8" : "bottom-6 md:bottom-8",
      )}
    >
      {isOpen && (
        <div
          ref={menuRef}
          className="w-[calc(100vw-2rem)] sm:w-[360px] bg-background border border-border shadow-2xl rounded-2xl overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 zoom-in-95"
        >
          {/* Header */}
          <div className="bg-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-muted border-2 border-primary-foreground/20 ring-2 ring-primary">
                <Image
                  src="/images/logo/Logo.svg"
                  alt="logo"
                  width={32}
                  height={32}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-primary-foreground font-semibold text-sm">
                  Fathony Maulana
                </span>
                <span className="text-primary-foreground/80 text-xs flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Online
                </span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground h-8 w-8 rounded-full"
              onClick={handleToggleChat}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-muted/30 h-[280px] overflow-y-auto flex flex-col gap-5">
            <div className="flex justify-center mt-2">
              <span className="bg-muted px-3 py-1 text-[10px] text-muted-foreground font-medium rounded-full border border-border/50">
                Today
              </span>
            </div>

            {/* Bubble Chat */}
            <div className="flex gap-2 items-end">
              <div className="rounded-full w-6 h-6 bg-muted mb-5">
                <Image
                  src="/images/logo/Logo.svg"
                  alt="logo"
                  width={24}
                  height={24}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-1 max-w-[85%]">
                <div className="bg-muted p-3 text-sm rounded-r-2xl border border-border rounded-tl-2xl rounded-bl-sm text-foreground shadow-sm">
                  Hi there!👋 Looking for user-centric design solutions?
                </div>
                <span className="text-[10px] text-muted-foreground ml-1">
                  {currentTime}
                </span>
              </div>
            </div>
            <div className="flex gap-2 items-end">
              <div className="rounded-full w-6 h-6 bg-muted mb-5">
                <Image
                  src="/images/logo/Logo.svg"
                  alt="logo"
                  width={24}
                  height={24}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-1 max-w-[85%]">
                <div className="bg-muted p-3 text-sm rounded-r-2xl border border-border rounded-tl-2xl rounded-bl-sm text-foreground shadow-sm">
                  My name is Fathony Maulana. As a UI/UX designer, I'm ready to
                  help you build a website, mobile app, logo, or portfolio that
                  stands out.
                </div>
                <span className="text-[10px] text-muted-foreground ml-1">
                  {currentTime}
                </span>
              </div>
            </div>
            <div className="flex gap-2 items-end">
              <div className="rounded-full w-6 h-6 bg-muted mb-5">
                <Image
                  src="/images/logo/Logo.svg"
                  alt="logo"
                  width={24}
                  height={24}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-1 max-w-[85%]">
                <div className="bg-muted p-3 text-sm rounded-r-2xl border border-border rounded-tl-2xl rounded-bl-sm text-foreground shadow-sm">
                  Let's discuss and create something extraordinary!
                </div>
                <span className="text-[10px] text-muted-foreground ml-1">
                  {currentTime}
                </span>
              </div>
            </div>
          </div>

          {/* Footer Input */}
          <div className="p-3 border-t bg-background">
            <form
              onSubmit={handleSendMessage}
              className="flex items-center gap-2"
            >
              <Input
                placeholder="Tulis pesan..."
                className="flex-1 focus-visible:ring-1 focus-visible:ring-primary border-muted-foreground/20 bg-muted/20"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                type="submit"
                size="icon"
                className="shrink-0 rounded-full w-9 h-9 shadow-md transition-transform active:scale-95"
                disabled={!message.trim()}
              >
                <Send className="w-4 h-4 ml-0.5" />
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          variant="outline"
          size="icon"
          className="w-[60px] h-[60px] rounded-full shadow-lg bg-background hover:bg-muted transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5 text-foreground" />
        </Button>
      )}

      {/* Toggle Button */}
      <Button
        onClick={handleToggleChat}
        className="w-[60px] h-[60px] rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 p-0 flex items-center justify-center hover:-translate-y-1"
        size="icon"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <FaWhatsapp className="w-8 h-8 text-primary-foreground" />
        )}
      </Button>
    </div>
  );
};

export default FloatingButton;
