"use client";
import AudioComponent from "@/components/AudioComponent";
import audio from "../../data/studentContent/audio.json";

export default function DemoPage() {
  // Filters content by section
  const filteredAudio = audio.filter(
    (audios) => audios.section === "how do we make sense of it all"
  );
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-full mx-auto p-4 lg:p-8">
        {filteredAudio.map((audio) => {
          return <AudioComponent key={audio.id} audio={audio} />;
        })}
      </div>
    </div>
  );
}
