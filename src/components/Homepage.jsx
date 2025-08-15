"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  const text = "Hello, I'm Abdur Rehman Malik";

  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Image Container */}
      <div
        className="relative 
                w-full 
                lg:w-1/2 
                h-64 sm:h-72 md:h-80 lg:h-5/6 
                mb-10 sm:mb-12 lg:mb-6 
                flex items-center justify-center"
      >
        <Image
          src="/pp.png"
          alt="Abdur Rehman Malik"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
          className="object-contain select-none"
          draggable={false}
        />
      </div>

      {/* Text Container */}
      <div className="h-1/2 w-full lg:h-full lg:w-1/2 flex flex-col gap-6 items-center justify-center">
        <h1 className="text-xl md:text-4xl font-bold">
          <div className="text-3xl md:text-6xl font-bold mr-6">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1.5 }}
                animate={{ opacity: 0.5 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </h1>
        <div className="flex justify-start text-2xl md:xl text-gray-700">
          <div className="relative flex justify-start ml-3 h-[2em] w-60 overflow-hidden">
            <h3 className="absolute h-full w-full -translate-y-full animate-slide leading-none text-gray-800 font-semibold">
              Problem_Solver
            </h3>
            <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-gray-800 font-semibold [animation-delay:0.83s]">
              Frontend_Devloper
            </span>
            <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-gray-800 font-semibold [animation-delay:1.83s]">
              Creative_Coder
            </span>
          </div>
        </div>
        <p className="text-lg md:xl italic">
          I create efficient, user-friendly, and visually appealing web
          applications that ensure a seamless experience for users.
        </p>
        <div className="flex gap-4 w-full sm:items-center">
          <Link href="/portfolio">
            <button className="px-6 py-3 rounded-3xl bg-black text-white font-medium shadow-md hover:bg-gray-900 hover:scale-105 transform transition-all duration-300 ease-in-out">
              View My Project
            </button>
          </Link>

          <Link href="/contact">
            <button className="px-6 py-3 rounded-3xl border-2 border-black text-black font-medium hover:bg-black hover:text-white hover:scale-105 transform transition-all duration-300 ease-in-out">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
