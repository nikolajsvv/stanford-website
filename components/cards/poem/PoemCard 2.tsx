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

const PoemCard: React.FC<IPoemCard> = ({ title, author, content }) => {
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
    <div className="group relative overflow-hidden rounded-2xl shadow-md shadow-mud cursor-pointer h-[40rem] w-1/3">
      <Image
        src={defaultImage.path}
        alt={defaultImage.description}
        width={defaultImage.width}
        height={defaultImage.height}
        className="absolute inset-0 object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-black opacity-50" />
      <div className="flex flex-col absolute inset-0 items-center text-beige p-3 md:p-5 text-center transform transition-transform duration-500 translate-y-1/3 group-hover:translate-y-0">
        <h2 className="font-sans text-3xl lg:text-4xl font-bold uppercase">
          {title}
        </h2>
        <p className="text-xl text-primary-orange font-serif">{author}</p>
        <p
          className="font-serif hidden group-hover:inline font-light text-base md:text-md lg:text-lg text-center transofrm transition-all duration-500 overflow-auto transparent-scrollbar w-full"
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
      </div>
      <p className="absolute bottom-0 left-0 right-0">Descriptoon</p>
    </div>
  );
};

export default PoemCard;
