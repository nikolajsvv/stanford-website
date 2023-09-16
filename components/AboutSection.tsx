"use client";
import Image from "next/image";
import imageData from "../data/images.json";
import { motion } from "framer-motion";

export default function AboutSection() {
  // Pulling images from images.json datafile
  const sustainabilityImage = imageData.find(
    (image) => image.name === "about-sustainable-planet.jpg"
  );

  return (
    <div className="min-h-screen mx-auto py-40">
      <section className="flex flex-col justify-center items-center ">
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
            What would this look like, and what would it have taken to get here?
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
      {/* Image with first content */}
      <div className="relative">
        <motion.div className="flex flex-col md:flex-row justify-center items-center w-full h-1/2 relative md:sticky md:top-0 bg-dark-green text-beige">
          <div className="w-full md:w-1/2">
            {sustainabilityImage && (
              <Image
                src={sustainabilityImage.path}
                alt={sustainabilityImage?.description}
                width={800}
                height={800}
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
          <div className="w-full md:w-1/2">
            {sustainabilityImage && (
              <Image
                src={sustainabilityImage.path}
                alt={sustainabilityImage?.description}
                width={800}
                height={800}
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
      {/* <div className='flex flex-col justify-center items-center font-bold'>
				<h1 className='text-8xl'>COLLECTIONS</h1>
				<p>Where are we</p>
				<p>How do we make sense of it all</p>
				<p>How did we get here</p>
				<p>Where are we</p>
			</div> */}
    </div>
  );
}
