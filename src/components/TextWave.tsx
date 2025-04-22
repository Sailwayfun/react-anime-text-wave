import {
  createScope,
  type Scope,
  createTimeline,
  type Timeline,
} from "animejs";
import { useEffect, useRef } from "react";
import "./TextWave.css";

interface TextWaveProps {
  text: { name: string; id: string }[];
  index: number;
}

export default function TextWave({ text, index }: TextWaveProps) {
  const scope = useRef<Scope | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const timeline = useRef<Timeline | null>(null);

  useEffect(() => {
    if (!root.current) return;

    // Calculate timing constants
    const charDelay = 60; // Slightly longer char delay for smoother wave
    const animationDuration = 1200; // Match Dogstudio's 1.2s duration
    const lineDelay = index * 100; // Quick succession between lines

    timeline.current = createTimeline({
      autoplay: true,
      defaults: {
        duration: animationDuration,
        ease: "cubicBezier(.245, .495, 0, .99)", // Dogstudio's exact easing
      },
    });

    scope.current = createScope({ root }).add(() => {
      // Initial delay based on line position
      timeline.current?.add(
        {},
        {
          duration: lineDelay,
        }
      );

      // Wave in animation for each character
      timeline.current?.add(".text_box .letter", {
        translateX: [80, 0],
        translateY: [50, 0],
        translateZ: [-300, 0],
        scaleY: [0.01, 1],
        rotateX: [-90, 0],
        rotate: [-35, 0],
        opacity: [0, 1],
        delay: (_el, i) => i * charDelay,
        duration: animationDuration,
      });
    });

    return () => {
      scope.current?.revert();
      timeline.current = null;
    };
  }, [index]);

  return (
    <div ref={root} className="text_box">
      {text.map((char) => (
        <span key={char.id} className="letter" data-char={char.name}>
          {char.name}
        </span>
      ))}
    </div>
  );
}
