"use client";
import { useRef, useEffect, useState } from "react";
import { useSprings, animated, SpringValue } from "@react-spring/web";

interface SplitTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  animationFrom?: Record<string, any>;
  animationTo?: Record<string, any>[];
  threshold?: number;
  rootMargin?: string;
  easing?: (t: number) => number | string;
  onAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text = "",
  delay = 100,
  className = "",
  animateBy = "letters",
  animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
  animationTo = [{ opacity: 1, transform: "translate3d(0,0,0)" }],
  threshold = 0.1,
  rootMargin = "-100px",
  easing = "easeOutCubic",
  onAnimationComplete,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom,
      to: inView
        ? async (next: (arg: Record<string, SpringValue<any>>) => Promise<void>) => {
          for (const step of animationTo) {
            await next(step);
          }
          animatedCount.current += 1;
          if (animatedCount.current === elements.length && onAnimationComplete) {
            onAnimationComplete();
          }
        }
        : animationFrom,
      delay: i * delay,
      config: { easing: easing as any },
    }))
  );

  // Use `animated("span")` to ensure proper rendering
  const AnimatedSpan = animated("span");

  return (
    <p ref={ref} className={`split-text ${className} flex flex-wrap`}>
      {springs.map((props, index) => {
        const elementText = elements[index] === " " ? "\u00A0" : elements[index];
        const space = animateBy === "words" && index < elements.length - 1 ? "\u00A0" : "";

        return (
          <AnimatedSpan
            key={index}
            style={props}
            className="inline-block transition-transform will-change-[transform,opacity]"
          >
            {elementText}{space}
          </AnimatedSpan>
        );
      })}
    </p>
  );
};

export default SplitText;
