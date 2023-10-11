import Link from "next/link";
import MenuButton from "@/app/components/menu-button";
import MotionBackgroundNavbarItem from "@/app/components/motion-background-navbar-item";

export default function Header() {
  const menuItems = [
    { href: "#about", text: "About Me" },
    { href: "#education", text: "Education" },
    { href: "#project", text: "Project" },
    { href: "#contact", text: "Contact" },
  ];
  return (
    <header className="p-4 bg-white shadow-md sticky top-0">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="hover:bg-blue-200 p-2 rounded">
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
        <div className="space-x-3 hidden md:inline-flex items-center">
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
          <span>]</span>
        </div>
        <MenuButton />
      </nav>
    </header>
  );
}
