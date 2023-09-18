import Image from "next/image";

export interface IPoemCard {
  id: string;
  title: string;
  author: string;
  content: string;
  description: string;
  section: string;
  imageID: string;
  link: string;
}

const PoemCard: React.FC<IPoemCard> = ({
  id,
  title,
  author,
  content,
  description,
  imageID,
}) => {
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

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-md shadow-mud cursor-pointer h-[40rem]">
      <Image
        src={defaultImage.path}
        alt={defaultImage.description}
        width={defaultImage.width}
        height={defaultImage.height}
        className="absolute inset-0 object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-black opacity-50" />
      <div className="flex flex-col absolute inset-0 items-center justify-center text-beige p-3 md:p-5 transform transition-all duration-500 group-hover:justify-start text-center">
        <h2 className="text-3xl lg:text-4xl font-bold uppercase">{title}</h2>
        <p className="text-xl text-primary-orange">{author}</p>
      </div>
    </div>
  );
};

export default PoemCard;
