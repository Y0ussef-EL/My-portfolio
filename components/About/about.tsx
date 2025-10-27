import Image from "next/image";
import { WordRotate } from "../ui/word-rotate";
import { robotoSlab } from "@/utils/fonts";
import { FloatingDock } from "../ui/floating-dock";
import {
  IconBrandGithub,
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
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
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
      className={`${robotoSlab.className} text-gray-300/50 grid grid-cols-1 md:grid-cols-2 gap-6 px-6`}
    >
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start space-y-4">
        <div className="text-2xl font-semibold mx-16">
          Hello <span>👋</span>,
        </div>
        <p className="text-3xl leading-relaxed mx-16">
          My name is <span className="font-bold">EL AMMARI YOUSSEF</span>, a
          <span className="font-bold"> Software Developer </span> based in
          Morocco, dedicated to crafting beautiful and functional web and mobile
          applications that elevate user experiences.
        </p>
        <div className="mx-16">
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
        <div className="mx-16 flex w-fit pt-6">
          <FloatingDock
        items={links}
      />
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex justify-center items-center">
        <Image
          src="/HeroPic.png"
          alt="picture"
          width={800}
          height={1000}
          className="object-cover opacity-30"
        />
      </div>
    </div>
  );
};

export default About;
