import { MovingBar } from "@/components/MovingBar/movingBar";
import { NavbarDemo } from "./../components/Navbar/navbar";
import Header from "@/components/Header/header";
import About from "@/components/About/about";
import { CoreSkills } from '@/components/CoreSkills/CoreSkills';
export default function Home() {
  return (
    <div className="relative w-full">
      <main className="bg-gradient-to-b from-emerald-950 to-black min-h-screen px-4 md:px-8 lg:px-16">
        <NavbarDemo />
        <Header />
        <About />
        <MovingBar />
        <CoreSkills />
      </main>
      <footer className=""></footer>
    </div>
  );
}
