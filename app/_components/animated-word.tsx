"use client";
import { useState, useEffect, useRef } from "react";

const wordArray = ["Builder", "Designer", "Maker"];

const AnimatedWord = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const wordRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1 === wordArray.length ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Update width whenever word changes
  useEffect(() => {
    if (wordRef.current) {
      setWidth(wordRef.current.offsetWidth);
    }
  }, [wordIndex]);

  return (
    <span
      className="inline-block transition-all duration-300 overflow-hidden"
      style={{ width: `${width}px` }} // Dynamically set width
    >
      <span
        ref={wordRef}
        className="bg-gradient-to-r from-rekaz-100 to-rekaz-200 text-transparent bg-clip-text inline-block"
      >
        {wordArray[wordIndex]}
      </span>
    </span>
  );
};

export default AnimatedWord;
