import { Variants } from "framer-motion";

/**
 * Slide in from the left.
 * @param delay Optional delay in seconds before the animation starts.
 */
export const slideInFromLeft = (delay = 0): Variants => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay, type: "spring", stiffness: 50 },
  },
});

/**
 * Slide in from the right.
 * @param delay Optional delay in seconds before the animation starts.
 */
export const slideInFromRight = (delay = 0): Variants => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay, type: "spring", stiffness: 50 },
  },
});

/**
 * Slide in from the top.
 * @param delay Optional delay in seconds before the animation starts.
 */
export const slideInFromTop = (delay = 0): Variants => ({
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay, type: "spring", stiffness: 50 },
  },
});
