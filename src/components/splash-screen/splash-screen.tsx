"use client";

import React, { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import gsap from "gsap";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const splashRef = useRef<HTMLDivElement>(null);
  const lottieContainerRef = useRef<HTMLDivElement>(null);
  const overlayTopRef = useRef<HTMLDivElement>(null);
  const overlayBottomRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const [lottieData, setLottieData] = useState<object | null>(null);

  // Fetch lottie JSON lazily
  useEffect(() => {
    fetch("/videos/lottie/splash-screen.json")
      .then((res) => res.json())
      .then((data) => setLottieData(data))
      .catch(() => {
        // If lottie fails to load, skip splash screen
        onComplete();
      });
  }, [onComplete]);

  // Initialize lottie once data is loaded
  useEffect(() => {
    if (!lottieData || !lottieContainerRef.current) return;

    animationRef.current = lottie.loadAnimation({
      container: lottieContainerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: lottieData,
    });

    animationRef.current.setSpeed(1);

    animationRef.current.addEventListener("complete", () => {
      startExitAnimation();
    });

    // Fallback: if lottie takes too long, force exit after 5s
    const fallbackTimer = setTimeout(() => {
      startExitAnimation();
    }, 5000);

    return () => {
      clearTimeout(fallbackTimer);
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lottieData]);

  const startExitAnimation = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Step 1: Scale down and fade the lottie icon
    tl.to(lottieContainerRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "power3.inOut",
    });

    // Step 2: Split the splash screen - top half slides up, bottom half slides down
    tl.to(
      overlayTopRef.current,
      {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
      },
      "-=0.1",
    );

    tl.to(
      overlayBottomRef.current,
      {
        yPercent: 100,
        duration: 0.8,
        ease: "power4.inOut",
      },
      "<", // start at same time as top
    );
  };

  // Don't render anything until lottie data is loaded
  if (!lottieData) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          backgroundColor: "#171717",
        }}
      />
    );
  }

  return (
    <div
      ref={splashRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      {/* Top half of the curtain */}
      <div
        ref={overlayTopRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "50%",
          backgroundColor: "#171717",
        }}
      />
      {/* Bottom half of the curtain */}
      <div
        ref={overlayBottomRef}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50%",
          backgroundColor: "#171717",
        }}
      />
      {/* Lottie animation centered */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          ref={lottieContainerRef}
          style={{
            width: "min(200px, 40vw)",
            height: "min(200px, 40vw)",
          }}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
