import Image from "next/image";
import { useState, useEffect } from "react";
import images from "../data/images.json";
import PoemFullViewComponent from "./PoemFullView";
// import DOMPurify from 'isomorphic-dompurify';

type PoemComponentProps = {
  poem: {
    id: string;
    title: string;
    author: string;
    content: string;
    description: string;
    section: string;
    imageID: string;
    link: string;
  };
};

type poem = {
  id: string;
  title: string;
  author: string;
  content: string;
  description: string;
  section: string;
  imageID: string;
  link: string;
};

export default function PoemComponent({ poem }: PoemComponentProps) {
  const [showFullView, setShowFullView] = useState(false);

  // const cleanContent = DOMPurify.sanitize(poem.content);

  // Set default poem image
  const defaultImage = {
    id: "",
    name: "default.webp",
    path: "/images/essays/default.webp",
    author: "",
    description: "Default image description",
    category: "default",
    link: "",
    width: 640,
    height: 400,
  };

  // Grab image by poem
  const getImageByPoem = (poem: poem) => {
    return images.find((image) => image.id === poem.imageID) || defaultImage;
  };

  const poemImage = getImageByPoem(poem);

  useEffect(() => {
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const handleViewClick = () => {
    if (!showFullView) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    setShowFullView(!showFullView);
  };

  return (
    <div className="flex items-center justify-center group relative overflow-hidden rounded-2xl shadow-md shadow-mud h-[30rem]">
      <Image
        src={poemImage.path}
        alt={poemImage.description}
        width={poemImage.width}
        height={poemImage.height}
        className="absolute inset-0 object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-black opacity-50" />
      <div className="flex flex-col absolute inset-0 items-center text-beige p-3 mb-7 md:mb-10 md:p-5 text-center transform transition-transform duration-500 translate-y-1/3 group-hover:translate-y-0">
        <h2 className="text-3xl lg:text-4xl font-bold uppercase">
          {poem.title}
        </h2>
        <p className="text-xl font-semibold text-primary-orange">
          {poem.author}
        </p>
        <p
          className="hidden group-hover:inline font-serif font-light text-base md:text-md lg:text-lg text-center transofrm transition-all duration-500 overflow-auto transparent-scrollbar w-full"
          dangerouslySetInnerHTML={{ __html: poem.content }}
        ></p>
      </div>

      {poem.description && (
        <p
          onClick={handleViewClick}
          arial-label="button"
          className="text-center w-full text-beige bg-mud bg-opacity-30 absolute bottom-0 p-2 hover:font-semibold hover:bg-opacity-50 hover:cursor-pointer"
        >
          Description
        </p>
      )}
      {showFullView && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pt-10 backdrop-blur-sm overlay">
          <PoemFullViewComponent
            content={poem}
            isOpen={showFullView}
            onClose={handleViewClick}
          />
        </div>
      )}
    </div>
  );
}
