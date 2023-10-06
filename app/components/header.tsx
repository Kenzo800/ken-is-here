import Link from "next/link";
import MenuButton from "@/app/components/menu-button";
export default function Header() {
  return (
    <header className="p-4 bg-white shadow-md">
      <nav className="container mx-auto flex justify-between">
        <Link href="/">
          <span className="text-2xl font-bold text-blue-500 cursor-pointer hidden lg:inline">
            () =&gt; Page.
          </span>
          <span className="text-2xl font-bold text-yellow-500 cursor-pointer">
            home
          </span>
          <span className="text-2xl font-bold text-blue-500 cursor-pointer">
            ();
          </span>
        </Link>
        <div className="space-x-3 hidden md:inline">
          <span className="hidden lg:inline">const navBar = </span>
          <span>[</span>
          <Link href="#about">
            <span className="text-blue-500 cursor-pointer">About</span>
          </Link>
          <span>,</span>
          <Link href="#projects">
            <span className="text-blue-500 cursor-pointer">Projects</span>
          </Link>
          <span>,</span>
          <Link href="#education">
            <span className="text-blue-500 cursor-pointer">Education</span>
          </Link>
          <span>,</span>
          <Link href="#links">
            <span className="text-blue-500 cursor-pointer">Links</span>
          </Link>
          <span>,</span>
          <Link href="#contact">
            <span className="text-blue-500 cursor-pointer">Contact</span>
          </Link>
          <span>]</span>
        </div>
        <MenuButton />
      </nav>
    </header>
  );
}
