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

export default function HowDoWeMakeSenseOfItAllSection() {
  const titleInfo = {
    title: "How Do We Make Sense Of It All?",
    content:
      "Global environmental challenges comprise existential issues – and an array of questions that can feel impossible to hold. Discussions of sustainability often quickly bleed into attempts to grapple with foundational questions around life and meaning – what is “truth,” what is “beauty,” what is “love.” How do we make sense of a world that can feel like it’s barrelling towards dissolution, growing injustices, despair? How do we find hope? How do different spatial, temporal, or spiritual perspectives change how we see things? What can we question? What do we even mean by “sustainability,” by “environment,” by quests for a “better” future? And what modalities can we leverage to engage these questions – intellectually, intuitively, emotionally? Students wrestle with all of this, reflecting on what it means to listen, to have hope, to think beyond ourselves.",
  };
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Filters content by section
  const filteredEmbed = embed.filter(
    (embeds) => embeds.section === "how do we make sense of it all"
  );

  const filteredEssay = essay.filter(
    (essays) => essays.section === "how do we make sense of it all"
  );

  const filteredAudio = audio.filter(
    (audios) => audios.section === "how do we make sense of it all"
  );

  const filteredPoem = poem.filter(
    (poems) => poems.section === "how do we make sense of it all"
  );
  return (
    <section id="how-do-we-make-sense-of-it-all" className="py-8 mx-auto">
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
