"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid lg:grid-cols-1  py-10", className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-zinc-600/20 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="border-0 bg-transparent shadow-none">
            <CardTitle>{item.title}</CardTitle>

            {/* MAIN CONTAINER
    - Default (Mobile): Stacked vertically (flex-col)
    - Medium screens and up (md:): Side-by-side (flex-row) and vertically centered
  */}
            <div className="flex flex-col md:flex-row md:items-center">
              {/* DESCRIPTION
      - Default (Mobile): Full width
      - Medium screens and up (md:): 60% width, allowed to grow
    */}
              <CardDescription className="w-full md:w-[60%] md:flex-grow">
                {item.description}
              </CardDescription>

              {/* IMAGE CONTAINER
      - Default (Mobile): Full width, centered content, margin-top for spacing
      - Medium screens and up (md:): Resets to your original 40% width layout
    */}
              <div
                className="
        w-full mt-4 flex items-center justify-center 
        md:w-[40%] md:max-w-[200px] md:flex-shrink-0 md:mt-0 md:justify-start
      "
              >
                {/* IMAGE
        - We apply max-w-[100px] directly to the image.
        - On mobile: It's centered (by parent) and capped at 100px.
        - On desktop: It fills its container (which is also capped at 100px) 
                      and gets its margin-left back (md:ml-2).
      */}
                <Image
                  src="/AboutIcon.png"  
                  alt="arrow right"
                  width={200}
                  height={200}
                  sizes="(max-width: 768px) 30vw, 100px"
                  className="
          w-full max-w-[200px] h-auto object-contain
          md:ml-2
        "
                />
              </div>
            </div>
          </Card>
          {/* <Card className="border-0 bg-transparent shadow-none">
            <CardTitle>{item.title}</CardTitle>
            <div className="flex flex-row">
            <CardDescription>{item.description}</CardDescription>
            <Image
              src="/AboutIcon.png"
              alt="arrow right"
              width={20}
              height={20}
              className="ml-2 mt-6"
            />
            </div>
          </Card> */}
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-zinc border  group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50 hover:scale-105 transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
