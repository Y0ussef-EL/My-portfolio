import { robotoSlab } from "@/utils/fonts";

const Header = () => {
  return (
    <header
      className={`${robotoSlab.className} text-gray-300/50 py-10 pt-15 flex flex-col items-center justify-center text-center px-4`}
    >
      <h1 className="uppercase font-extrabold text-3xl sm:text-4xl md:text-5xl">
        youssef el ammari
      </h1>

      <p className="text-lg md:text-xl mt-2 font-medium">
        Full Stack Engineer
      </p>

      <p className="max-w-2xl text-sm sm:text-base px-15 sm:px-0 justify-between">
        I build accessible, pixel-perfect digital experiences for web and mobile interfaces.
      </p>
    </header>
  );
};

export default Header;
