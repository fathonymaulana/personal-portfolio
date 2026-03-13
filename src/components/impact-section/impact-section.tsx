"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate } from "motion/react";

const primaryCurve = [0.62, 0.05, 0.01, 0.99] as const;

const AnimatedCounter = ({
  to,
  suffix = "",
}: {
  to: number;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          setHasAnimated(true);
          const controls = animate(0, to, {
            duration: 2,
            ease: [...primaryCurve],
            onUpdate: (value) => {
              if (ref.current) {
                ref.current.textContent = Math.round(value).toString() + suffix;
              }
            },
          });
          return () => controls.stop();
        }
      },
      { rootMargin: "-50px" },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, suffix, hasAnimated]);

  return <span ref={ref}>0{suffix}</span>;
};

interface StatItemProps {
  to: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({
  to,
  suffix,
  label,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-50px" },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-4 md:py-8 flex-1 gap-2">
      <h3
        ref={ref}
        className="text-4xl md:text-5xl tracking-tighter font-semibold text-foreground"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          opacity: isVisible ? 1 : 0,
          transition: `transform 0.8s cubic-bezier(${primaryCurve.join(",")}), opacity 0.8s cubic-bezier(${primaryCurve.join(",")})`,
          transitionDelay: `${delay}s`,
        }}
      >
        <AnimatedCounter to={to} suffix={suffix} />
      </h3>
      <p className="text-muted-foreground text-xs md:text-sm">{label}</p>
    </div>
  );
};

const ImpactSection: React.FC = () => {
  return (
    <section
      id="stats"
      className="py-24 md:py-24 flex flex-col items-center justify-center gap-12 w-full border-b border-border"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-4 max-w-3xl px-4">
        <span className="italic underline decoration-muted-foreground underline-offset-4 text-foreground text-sm font-medium font-custom-sans">
          Stats
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          My Impact
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">
          Celebrating the milestones achieved.
        </p>
      </div>

      {/* Stats container */}
      <div className="w-full border-y border-border flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border overflow-hidden">
        <StatItem to={100} suffix="+" label="Project Completed" delay={0} />
        <StatItem to={18} label="Industry Covered" delay={0.1} />
        <StatItem to={5} label="Years of Experience" delay={0.2} />
      </div>
    </section>
  );
};

export default ImpactSection;
