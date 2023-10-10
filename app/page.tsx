import Header from "./components/header";
import MyFace from "./components/my-face";
import ProjectCard from "./components/project-card";

export default function Home() {
  const imageCardInfo = {
    src: "/me.jpeg",
    alt: "handsome boy (2 years ago)",
  };

  const cardContent = [
    {
      src: "/jobspost-preview.png",
      alt: "jobspost-preview",
      title: "Jobspost - Recruitment website",
      description: (
        <>
          <a
            href="https://jobspost.com.hk"
            target="_blank"
            className="text-blue-500 cursor-pointer hover:underline"
          >
            jobspost.com.hk
          </a>{" "}
          is a Hong Kong based recruitment website which targets blue collar
          labour.
        </>
      ),
    },
    {
      src: "/hkid-ocr.png",
      alt: "hkid-ocr",
      title: "HKID - OCR",
      description: (
        <>
          HKID-OCR is a web-based application designed to extract text from HKID
          cards. The purpose of this application is to increase data entry
          accuracy and reduce the time spent on data entry. It works together
          with CYHR ERP.
        </>
      ),
    },
    {
      src: "/cyhr.png",
      alt: "cyhr-erp-system",
      title: "CYHR - ERP system",
      description: (
        <>
          CYHR is a web-based ERP system that was developed as an in-house
          project for a human resources company. It provides functionalities
          such as labor attendance recording, invoice generation, automatic tax
          form filling, SMS payment notice and data analysis.
        </>
      ),
    },
    {
      src: "/FYP_Screenshot_with_title.png",
      alt: "fyp",
      title: "Index Tracking - FYP",
      description: (
        <>
          My FYP involves the study of index tracking, which is aimed at
          replicate a market index&apos;s performance. The problem is formulated
          into a mathematical optimization problem and solved by LASSO
          technique.
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <Header />

      <main className="flex-grow container mx-auto p-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center my-16">
          Welcome to My Portfolio
        </h1>

        <section id="about" className="my-8 text-center pt-24">
          <h2 className="text-3xl font-semibold mb-8">About Me</h2>
          <MyFace src={imageCardInfo.src} alt={imageCardInfo.alt} />
        </section>

        <section id="education" className="my-8 text-center pt-24">
          <h2 className="text-3xl font-semibold mb-2">Education</h2>
          <div className="w-full p-4">
            <ul>
              <li className="mb-12">
                <h3 className="text-xl font-semibold p-3">
                  Bachelor&apos;s Degree in Computer Science
                </h3>
                <p className="text-gray-600">
                  City University of Hong Kong, 2020 - Now
                </p>
                <p className="text-gray-600">
                  Expected to graduate in February 2024
                </p>
              </li>
              <li className="mb-12">
                <h3 className="text-xl font-semibold p-3">
                  Higher Diploma in Software Engineering
                </h3>
                <p className="text-gray-600">
                  Hong Kong Institute of Vocation Education (ST), 2018-2020
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="project" className="my-8 text-center pt-24">
          <h2 className="text-3xl font-semibold mb-8">Projects</h2>
          <div className="mt-16 grid grid-rows-2 grid-flow-row gap-4 lg:grid-flow-col 2xl:grid-rows-1">
            {cardContent.map((item, i) => (
              <ProjectCard key={i} cardContent={item} />
            ))}
          </div>
        </section>

        <section id="link" className="my-8 text-center pt-24">
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

        <section id="contact" className="my-8 text-center pt-24">
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
