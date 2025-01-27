"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";

interface Slide {
  title: string;
  subtitle: string;
  skills?: string;
  imageUrl: string;
}

interface HeroProps {
  slides: Slide[];
}

export const Hero: React.FC<HeroProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = useCallback(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNextSlide();
    }, 5000); // Auto slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, [currentSlide, handleNextSlide]);



  return (
    <div
      className="relative w-full h-screen overflow-hidden cursor-pointer bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >

      <AnimatePresence>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center justify-center h-full z-20 text-center px-6">
            {/* Text section */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.h2
              className="mt-4 text-lg md:text-2xl lg:text-3xl text-white"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            >
              {slides[currentSlide].subtitle}
            </motion.h2>
            {slides[currentSlide].skills && (
              <motion.h3
                className="mt-3 text-sm md:text-lg lg:text-xl text-white"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.1, ease: "easeOut", delay: 0.6 }}
              >
                {slides[currentSlide].skills}
              </motion.h3>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
