import Image from "next/image";
import { useState, useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import VideoFullView from "./VideoFullView";

type VideoComponentProps = {
  video: {
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

export default function VideoComponent({ video }: VideoComponentProps) {
  const [showDescription, setShowDescription] = useState(false);
  const [showFullView, setShowFullView] = useState(false);

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

  // Set default essay image
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

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-md shadow-mud cursor-default h-[20rem] w-1/3 bg-mud">
      <Image
        src={defaultImage.path}
        alt={defaultImage.description}
        width={defaultImage.width}
        height={defaultImage.height}
        className="object-cover w-full h-full"
      />

      <div className="flex flex-col absolute bottom-0 bg-gray-100 text-mud w-full p-3 text-left h-3/5">
        <AiFillPlayCircle
          onClick={handleViewClick}
          className="absolute top-0 right-5 h-12 w-12 -translate-y-5 text-dark-green cursor-pointer drop-shadow-lg hover:text-primary-orange"
        />
        <h2 className="text-lg font-semibold font-sans uppercase pr-10">
          {video.title}
        </h2>
        <p className="text-md font-semilight font-sans text-primary-orange">
          {video.author}
        </p>
        <p className="text-sm font-light font-serif truncate-line-4">
          {video.description}
        </p>
        <p
          className="bottom-0 right-0 text-left hover:font-semibold cursor-pointer font-sans"
          onClick={handleViewClick}
        >
          Read More
        </p>
      </div>
      {showFullView && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pt-10 backdrop-blur-sm overlay">
          <VideoFullView
            content={video}
            isOpen={showFullView}
            onClose={handleViewClick}
          />
        </div>
      )}
    </div>
  );
}
