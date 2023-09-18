"use client";
import EssayComponent from "@/components/EssayComponent";
import essays from "../../data/studentContent/essays.json";

export default function DemoPage() {
  // Filters content by section
  const filteredEssays = essays.filter(
    (essay) => essay.section === "where are we"
  );

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-full mx-auto p-4 lg:p-8">
        {filteredEssays.map((essay) => {
          return <EssayComponent key={essay.id} essay={essay} />;
        })}
      </div>
    </div>
  );
}
