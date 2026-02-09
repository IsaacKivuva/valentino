"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Heart({ onCatch }: { onCatch: () => void }) {
  const [position, setPosition] = useState({ top: 50, left: 50 });

  useEffect(() => {
    moveHeart();
  }, []);

  function moveHeart() {
    setPosition({
      top: Math.random() * 80,
      left: Math.random() * 80,
    });
  }

  function handleClick() {
    onCatch();
    moveHeart();
  }

  return (
    <motion.button
      onClick={handleClick}
      className="absolute text-4xl"
      style={{
        top: `${position.top}%`,
        left: `${position.left}%`,
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{
        scale: 1.5,
        rotate: [0, 10, -10, 0], // 4 keyframes
        transition: { duration: 0.5, type: "tween" },
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      ❤️
    </motion.button>
  );
}
