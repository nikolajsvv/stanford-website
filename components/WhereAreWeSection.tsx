import SectionTitle from "./SectionTitle";
import PoemComponent from "./PoemComponent";
import EssayComponent from "./EssayComponent";
import AudioComponent from "./AudioComponent";
import EmbedComponent from "./EmbedComponent";
import embed from "../data/studentContent/embed.json";
import essay from "../data/studentContent/essay.json";
import audio from "../data/studentContent/audio.json";
import poem from "../data/studentContent/poem.json";
import { motion } from "framer-motion";

export default function WhereAreWeSection() {
  const titleInfo = {
    title: "Where Are We",
    content:
      "Humanity is facing large-scale environmental change: what scientists call the sixth mass extinction; unprecedented heat estimated to render nearly a fifth of the world uninhabitable in 50 years; increased drought, declining pollinators, extreme storms, food and water insecurity; the potential displacement of hundreds of millions; and threats to health, livelihoods, homes, lives – particularly for the planet’s most already-vulnerable populations and those who have contributed to these environmental crises the least. With all of this, ecological grief, overwhelm, and existential anxiety are peaking, comprising a critical juncture. Students reflect on our current moment in history, highlighting experiences with environmental change from various perspectives.",
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Filters content by section
  const filteredEmbed = embed.filter(
    (embeds) => embeds.section === "where are we"
  );

  const filteredEssay = essay.filter(
    (essays) => essays.section === "where are we"
  );

  const filteredAudio = audio.filter(
    (audios) => audios.section === "where are we"
  );

  const filteredPoem = poem.filter((poems) => poems.section === "where are we");

  const mixedContent = [
    ...filteredEssay.map((item) => ({ ...item, type: "essay" })),
    ...filteredEmbed.map((item) => ({ ...item, type: "embed" })),
    ...filteredPoem.map((item) => ({ ...item, type: "poem" })),
    ...filteredAudio.map((item) => ({ ...item, type: "audio" })),
  ];

  return (
    <section id="where-are-we" className="py-8 mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-3 md:p-5">
          {filteredEssay.map((essay) => {
            let spanClass = essay.span ? `col-span-${essay.span}` : "";
            return (
              <div key={essay.id} className={`p-2 ${spanClass}`}>
                <EssayComponent essay={essay} />
              </div>
            );
          })}
          {filteredEmbed.map((embed) => {
            let spanClass = embed.span ? `col-span-${embed.span}` : "";
            return (
              <div key={embed.id} className={`p-2 ${spanClass}`}>
                <EmbedComponent embed={embed} />
              </div>
            );
          })}

          {filteredPoem.map((poem) => {
            let spanClass = poem.span ? `col-span-${poem.span}` : "";
            return (
              <div key={poem.id} className={`p-2 ${spanClass}`}>
                <PoemComponent poem={poem} />
              </div>
            );
          })}
          {filteredAudio.map((audio) => {
            let spanClass = audio.span ? `col-span-${audio.span}` : "";
            return (
              <div key={audio.id} className={`p-2 ${spanClass}`}>
                <AudioComponent audio={audio} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
