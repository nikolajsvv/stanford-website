import { useState, useEffect } from "react";
import EmbedFullView from "./EmbedFullView";

type EmbedComponentProps = {
  embed: {
    id: string;
    title: string;
    author: string;
    content: string;
    description: string;
    section: string;
    imageID: string;
    type: string;
    link: string;
  };
};

export default function EmbedComponent({ embed }: EmbedComponentProps) {
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

  const videoUrl = new URL(embed.link);
  const video_id = videoUrl.searchParams.get("v");
  const embedVideoUrl = `https://www.youtube.com/embed/${video_id}`;

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-md shadow-mud cursor-default h-[30rem] w-full bg-mud">
      {embed.type === "video" && (
        <iframe
          src={`${embedVideoUrl}?autoplay=0&controls=0&modestbranding=1&rel=0`}
          width="100%"
          height="100%"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="object-cover h-3/5 w-full"
        ></iframe>
      )}
      {embed.type === "iframe" && (
        <iframe
          src={embed.link}
          width="100%"
          height="100%"
          loading="lazy"
          className="object-cover h-3/5 w-full"
        ></iframe>
      )}

      <div className="flex flex-col absolute bottom-0 bg-gray-100 text-mud w-full p-3 md:p-5 text-left h-2/5">
        {/* <AiFillPlayCircle
          onClick={handleViewClick}
          className="absolute top-0 right-5 h-12 w-12 -translate-y-5 text-dark-green cursor-pointer drop-shadow-lg hover:text-primary-orange"
        /> */}
        {/* <h2 className="text-lg font-semibold font-sans uppercase pr-10">
          {embed.title}
        </h2> */}
        <h2 className="text-xl lg:text-2xl font-bold uppercase">
          <span className="bg-gradient-to-r from-green-300 to-green-200 bg-[length:0px_5px] bg-left-bottom bg-no-repeat duration-500 hover:bg-[length:100%_10px] group-hover:bg-[length:100%_8px]">
            {embed.title}
          </span>
        </h2>
        <p className="font-normal text-primary-orange text-lg">
          {embed.author}
        </p>
        <p className="text-sm font-light font-serif truncate-line-4">
          {embed.description}
        </p>
      </div>
      <p
        className="text-mud absolute bottom-1 right-5 text-right font-semibold hover:font-bold hover:text-primary-green cursor-pointer font-sans "
        onClick={handleViewClick}
      >
        Learn More
      </p>
      {showFullView && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pt-10 backdrop-blur-sm overlay">
          <EmbedFullView
            content={embed}
            isOpen={showFullView}
            onClose={handleViewClick}
          />
        </div>
      )}
    </div>
  );
}
