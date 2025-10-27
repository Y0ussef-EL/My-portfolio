"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { robotoSlab } from "@/utils/fonts";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  className,
}: {
  items: {
    icon: string;
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Only duplicate if not already duplicated
      const originalCount = items.length;
      if (scrollerContent.length === originalCount) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-[90%] px-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] bg-black/10",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-2",
          start && "animate-scroll"
        )}
      >
        {items.map((item) => (
          <li
            className="relative shrink-0 border-zinc-700 px-2"
            key={item.name}
          >
            <blockquote className="flex flex-col border-2 rounded-lg p-4 bg-black/50 hover:bg-black/70 transition-colors duration-300">
              {/* This div is likely for a background/border/hover effect */}
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              >
                {/* Icon was moved from here */}
              </div>

              {/* This div now holds both the icon and the name in a row */}
              <div className="relative z-20 flex flex-row items-center gap-4">
                {/* Icon */}
                <img
                  src={`/techIcons/${item.icon}`}
                  alt={item.name}
                  className="h-8 w-8 object-contain dark:invert bg-transparent "
                />

                {/* Name */}
                <span className={`${robotoSlab.className} text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400`}>
                  {item.name}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
