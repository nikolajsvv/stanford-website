import SectionTitle from "./SectionTitle";
export default function HowDoWeMakeSenseOfItAllSection() {
  const titleInfo = {
    title: "How Do We Make Sense Of It All?",
    content:
      "Global environmental challenges comprise existential issues – and an array of questions that can feel impossible to hold. Discussions of sustainability often quickly bleed into attempts to grapple with foundational questions around life and meaning – what is “truth,” what is “beauty,” what is “love.” How do we make sense of a world that can feel like it’s barrelling towards dissolution, growing injustices, despair? How do we find hope? How do different spatial, temporal, or spiritual perspectives change how we see things? What can we question? What do we even mean by “sustainability,” by “environment,” by quests for a “better” future? And what modalities can we leverage to engage these questions – intellectually, intuitively, emotionally? Students wrestle with all of this, reflecting on what it means to listen, to have hope, to think beyond ourselves.",
  };
  return (
    <section id="how-do-we-make-sense-of-it-all" className="py-8 mx-auto">
      <div className="w-full">
        <SectionTitle sectionInfo={titleInfo} />
      </div>
      <div className="px-4 md:px-8 lg:px-16">REST OF CONTENT</div>
    </section>
  );
}
