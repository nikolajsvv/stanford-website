"use client";
import portrait from "../../data/studentContent/portrait.json";
import PortraitComponent from "@/components/PortraitComponent";

export default function DemoPage() {
  // Filters content by section
  const filteredPortrait = portrait.filter(
    (portraits) => portraits.section === "where are we"
  );

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-full mx-auto p-4 lg:p-8">
        {/* {filteredAudio.map((audio) => {
          return <AudioComponent key={audio.id} audio={audio} />;
        })} */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {filteredPortrait.map((portrait) => {
            let spanClass = portrait.span ? `col-span-${portrait.span}` : "";
            let spanRowClass = portrait.span ? `row-span-${portrait.span}` : "";
            return (
              <div
                key={portrait.id}
                className={` ${spanClass} ${spanRowClass}`}
              >
                <PortraitComponent key={portrait.id} portrait={portrait} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
