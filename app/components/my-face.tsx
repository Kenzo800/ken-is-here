import Image from "next/image";

export default function MyFace({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="max-w-xl rounded overflow-hidden shadow-md m-2">
      <div className=" mx-auto">
        {/* Ensure your image is in the `public` directory in your Next.js project */}
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
      <div className="px-6 py-4 w-full">
        <div className="font-bold text-xl mb-2">
          The picture is as blurred as my future.
        </div>
        <p className="text-gray-700 text-base">
          Hello, I am Ken, a highly motivated and skilled individual. I am a
          Year 4 student at City University of Hong Kong with 2 years of
          internship experience in SKZ Group Limited.
        </p>
      </div>
    </div>
  );
}
