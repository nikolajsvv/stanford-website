"use client";
import WhereAreWeSection from "@/components/WhereAreWeSection";
import WhereDoWeGoFromHereSection from "@/components/WhereDoWeGoFromHereSection";
import HowDoWeMakeSenseOfItAllSection from "@/components/HowDoWeMakeSenseOfItAllSection";
import LaunchSection from "@/components/LaunchSection";
import AboutSection from "@/components/AboutSection";
import { MotionConfig } from "framer-motion";
import HowDidWeGetHereSection from "@/components/HowDidWeGetHereSection";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <MotionConfig reducedMotion="user">
        <LaunchSection />
        <AboutSection />
        <WhereAreWeSection />
        <HowDidWeGetHereSection />
        <WhereDoWeGoFromHereSection />
        <HowDoWeMakeSenseOfItAllSection />
      </MotionConfig>
    </div>
  );
}
