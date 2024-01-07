"use client";

import React, { useState } from "react";
import { useReward } from "react-rewards";
import { usePostLikes } from "~/lib/usePostLikes";
import { LoadingDots } from "./LoadingDots";
import { useDebounce } from "react-use";

const emojis = ["👍", "🙏", "😃", "✌️"];

const translation = ["16px", "13px", "10px", "7px", "4px", "0px"];

const LikeButton = ({ slug }: { slug: string }) => {
  const ConfettiConfig = {
    lifetime: 50,
    startVelocity: 12,
    spread: 45,
    elementCount: 10,
  };

  const { reward } = useReward("rewardId", "confetti", ConfettiConfig);

  const { currentUserLikes, likes, isLoading, increment } = usePostLikes(slug);

  console.log({ currentUserLikes });

  const [animatedEmojis, setAnimatedEmojis] = useState<string[]>(
    currentUserLikes ? [emojis[currentUserLikes]] : []
  );

  const handleClick = async () => {
    if (currentUserLikes >= 5) {
      return;
    }
    increment();
    if (currentUserLikes) {
      if (currentUserLikes < 4) {
        setAnimatedEmojis([...animatedEmojis, emojis[currentUserLikes]]);
      } else {
        reward();
      }
    }
  };

  return (
    <div className="relative flex gap-2 items-centet">
      <span id="rewardId" />

      {animatedEmojis.map((emoji, index) => {
        return (
          <div
            key={index}
            className="absolute w-full animate-[emoji_0.75s_ease-out] text-center opacity-0"
          >
            {emoji}
          </div>
        );
      })}

      <button
        className="relative flex items-center justify-center w-8 h-8 p-2 overflow-hidden rounded-lg active:scale-95 hover:scale-110"
        aria-label="Dar me gusta al post"
        onClick={() => handleClick()}
      >
        <div className="relative">
          <div
            className="rounded-xl bg-gray-100/10 p-[2px]"
            style={{ transformOrigin: "50% 50% 0px", transform: "none" }}
          >
            <svg viewBox="0 0 20 20" className="w-8">
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="20%"
                    style={{
                      stopColor: "rgb(251, 113, 133)",
                      stopOpacity: "1",
                    }}
                  ></stop>
                  <stop
                    offset="80%"
                    style={{ stopColor: "rgb(139, 92, 246)", stopOpacity: "1" }}
                  ></stop>
                </linearGradient>
                <mask id="mask" mask-type="alpha" maskUnits="userSpaceOnUse">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path>
                </mask>
              </defs>
              <g mask="url(#mask)">
                <rect width="20" height="20" fill="#1A202C"></rect>
                <rect
                  fill="url(#gradient)"
                  width="16"
                  height="16"
                  x="2"
                  y="2"
                  style={{
                    transform: `translateY(${
                      translation[currentUserLikes || 0]
                    })`,
                    transformOrigin: "10px 10px",
                  }}
                ></rect>
              </g>
            </svg>
          </div>
        </div>
      </button>
      <div className="flex items-center font-bold leading-none text-indigo-700 text-md dark:text-rose-100/90">
        {isLoading ? <LoadingDots /> : <span>{likes}</span>}
      </div>
    </div>
  );
};

export default LikeButton;
