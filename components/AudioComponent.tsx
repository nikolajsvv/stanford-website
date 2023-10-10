// Purpose: Create a responsive audio component with an animated audio player using framer motion
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiMiniSpeakerWave,
  HiPlayCircle,
  HiMiniPauseCircle,
} from "react-icons/hi2";
import Image from "next/image";
import images from "../data/images.json";
import AudioTranscriptDisplay from "./AudioTranscriptDisplay";

type AudioComponentProps = {
  audio: {
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
};

type audio = {
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

// imports audioFile, content, backgroundImage
export default function AudioComponent({ audio }: AudioComponentProps) {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showFullView, setShowFullView] = useState(false);

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

  // Grab image by audio file
  const getImageByAudio = (audio: audio) => {
    return images.find((image) => image.id === audio.imageID) || defaultImage;
  };

  const audioImage = getImageByAudio(audio);

  useEffect(() => {
    let audioPlayer = audioPlayerRef.current;

    const handleTimeUpdate = () => {
      const current = audioPlayer?.currentTime || 0;

      setCurrentTime(current);

      // Fallback for duration if metadata isn't loaded
      if (!duration && audioPlayer?.duration) {
        setDuration(audioPlayer.duration);
      }
    };

    const handleLoadedMetadata = () => {
      if (!duration && audioPlayer?.duration) {
        setDuration(audioPlayer.duration);
      }
      setCurrentTime(audioPlayer!.currentTime);
    };

    const handleAudioEnded = () => {
      setCurrentTime(0);
      setIsPlaying(false);
    };

    audioPlayer?.addEventListener("timeupdate", handleTimeUpdate);
    audioPlayer?.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioPlayer?.addEventListener("ended", handleAudioEnded);

    return () => {
      audioPlayer?.removeEventListener("timeupdate", handleTimeUpdate);
      audioPlayer?.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audioPlayer?.removeEventListener("ended", handleAudioEnded);
    };
  }, [duration]);

  const playAudio = () => {
    audioPlayerRef.current?.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioPlayerRef.current?.pause();
    setIsPlaying(false);
  };

  const formatTime = (timeInSeconds: number): string => {
    const minutes: number = Math.floor(timeInSeconds / 60);
    const secondsValue: number = Math.floor(timeInSeconds - minutes * 60);
    const formattedSeconds: string =
      secondsValue < 10
        ? "0" + secondsValue.toString()
        : secondsValue.toString();
    return `${minutes}:${formattedSeconds}`;
  };

  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressBarRef.current;
    const rect = progressBar!.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const progressBarWidth = rect.width;
    const seekTime = (offsetX / progressBarWidth) * duration;
    audioPlayerRef.current!.currentTime = seekTime;
  };

  const progressPercentage = (currentTime / duration) * 100;

  const handleViewClick = () => {
    if (!showFullView) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    setShowFullView(!showFullView);
  };

  const handlePDFClick = () => {
    if (audio.additional) {
      window.open(`/attachments/${audio.additional}`, "_blank");
    }
  };

  // Read from audio file to pull

  return (
    <>
      <motion.div
        className="group relative w-full pb-[75%] overflow-hidden rounded-2xl shadow-md shadow-mud h-[30rem]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <audio src={audio.audioFilePath} ref={audioPlayerRef} />

        <Image
          src={audioImage.path}
          alt={audioImage.description}
          width={audioImage.width}
          height={audioImage.height}
          className="absolute inset-0 object-cover w-full h-full rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-2xl" />

        <div className="absolute top-0 left-0 p-4 text-gray-400 flex items-center">
          {isPlaying ? (
            <HiMiniSpeakerWave className="h-6 w-6 md:h-8 md:w-8 animate-pulse text-gray-300" />
          ) : (
            <HiMiniSpeakerWave className="h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 group-hover:text-gray-300" />
          )}
        </div>

        <div className="absolute inset-0 items-center justify-center text-light-beige p-5 flex flex-col space-y-2 overflow-y-auto">
          <h2 className="uppercase text-beige font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-center">
            {audio.title}
          </h2>
          <p className="font-semibold text-primary-orange text-xl">
            {audio.author}
          </p>
          <div>
            {!isPlaying ? (
              <HiPlayCircle
                className="h-12 w-12 text-white cursor-pointer rounded-full transition-all duration-300 hover:scale-125"
                onClick={playAudio}
              />
            ) : (
              <HiMiniPauseCircle
                className="h-12 w-12 text-white cursor-pointer rounded-full transition-all duration-300 hover:scale-125"
                onClick={pauseAudio}
              />
            )}
          </div>
          {audio.additional && (
            <button
              onClick={handlePDFClick}
              className="bg-primary-orange text-white p-2 rounded"
            >
              Learn More
            </button>
          )}
          <p
            className="cursor-pointer p-4 font-semibold uppercase text-beige hover:font-bold hover:text-primary-orange"
            onClick={handleViewClick}
          >
            Transcript
          </p>
          <div className="text-beige flex justify-between w-full absolute bottom-4 font-extralight">
            <div className="text-left left-0 pl-2">
              {formatTime(currentTime)}
            </div>
            <div className="text-right right-0 pr-2">
              {formatTime(duration)}
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full h-4 overflow-hidden rounded-b-3xl cursor-pointer"
          ref={progressBarRef}
          onClick={handleProgressBarClick}
        >
          <div className="h-full bg-dark-green rounded-b-3xl">
            <motion.div
              className="h-full bg-light-orange"
              style={{ width: `${progressPercentage}%` }}
            ></motion.div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showFullView && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pt-10 backdrop-blur-sm overlay">
            <AudioTranscriptDisplay
              audio={audio}
              isOpen={showFullView}
              onClose={() => setShowFullView(false)}
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
