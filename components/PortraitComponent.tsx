import Image from "next/image";
import img from "../public/current_state-jj_jean_noland_murphy.jpg";

type PortraitComponentProps = {
  portrait: {
    id: string;
    title: string;
    author: string;
    content: string;
    description: string;
    section: string;
    imageID: string;
    type: string;
    link: string;
    span: number;
  };
};
export default function PortraitComponent({
  portrait,
}: PortraitComponentProps) {
  return (
    <div className="group relative w-full overflow-hidden cursor-pointer rounded-2xl h-[50rem] shadow-md">
      <div className="">
        <Image
          src={img}
          alt="Current State by JJ Jean Noland Murphy"
          className="object-cover h-1/2"
        />
      </div>
      <div className="h-1/2 flex flex-col justify-left items-center bg-mud text-beige bg-opacity-70 hover:bg-opacity-100">
        <h2>{portrait.title}</h2>
        <p>{portrait.author}</p>
      </div>
    </div>
  );
}
