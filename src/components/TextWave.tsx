import {
  createScope,
  type Scope,
  createTimeline,
  type Timeline,
} from "animejs";
import { useEffect, useRef } from "react";

interface TextWaveProps {
  text: { name: string; id: string };
}

export default function TextWave({ text }: TextWaveProps) {
  const scope = useRef<Scope | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const timeline = useRef<Timeline | null>(null);
  useEffect(() => {
    if (!root.current) return;

    timeline.current = createTimeline();

    scope.current = createScope({ root }).add(() => {
      timeline.current?.add(".text_box .letter", {
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (_el, i) => 45 * (i + 1),
      });
      timeline.current?.add(".text_box", {
        opacity: 0,
        duration: 1000,
        delay: 1000,
        ease: "outExpo",
      });
    });
    return () => {
      scope.current = null;
    };
  }, []);

  return (
    <div ref={root} className="text_box">
      {text.name.split("").map((char, index) => (
        <span key={`${text.id}-${index}`} className="letter">
          {char}
        </span>
      ))}
    </div>
  );
}

/**
 * anime.timeline({loop: true})
  .add({
    targets: '.text_box .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.text_box',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
 */
