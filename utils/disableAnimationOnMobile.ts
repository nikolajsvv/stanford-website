"use client";
import { AnimationProps } from "framer-motion";
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";

export default function DisableAnimationOnMobile({
  children,
}: {
  children: any | any[];
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set isMobile after component mounts, when window is available
    setIsMobile(window.innerWidth <= 600);
  }, []); // Empty array ensures this runs once after mount

  if (!isMobile) return children;

  // Loop through each child and clone with new props
  const modifiedChildren = Children.map(children, (child) => {
    // Check if child is a valid react element
    if (isValidElement(child)) {
      const emptyAnimationProps = {
        animate: "default",
        initial: undefined,
        exit: undefined,
        transition: { duration: 0 },
        variants: { default: { opacity: 1, top: 0, bottom: 0 } },
      } as AnimationProps;
      // Clone the child element with new props
      return cloneElement(child, emptyAnimationProps);
    }
    return child; // return non-React child as is
  });
  return modifiedChildren;
}
