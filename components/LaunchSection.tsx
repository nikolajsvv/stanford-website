"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import imagesData from "../data/images.json";

export default function LaunchSection() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const searchTerm = "launch-evergreen-trees.jpg";
  const matchingImages = imagesData.filter(
    (image) => image.name === searchTerm
  );

  const { path } = matchingImages[0];

  return (
    <motion.section
      ref={ref}
      id="launch"
      className="w-full h-full flex flex-col justify-center items-center relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={path}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(58,81,52,.4)] to-[#fefae7]"></div>
      </div>
      <motion.div className="absolute p-4 text-beige flex flex-col text-left">
        <motion.h1
          className="text-6xl md:text-8xl xl:text-9xl uppercase font-sans font-extrabold"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 1 }}
        >
          FINDING OUR PLACE
        </motion.h1>
        <motion.h1
          className="text-6xl md:text-8xl xl:text-9xl uppercase font-sans font-extrabold"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 1 }}
        >
          ON A CHANGING
        </motion.h1>
        <motion.h1
          className="text-dark-green text-7xl md:text-9xl xl:text-[300px] uppercase font-sans font-black xl:-translate-y-12 xl:-translate-x-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          PLANET
        </motion.h1>
      </motion.div>
      <motion.p
        className="text-mud text-xs font-extralight absolute bottom-0 right-0 p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {`This website showcases student perspectives from Stanford University's Fall 2022 course: "Environmental Humanities: Finding Our Place on a Changing Planet” [SUSTAIN 140 | BIO 184 | ENGLISH 140D]`}
      </motion.p>
    </motion.section>
  );
}
