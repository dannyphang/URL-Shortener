import { TypeAnimation } from "react-type-animation";

export default function TypingText(text: string, speed: any, repeat: any) {
  return (
    <TypeAnimation
      sequence={[text, 1000, ""]}
      speed={speed}
      repeat={repeat}
    ></TypeAnimation>
  );
}
