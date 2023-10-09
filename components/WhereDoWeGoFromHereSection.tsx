import SectionTitle from "./SectionTitle";
import embed from "../data/studentContent/embed.json";
import essay from "../data/studentContent/essay.json";
import audio from "../data/studentContent/audio.json";
import poem from "../data/studentContent/poem.json";
import EssayComponent from "./EssayComponent";
import EmbedComponent from "./EmbedComponent";
import PoemComponent from "./PoemComponent";
import AudioComponent from "./AudioComponent";
import { motion } from "framer-motion";

export default function WhereDoWeGoFromHereSection() {
  const titleInfo = {
    title: "Where Do We Go From Here",
    content:
      "Armed with a sense of various structural, philosophical, and cultural forces embedded in current trends of planetary degradation, envisioning a path forward becomes more imaginative and multi-faceted. What does it look like to manipulate economic structures? Social norms and values? Legal frameworks? Where do traditional approaches to sustainability get us, and where do we have to think more broadly? Students explore a variety of approaches to moving through today’s environmental challenges, drawing upon multiple disciplinary lenses, engaging creativity through science fiction, and identifying solutions that shift our conceptions of who we are in relation to our surroundings.",
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Filters content by section
  const filteredEmbed = embed.filter(
    (embeds) => embeds.section === "where do we go from here"
  );

  const filteredEssay = essay.filter(
    (essays) => essays.section === "where do we go from here"
  );

  const filteredAudio = audio.filter(
    (audios) => audios.section === "where do we go from here"
  );

  const filteredPoem = poem.filter(
    (poems) => poems.section === "where do we go from here"
  );

  return (
    <section id="where-do-we-go-from-here" className="py-8 mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full pb-10"
      >
        <SectionTitle sectionInfo={titleInfo} />
      </motion.div>
      <div className="px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-3 md:p-5">
          {filteredEssay.map((essay) => {
            let spanClass = essay.span ? `col-span-${essay.span}` : "";
            return (
              <div key={essay.id} className={` ${spanClass}`}>
                <EssayComponent essay={essay} />
              </div>
            );
          })}

          {filteredEmbed.map((embed) => {
            let spanClass = embed.span ? `col-span-${embed.span}` : "";
            return (
              <div key={embed.id} className={`${spanClass}`}>
                <EmbedComponent embed={embed} />
              </div>
            );
          })}

          {filteredPoem.map((poem) => {
            let spanClass = poem.span ? `col-span-${poem.span}` : "";
            return (
              <div key={poem.id} className={` ${spanClass}`}>
                <PoemComponent poem={poem} />
              </div>
            );
          })}
          {filteredAudio.map((audio) => {
            let spanClass = audio.span ? `col-span-${audio.span}` : "";
            return (
              <div key={audio.id} className={` ${spanClass}`}>
                <AudioComponent audio={audio} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
