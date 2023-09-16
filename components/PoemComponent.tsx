import Image from "next/image";
import { useState } from "react";
import images from "../data/images.json";
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
  const [showOverlay, setShowOverlay] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

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

  const handleDescriptionToggle = (event: any) => {
    event.stopPropagation(); // This prevents the event from bubbling up
    setShowDescription(!showDescription);
  };

  const handleParentDivClick = (event: any) => {
    event.stopPropagation();

    if (!showDescription) {
      // Implement expand or redirect logic here
    }
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl shadow-md shadow-mud cursor-pointer h-[40rem]"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => {
        setShowOverlay(false);
        setShowDescription(false);
      }}
      onClick={handleParentDivClick}
    >
      <Image
        src={poemImage.path}
        alt={poemImage.description}
        width={poemImage.width}
        height={poemImage.height}
        className="absolute inset-0 object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
      />

      {/* Background opacity animation */}
      {showOverlay ? (
        <span className="absolute inset-0 bg-black opacity-50" />
      ) : (
        <span className="absolute inset-0 bg-black opacity-70" />
      )}

      {/* Written Content */}
      <div className="flex flex-col absolute inset-0 items-center justify-center text-beige p-3 md:p-5 transform transition-all duration-500 group-hover:justify-start text-center">
        <h2 className="text-3xl lg:text-4xl font-bold uppercase">
          {poem.title}
        </h2>
        <p className="text-xl text-primary-orange">{poem.author}</p>
        {showOverlay && (
          <div className="mt-4 mb-10 overflow-y-auto max-h-[100%]">
            <p
              className="font-light text-base md:text-md lg:text-lg overflow-auto text-center"
              dangerouslySetInnerHTML={{ __html: poem.content }}
            />
          </div>
        )}
      </div>
      {showOverlay && poem.description && (
        <div
          className={`absolute ${showDescription ? "inset-0" : "bottom-0"} ${
            showDescription ? "bg-opacity-100" : "bg-opacity-30"
          } left-0 right-0 text-beige bg-mud text-center transition-all duration-300 overflow-y-auto px-8`}
          onClick={handleDescriptionToggle}
        >
          <p className="font-normal text-lg hover:font-semibold hover:text-primary-orange transition-all duration-300 mt-3">
            {showDescription ? "Close" : "Open Description"}
          </p>
          <p className="font-light font-serif pt-4">
            {showDescription && <div className="mt-2">{poem.description}</div>}
          </p>
        </div>
      )}
    </div>
  );
}
