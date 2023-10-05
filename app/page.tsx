// pages/index.js

import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <header className="p-4 bg-white shadow-md">
        <nav className="container mx-auto flex justify-between">
          <Link href="/">
            <span className="text-2xl font-bold text-blue-500 cursor-pointer">
              () =&gt; Page.
            </span>
            <span className="text-2xl font-bold text-yellow-500 cursor-pointer">
              home
            </span>
            <span className="text-2xl font-bold text-blue-500 cursor-pointer">
              ();
            </span>
          </Link>
          <div className="space-x-4">
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
        </nav>
      </header>

      <main className="flex-grow container mx-auto p-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to My Portfolio
        </h1>

        <section id="about" className="mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-2">About Me</h2>
          <p>Your introduction...</p>
        </section>

        <section id="projects" className="mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-2">Projects</h2>
          <div className="grid gap-4">
            <div className="border p-4 rounded">
              <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
              <p>Project description...</p>
              <Link href="/projects/project1">
                <span className="text-blue-500 cursor-pointer">Learn More</span>
              </Link>
            </div>
            {/* Repeat for each project */}
          </div>
        </section>

        <section id="education" className="mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-2">Education</h2>
          <p>Your education history...</p>
        </section>

        <section id="links" className="mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-2">Useful Links</h2>
          <ul className="list-disc ml-5">
            <li>
              <a
                href="https://github.com/yourusername"
                className="text-blue-500"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourusername"
                className="text-blue-500"
              >
                LinkedIn
              </a>
            </li>
            {/* Add more as needed */}
          </ul>
        </section>

        <section id="contact" className="mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-2">Contact Me</h2>
          <p>Your contact info...</p>
        </section>
      </main>

      <footer className="bg-gray-200 p-4">
        <p className="text-center">© 2023 Chan Wai Ho</p>
      </footer>
    </div>
  );
}
