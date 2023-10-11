import Image from "next/image";
interface SectionInfo {
  title: string;
  content: string;
}

interface Props {
  sectionInfo: SectionInfo;
}

export default function SectionTitle({ sectionInfo }: Props) {
  const { title, content } = sectionInfo;

  return (
    <div className="group flex flex-col lg:flex-row justify-evenly items-stretch inset-0 overflow-hidden shadow-md shadow-mud max-h-[700px] min-h-[500px] cursor-default relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sectionTitle/sectionTitleImage.webp"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Title */}
      <div className="w-full lg:w-2/5 flex justify-center items-center py-20 lg:py-0 px-10 z-10 relative">
        <h1 className="text-center lg:text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-beige font-bold">
          <span className="bg-gradient-to-r from-dark-green via-beige to-mud bg-[length:0%_5px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_1px] transition-all duration-500">
            {title}
          </span>
        </h1>
      </div>

      {/* Content */}
      <div className="w-full lg:w-3/5 flex justify-center items-center bg-dark-green bg-opacity-70 shadow-md p-3 md:p-5 group-hover:bg-opacity-90 z-10 relative">
        <p className="font-light text-beige text-sm sm:text-md md:text-lg lg:text-xl py-12 lg:py-0">
          {content}
        </p>
      </div>
    </div>
  );
}
