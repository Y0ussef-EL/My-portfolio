import Image from "next/image";
import { WordRotate } from "../ui/word-rotate";
import { robotoSlab } from "@/utils/fonts";
import { FloatingDock } from "../ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

const About = () => {
  const words = ["scalable", "intuitive", "robust", "innovative"];
  const words2 = ["solutions", "experiences", "applications", "platforms"];
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/youssef-el-ammari-a733a91b9/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <div
      className={`${robotoSlab.className} text-gray-300/50 grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-6`}
    >
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center md:items-start space-y-4">
        <div className="text-2xl font-semibold text-center md:text-left md:mx-16">
          Hello <span>👋</span>,
        </div>
        <p className="text-3xl leading-relaxed text-center md:text-left md:mx-16">
          My name is <span className="font-bold">EL AMMARI YOUSSEF</span>, a
          <span className="font-bold"> Software Developer </span> based in
          Morocco, dedicated to crafting beautiful and functional web and mobile
          applications that elevate user experiences.
        </p>
        <div className="mx-auto md:mx-16">
          <div className=" bg-zinc-600/20 py-4 pt-3 px-3 rounded-2xl min-w-70 h-fit inline-block text-center">
            <div className="flex flex-col">
              <WordRotate
                className="text-zink-600 font-bold text-4xl capitalize"
                words={words}
              />
              <WordRotate
                className="text-zink-600 font-bold text-4xl capitalize"
                words={words2}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto md:mx-16 flex w-fit pt-6">
          <FloatingDock items={links} />
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex justify-center items-center">
        <Image
          src="/HeroPic.png"
          alt="picture"
          width={800}
          height={1000}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 400px"
          className="w-full max-w-[400px] h-auto object-cover opacity-30"
        />
      </div>
    </div>
  );
};

export default About;
