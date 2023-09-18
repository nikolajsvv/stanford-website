"use client";
import AudioComponent from "@/components/AudioComponent";
import audio from "../../data/studentContent/audio.json";
import embed from "../../data/studentContent/embed.json";
import EmbedComponent from "@/components/EmbedComponent";

export default function DemoPage() {
  // Filters content by section
  const filteredAudio = audio.filter(
    (audios) => audios.section === "how do we make sense of it all"
  );
  const filteredEmbed = embed.filter(
    (embeds) => embeds.section === "how do we make sense of it all"
  );

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-full mx-auto p-4 lg:p-8">
        {/* {filteredAudio.map((audio) => {
          return <AudioComponent key={audio.id} audio={audio} />;
        })} */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {filteredEmbed.map((embed) => {
            return <EmbedComponent key={embed.id} embed={embed} />;
          })}
        </div>
      </div>
    </div>
  );
}
