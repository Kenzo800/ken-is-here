import Link from "next/link";
import Header from "./components/header";
import MyFace from "./components/my-face";

export default function Home() {
  const imageCardInfo = {
    src: "/me.jpeg",
    alt: "handsome boy (2 years ago)",
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <Header />

      <main className="flex-grow container mx-auto p-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center my-16">
          Welcome to My Portfolio
        </h1>

        <section id="about" className="my-16 text-center">
          <h2 className="text-3xl font-semibold mb-2">About Me</h2>
          <MyFace src={imageCardInfo.src} alt={imageCardInfo.alt} />
        </section>

        <section id="project" className="my-16 text-center">
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

        <section id="education" className="my-16 text-center">
          <h2 className="text-3xl font-semibold mb-2">Education</h2>
          <p>Your education history...</p>
        </section>

        <section id="link" className="my-16 text-center">
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

        <section id="contact" className="my-16 text-center">
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
