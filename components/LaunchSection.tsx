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
      className="flex flex-col justify-center items-center relative"
    >
      {/* Background Image */}
      <div className="fixed inset-0">
        <Image
          src={path}
          fill={true}
          className="object-cover object-center fill-inherit"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(58,81,52,.4)] to-[#fefae7]"></div>
      </div>
      <div className="w-screen h-screen flex flex-col justify-center items-center relative">
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
      </div>

      <div className="w-screen h-screen flex flex-col justify-center items-center relative">
        <section className="flex flex-col justify-center items-center">
          <div className="w-full md:w-3/4">
            <motion.h1
              variants={{
                hidden: { opacity: 0, x: -75 },
                visibile: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visibile"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-5xl lg:text-6xl uppercase font-bold text-dark-green text-center md:text-center hover:drop-shadow-xl"
            >
              Imagine you woke up tomorrow in a perfectly sustainable society
            </motion.h1>
          </div>
          <div className="flex flex-col items-center justify-center font-light text-lg md:text-2xl text-center space-y-5 cursor-default text-mud mt-10 p-10 md:p-4 mb-20 ">
            <motion.p
              className="hover:font-normal transition-all duration-300"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
            >
              What would this look like, and what would it have taken to get
              here?
            </motion.p>
            <motion.p
              className="hover:font-normal transition-all duration-300"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              viewport={{ once: true }}
            >
              Would our work be complete – or is there a chance we could have
              missed the point?
            </motion.p>
            <motion.p
              className="hover:font-normal transition-all duration-300"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
              viewport={{ once: true }}
            >
              What does sustainability even mean?
            </motion.p>
          </div>
        </section>
      </div>
    </motion.section>
  );
}
