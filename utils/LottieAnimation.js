"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Lottie Player
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  },
);

const LottieAnimation = ({
  src,
  height = 600,
  width = 600,
  autoplay = true,
  loop = true,
}) => {
  // Handle on-load actions directly
  useEffect(() => {
    console.log("Lottie animation loaded successfully!");
    // Add any additional logic for when the component is mounted or ready
  }, []);

  return (
    <div style={{ height: `${height}px`, width: `${width}px` }}>
      <Player
        src={src}
        autoplay={autoplay}
        loop={loop}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default LottieAnimation;
