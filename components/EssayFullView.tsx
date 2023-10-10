import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";
// import DOMPurify from 'isomorphic-dompurify';

type Essay = {
  id: string;
  title: string;
  author: string;
  content: string;
  description: string;
  section: string;
  imageID: string;
  link: string;
  attachmentType?: string;
  attachmentName?: string;
};

type EssayFullViewProps = {
  essay: Essay;
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

export default function EssayFullView({
  essay,
  isOpen,
  onClose,
}: EssayFullViewProps) {
  // Prevents the click from bubbling up
  const handleContainerClick = (e: any) => {
    e.stopPropagation();
  };

  // const cleanContent = DOMPurify.sanitize(essay.content);
  // const cleanDescription = DOMPurify.sanitize(essay.content);

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
        <div className="bg-white p-10 rounded-md max-w-5xl w-full overflow-y-auto h-screen md:h-3/4 relative">
          <div
            className="top-0 right-10 p-5 absolute cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <AiFillCloseCircle className="h-10 w-10 fixed  hover:text-dark-green" />
          </div>

          <h2 className="mt-12 md:mt-8 text-4xl  font-bold font-source-sans-pro uppercase cursor-text">
            {essay.title}
          </h2>
          <p className="text-2xl text-primary-orange font-source-sans-pro capitalize cursor-text">
            {essay.author}
          </p>
          {essay.attachmentType === "pdf" ? (
            <>
              <div className="mt-4 h-full md:block hidden">
                <object
                  data={`/attachments/${essay.attachmentName}`}
                  type="application/pdf"
                  className="h-full w-full"
                >
                  <iframe
                    src="https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf"
                    loading="lazy"
                  >
                    <p className="text-white text-lg">
                      This browser does not support PDF.
                    </p>
                  </iframe>
                </object>
              </div>
              <div className="md:hidden flex justify-center items-center pt-20">
                <a
                  href={`/attachments/${essay.attachmentName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-green hover:bg-primary-orange text-white rounded-full py-3 px-6 text-lg font-semibold transition duration-200 ease-in-out"
                >
                  Open PDF in browser
                </a>
              </div>
            </>
          ) : (
            <p
              className="mt-4 text-md sm:text-lg font-serif cursor-text whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html: essay.content,
              }}
            />
          )}

          {essay.description !== "" ? (
            <h2 className="mt-20 text-2xl font-source-sans-pro font-bold">
              Additional Information:
            </h2>
          ) : (
            ""
          )}
          {essay.description !== "" ? (
            <p
              className="mt-4 text-md sm:text-lg font-source-serif-pro cursor-text"
              dangerouslySetInnerHTML={{
                __html: essay.description,
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
