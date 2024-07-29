"use client"; // Mengindikasikan bahwa ini adalah Client Component

import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLiveChat = () => {
    const phoneNumber = "6281299056988";
    const message = encodeURIComponent(
      "Halo, saya ingin bertanya lebih lanjut."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleVoiceCall = () => {
    const phoneNumber = "tel:+6281299056988";
    window.open(phoneNumber, "_self");
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

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

  return (
    <div
      style={{
        position: "fixed",
        bottom: "80px",
        right: "-50px",
        zIndex: 10,
        rotate: "-90deg",
      }}
    >
      <Button onClick={handleButtonClick}>
        {isOpen ? "Close Menu" : "Whatsapp"}
        <FaWhatsapp className="ml-2 w-6 h-6" />
      </Button>
      {isOpen && (
        <div
          ref={menuRef}
          style={{
            position: "absolute",
            bottom: "100px",
            right: "-50px",
            width: "200px",
            background: "background",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            animation: "fadeIn 0.3s",
            rotate: "90deg",
          }}
        >
          <ul style={{ listStyle: "none", padding: "10px", margin: "0" }}>
            <li>
              <Button
                onClick={handleLiveChat}
                style={{ width: "100%", marginBottom: "10px" }}
                size="sm"
              >
                Live Chat
              </Button>
            </li>
            <li>
              <Button onClick={handleVoiceCall} style={{ width: "100%" }} size="sm">
                Voice Call
              </Button>
            </li>
          </ul>
        </div>
      )}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingButton;
