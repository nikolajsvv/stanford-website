"use client";
import poems from "../../data/studentContent/poem.json";
import PoemComponent from "@/components/PoemComponent";

export default function DemoPage() {
  // Filters content by section
  const filteredPoems = poems.filter((poem) => poem.section === "where are we");

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredPoems.map((poem) => {
            return <PoemComponent key={poem.id} poem={poem} />;
          })}
        </div>
      </div>
    </div>
  );
}
