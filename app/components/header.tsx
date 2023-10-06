import Link from "next/link";
import MenuButton from "@/app/components/menu-button";
import MotionBackgroundNavbarItem from "@/app/components/motion-background-navbar-item";

export default function Header() {
  const menuItems = [
    { href: "#about", text: "About Me" },
    { href: "#project", text: "Project" },
    { href: "#education", text: "Education" },
    { href: "#link", text: "Link" },
    { href: "#contact", text: "Contact" },
  ];
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
          {menuItems.map((item, i) => (
            <>
              <MotionBackgroundNavbarItem
                key={i}
                href={item.href}
                text={item.text}
              />
              {i < menuItems.length - 1 && <span>,</span>}
            </>
          ))}

          {/* <Link href="#about">
            <span className="text-blue-500 cursor-pointer">About Me</span>
          </Link>
          <span>,</span>
          <Link href="#project">
            <span className="text-blue-500 cursor-pointer">Project</span>
          </Link>
          <span>,</span>
          <Link href="#education">
            <span className="text-blue-500 cursor-pointer">Education</span>
          </Link>
          <span>,</span>
          <Link href="#link">
            <span className="text-blue-500 cursor-pointer">Link</span>
          </Link>
          <span>,</span>
          <Link href="#contact">
            <span className="text-blue-500 cursor-pointer">Contact</span>
          </Link> */}
          <span>]</span>
        </div>
        <MenuButton />
      </nav>
    </header>
  );
}
