import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";

type Content = {
  id: string;
  title: string;
  author: string;
  content: string;
  description: string;
  section: string;
  imageID: string;
  link: string;
};

type FullViewProps = {
  content: Content;
  isOpen: boolean;
  onClose: () => void;
};

const modalVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

const backdropVariants = {
  open: { opacity: 0.5 },
  closed: { opacity: 0 },
};

export default function FullViewComponent({
  content,
  isOpen,
  onClose,
}: FullViewProps) {
  // Prevents the click from bubbling up
  const handleContainerClick = (e: any) => {
    e.stopPropagation();
  };

  // const cleanContent = DOMPurify.sanitize(content.content);
  // const cleanDescription = DOMPurify.sanitize(content.content);

  const url = new URL(content.link);
  const video_id = url.searchParams.get("v");
  const embedUrl = `https://www.youtube.com/embed/${video_id}`;

  return (
    <>
      <motion.div
        variants={backdropVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="fixed inset-0 bg-black transition-opacity"
        onClick={onClose}
      />
      <motion.div
        onClick={handleContainerClick}
        className="fixed inset-0 flex items-center justify-center z-10"
        variants={modalVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="bg-white p-10 rounded-md max-w-3xl w-full overflow-y-auto h-screen md:h-3/4 relative">
          <div
            className="top-0 right-10 p-5 absolute cursor-pointer"
            arial-label="navigation"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <AiFillCloseCircle className="h-10 w-10 fixed  hover:text-dark-green" />
          </div>

          <h2 className="mt-12 md:mt-8 text-4xl  font-bold font-source-sans-pro uppercase cursor-text">
            {content.title}
          </h2>
          <p className="text-2xl text-primary-orange font-source-sans-pro capitalize cursor-text">
            {content.author}
          </p>
          <iframe
            src={embedUrl}
            width="640"
            height="360"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p
            className="mt-4 text-md sm:text-lg font-serif cursor-text whitespace-pre-line"
            dangerouslySetInnerHTML={{
              __html: content.content,
            }}
          />

          {content.description !== "" ? (
            <h2 className="mt-20 text-2xl font-source-sans-pro font-bold">
              Additional Information:
            </h2>
          ) : (
            ""
          )}
          {content.description !== "" ? (
            <p
              className="mt-4 text-md sm:text-lg font-source-serif-pro cursor-text"
              dangerouslySetInnerHTML={{
                __html: content.description,
              }}
            />
          ) : (
            ""
          )}
        </div>
      </motion.div>
    </>
  );
}
