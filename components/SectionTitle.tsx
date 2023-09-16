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
    <div
      className="group flex flex-col lg:flex-row justify-evenly items-stretch inset-0 bg-no-repeat bg-center bg-cover overflow-hidden shadow-md shadow-mud max-h-[700px] min-h-[500px]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(/images/sectionTitle/sectionTitleImage.webp)`,
      }}
    >
      <div className="w-full lg:w-2/5 flex justify-center items-center py-20 lg:py-0 px-10 ">
        <h1 className="text-center lg:text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-beige font-bold ">
          <span className="bg-gradient-to-r from-dark-green via-beige to-mud bg-[length:0%_5px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_1px] transition-all duration-500">
            {title}
          </span>
        </h1>
      </div>
      <div className="w-full lg:w-3/5 flex justify-center items-center bg-dark-green bg-opacity-70 shadow-md p-3 md:p-5 ">
        <p className="text-beige text-sm sm:text-md md:text-lg lg:text-xl py-12 lg:py-0">
          {content}
        </p>
      </div>
    </div>
  );
}
