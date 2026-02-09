"use client";

import { useState } from "react";
import Heart from "./Heart";
import ValentineQuestion from "./ValentineQuestion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import useSound from "use-sound";
import { MotionConfig } from "framer-motion";

const TARGET_SCORE = 10;

export default function Game() {
  const [score, setScore] = useState(0);
  const [won, setWon] = useState(false);
  const { width, height } = useWindowSize();
  const [playSound] = useSound(
    "/sounds/Hornsphere - FOR LOVERS ft. Mutoriah, Aliye, Noi (Official Music Video) - Hornsphere.mp3",
  );
  const [playCatchSound] = useSound("/sounds/pop.wav");

  function handleCatch() {
    playCatchSound();
    setScore((prev) => {
      const next = prev + 1;
      if (next >= TARGET_SCORE) setWon(true);

      return next;
    });
  }

  if (won) {
    return (
      <>
        {playSound()}
        <Confetti width={width} height={height} numberOfPieces={200} />
        <ValentineQuestion />
      </>
    );
  }

  return (
    <div className="flex flex-col items-center relative w-full max-w-md h-[500px] border rounded-xl p-4 text-center overflow-hidden  ">
      <div className="mb-6">
        <img
          src="/images/two.jpg"
          alt="Valentine"
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-2xl font-semibold mb-2">
          Heyy you😊 Catch the hearts 💖
        </h1>
        <p className="mb-4 text-muted-foreground">
          Score {TARGET_SCORE} to unlock the surprise🤭
        </p>

        <p className="mb-4 font-medium">Score: {score}</p>

        <Heart onCatch={handleCatch} />
      </div>
    </div>
  );
}
