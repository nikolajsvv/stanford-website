import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";

type Audio = {
  id: string;
  audioFileName: string;
  audioFilePath: string;
  title: string;
  author: string;
  transcript: string;
  description: string;
  section: string;
  imageID: string;
  link: string;
  additional: string;
};

type AudioTranscriptProps = {
  audio: Audio;
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
export default function AudioTranscriptDisplay({
  audio,
  isOpen,
  onClose,
}: AudioTranscriptProps) {
  // Prevents the click from bubbling up
  const handleContainerClick = (e: any) => {
    e.stopPropagation();
  };

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
            {" "}
            <AiFillCloseCircle className="h-10 w-10 fixed  hover:text-dark-green" />
          </div>
          {/* Title and Author */}
          <h2 className="mt-12 md:mt-8 text-4xl  font-bold font-source-sans-pro uppercase cursor-text">
            {audio.title}
          </h2>
          <p className="text-2xl text-primary-orange font-source-sans-pro capitalize cursor-text">
            {audio.author}
          </p>
          <p
            className="mt-4 text-md sm:text-lg font-serif cursor-text whitespace-pre-line"
            dangerouslySetInnerHTML={{
              __html: audio.transcript,
            }}
          />
        </div>
      </motion.div>
    </>
  );
}
