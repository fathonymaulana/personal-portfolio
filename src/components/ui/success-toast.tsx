"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const primaryCurve = [0.62, 0.05, 0.01, 0.99] as const;

interface SuccessToastProps {
  title: string;
  description: string;
}

type AnimationPhase = "enter" | "expand" | "visible" | "shrink" | "exit";

const SuccessToast: React.FC<SuccessToastProps> = ({ title, description }) => {
  const [phase, setPhase] = useState<AnimationPhase>("enter");

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Phase 1: "enter" - toast slides down from top-center (icon only, compact)
    // Phase 2: "expand" - after icon animation, expand width to show content
    timers.push(
      setTimeout(() => {
        setPhase("expand");
      }, 700),
    );

    // Phase 3: "visible" - content fully visible, stay for a while
    timers.push(
      setTimeout(() => {
        setPhase("visible");
      }, 1200),
    );

    // Phase 4: "shrink" - hide content, container shrinks back to icon-only
    timers.push(
      setTimeout(() => {
        setPhase("shrink");
      }, 3500),
    );

    // Phase 5: "exit" - slide back up and disappear
    timers.push(
      setTimeout(() => {
        setPhase("exit");
      }, 4100),
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  const showContent = phase === "expand" || phase === "visible";

  return (
    <div className="flex justify-center">
      <motion.div
        layout
        initial={{ opacity: 0, y: -40, scale: 0.9 }}
        animate={
          phase === "exit"
            ? { opacity: 0, y: -40, scale: 0.9 }
            : { opacity: 1, y: 0, scale: 1 }
        }
        transition={{
          duration: 0.55,
          ease: [...primaryCurve],
          layout: { duration: 0.4, ease: [...primaryCurve] },
        }}
        style={{ originX: 0.5 }}
        className="flex items-center gap-3 px-2.5 py-2.5 rounded-full border border-white/10 bg-[#0f1117]/95 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] w-fit mx-auto"
      >
        {/* Animated Success Icon */}
        <motion.div
          layout="position"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.5,
            ease: [...primaryCurve],
            delay: 0.1,
            layout: { duration: 0.4, ease: [...primaryCurve] },
          }}
          className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-emerald-400"
          >
            {/* Background circle with stroke animation */}
            <motion.circle
              cx="10"
              cy="10"
              r="9"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: [...primaryCurve],
                delay: 0.15,
              }}
            />
            {/* Checkmark with draw animation */}
            <motion.path
              d="M6 10.5L8.5 13L14 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: [...primaryCurve],
                delay: 0.4,
              }}
            />
          </svg>
        </motion.div>

        {/* Content - appears after icon animation, container expands to fit */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              layout="position"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{
                duration: 0.4,
                ease: [...primaryCurve],
                opacity: { duration: 0.25 },
                layout: { duration: 0.4, ease: [...primaryCurve] },
              }}
              className="flex flex-col gap-0.5 overflow-hidden pr-2"
            >
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{
                  duration: 0.3,
                  ease: [...primaryCurve],
                  delay: 0.08,
                }}
                className="text-[13px] font-semibold text-gray-100 leading-tight tracking-tight whitespace-nowrap"
              >
                {title}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{
                  duration: 0.3,
                  ease: [...primaryCurve],
                  delay: 0.15,
                }}
                className="text-[12px] text-gray-400 leading-snug whitespace-nowrap"
              >
                {description}
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SuccessToast;
