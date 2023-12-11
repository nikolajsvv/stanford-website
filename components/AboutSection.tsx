"use client";
import Image from "next/image";
import imageData from "../data/images.json";
import { motion } from "framer-motion";

export default function AboutSection() {
  // Pulling images from images.json datafile
  const sustainabilityImage = imageData.find(
    (image) => image.name === "about-sustainable-planet.jpg"
  );

  const branches = imageData.find((image) => image.name === "branches.jpg");

  return (
    <div className="min-h-screen mx-auto py-40">
      {/* Image with first content */}
      <div className="relative">
        <motion.div className="flex flex-col md:flex-row justify-center items-center w-full relative md:sticky md:top-0 bg-dark-green text-beige">
          <div className="w-full md:w-1/2 max-h-[500px] overflow-hidden">
            {branches && (
              <Image
                src={branches.path}
                alt={branches?.description}
                width={branches.width || 400}
                height={branches.height || 300}
                className="object-cover w-full h-full"
              />
            )}
          </div>
          <motion.div className="w-full md:w-1/2 flex justify-center items-center leading-snug py-10 md:py-0">
            <p className="p-3 md:p-5 text-lg lg:text-xl xl:text-2xl font-light mb-10 md:mb-0">
              Expansive thinking and deep questioning are hallmarks of the
              environmental humanities – an interdisciplinary field that brings
              together the sciences and humanities to probe at the cultural,
              ethical, and philosophical roots of environmental challenges.
            </p>
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-col md:flex-row justify-center items-center w-full h-1/2 relative md:sticky md:top-0 bg-beige ">
          <div className="w-full md:w-1/2 max-h-[500px] overflow-hidden">
            {sustainabilityImage && (
              <Image
                src={sustainabilityImage.path}
                alt={sustainabilityImage?.description}
                width={sustainabilityImage.width || 1000}
                height={sustainabilityImage.height || 1000}
                className="object-cover w-full h-full"
              />
            )}
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center leading-snug py-10 md:py-0">
            <p className="p-3 md:p-5 text-lg lg:text-xl xl:text-2xl text-mud font-light">
              In the first quarter of Stanford’s new Doerr School of
              Sustainability, students in a new environmental humanities course
              explored a range of questions around today’s accelerating
              environmental challenges – thinking critically about narratives of
              human progress and cultural paradigms around human-nature
              relationships. Read on for a selection of students’ work: frank
              depictions of grief and overwhelm, glimpses into personal
              relationships with the more-than-human world, illustrative
              imaginings of futures both dark and hopeful, visions for
              solutions, and attempts to hold a set of challenges that can
              sometimes feel beyond grasp.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
