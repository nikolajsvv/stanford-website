import Image from "next/image";
import { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

export interface IVideoCard {
  id: string;
  title: string;
  author: string;
  description: string;
  type: string;
  section: string;
  image: string;
  url: string;
}

const VideoCard: React.FC<IVideoCard> = ({ title, author, description }) => {
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

  const [showDescription, setShowDescription] = useState(false);

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
        <AiFillPlayCircle className="absolute top-0 right-5 h-12 w-12 -translate-y-5 text-dark-green cursor-pointer drop-shadow-lg hover:text-primary-orange" />
        <h2 className="text-lg font-semibold font-sans uppercase pr-10">
          {title}
        </h2>
        <p className="text-md font-semilight font-sans text-primary-orange">
          {author}
        </p>
        <p className="text-sm font-light font-serif truncate-line-4">
          {description}
        </p>
        <p className="bottom-0 right-0 text-left hover:font-semibold cursor-pointer font-sans">
          Read More
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
