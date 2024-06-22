// "use client";
import Spline from "@splinetool/react-spline/next";
import { motion } from "framer-motion";

export default function HomeVidSpline() {
  return (
    <main className="mx-auto -mt-6 min-w-[768px] overflow-hidden sm:max-w-[768px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[2500px]">
      {/* <Spline scene="https://prod.spline.design/zvRS7F7iZb8KBvQc/scene.splinecode" /> */}
      {/* <Spline scene="https://prod.spline.design/GenzFbqMTXQWtMn7/scene.splinecode" /> */}
      {/* <Spline scene="https://prod.spline.design/SmXru5Z7BlzI-Bbc/scene.splinecode" /> */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      > */}
      <Spline scene="https://prod.spline.design/gKm4Xnx2jCuN91Q9/scene.splinecode" />
      {/* </motion.div> */}
    </main>
  );
}
