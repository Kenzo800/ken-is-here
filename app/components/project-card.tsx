import Image from "next/image";
import { ReactNode } from "react";

interface CardContent {
  src: string;
  alt: string;
  title: string;
  description: ReactNode;
}

export default function ProjectCard({
  cardContent,
}: {
  cardContent: CardContent;
}) {
  return (
    <div className="w-auto border rounded bg-[#fcfcfc] flex flex-col justify-between">
      <div className="px-12 pt-8 pb-2 w-full">
        <h3 className="text-lg font-semibold mb-2">{cardContent.title}</h3>
        <p className="text-gray-700 text-base text-justify">
          {cardContent.description}
        </p>
      </div>

      <div className="mx-auto">
        <Image
          src={cardContent.src}
          alt={cardContent.alt}
          layout="responsive"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
    </div>
  );
}
