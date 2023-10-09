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

export default function HowDidWeGetHereSection() {
  const titleInfo = {
    title: "How Did We Get Here",
    content:
      "Understanding how humanity arrived at this moment of profound planetary change: where do we begin? How would we explain the global arc of history through economics? What are the roles of human psychology, behavior, social structures, cultures? Is it about the quality of emotional and personal connections between humans and their surroundings? Paradigms of land and resource management? Issues of philosophy and ethics? Is it a spiritual question? Students’ work reflects on the natural world, concepts from economics, culture and language, musings on the boundaries of the “self.”",
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Filters content by section
  const filteredEmbed = embed.filter(
    (embeds) => embeds.section === "how did we get here"
  );

  const filteredEssay = essay.filter(
    (essays) => essays.section === "how did we get here"
  );

  const filteredAudio = audio.filter(
    (audios) => audios.section === "how did we get here"
  );

  const filteredPoem = poem.filter(
    (poems) => poems.section === "how did we get here"
  );

  return (
    <section id="how-did-we-get-here" className="py-8 mx-auto">
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
