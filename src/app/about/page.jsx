"use client";

import Brain from "@/components/brain";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiC,
  SiCplusplus,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVercel,
  SiFramer,
} from "react-icons/si";

const cardBase =
  "relative rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] " +
  "hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] hover:-translate-y-1.5 transition-all duration-300";

const badge =
  "px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-black/10";

const dot = (
  <>
    <span className="relative block w-6 h-6 rounded-full bg-white ring-4 ring-red-300 shadow-md shadow-red-300" />
    <span className="absolute inset-0 rounded-full bg-red-300 opacity-60 animate-ping" />
  </>
);

// Simple fade/lift for blocks as they enter
const blockAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true, margin: "-100px" },
};

// Timeline grow (scaleY) animation
const lineAnim = {
  initial: { scaleY: 0 },
  whileInView: { scaleY: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, margin: "-100px" },
};
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node Js",
  "Express JS",
  "Tailwind",
  "React",
  "Next Js",
  "C",
  "C++",
  "Python",
  "Framer Motion",
  "MongoDB",
  "MySQL",
  "Git",
  "Postman",
  "Vercel",
];

const skillIcons = {
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJs,
  "node js": FaNodeJs,
  express: SiExpress,
  "express js": SiExpress,
  tailwind: SiTailwindcss,
  react: FaReact,
  "next js": SiNextdotjs,
  c: SiC,
  "c++": SiCplusplus,
  python: FaPython,
  "framer motion": SiFramer,
  mongodb: SiMongodb,
  mysql: SiMysql,
  git: FaGitAlt,
  postman: SiPostman,
  vercel: SiVercel,
};


export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <motion.div
      className="h-full"
      initial={false}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        ref={containerRef}
        className="h-full overflow-auto lg:flex no-scrollbar"
      >
        {/* LEFT: TEXT COLUMN */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-34 lg:gap-48 xl:gap-64 lg:w-2/3 xl:1/2">
          {/* BIO */}
          <section className="flex flex-col gap-6 justify-center">
            <h1 className="font-bold text-2xl">Biblography</h1>
            <p className="text-lg font-normal italic">
              I’m Abdur Rehman Malik, a Web Developer and B.Tech student at DTU,
              passionate about building scalable, high-performance web
              applications with seamless user experiences. I explore modern
              frameworks and methodologies to craft efficient, functional
              solutions. Beyond coding,
              <span className="italic mt-1 block">
                I enjoy problem-solving on LeetCode & Codeforces, street
                photography 📸, and playing badminton 🏸
              </span>
              . Always learning, always building!
            </p>

            {/* Signature PNG */}
            <div className="pt-2">
              <Image
                src="/sign.png"
                alt="Signature of Abdur Rehman Malik"
                width={250}
                height={150}
                className="object-contain"
              />
            </div>

            {/* Down Arrow */}
            <div className="pt-2">
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                width={42}
                height={42}
                aria-hidden
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000"
                  strokeWidth="1"
                />
                <path d="M12 6V14" stroke="#000" strokeWidth="1" />
                <path d="M15 11L12 14L9 11" stroke="#000" strokeWidth="1" />
              </motion.svg>
            </div>
          </section>

          {/* SKILLS */}
          <section className="flex flex-col gap-6 justify-center">
            <motion.h2 {...blockAnim} className="font-bold text-2xl">
              SKILLS
            </motion.h2>

            {(() => {
              const container = {
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                },
              };
              const pill = {
                hidden: { opacity: 0, y: 10, scale: 0.98, rotate: -2 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  transition: { type: "spring", stiffness: 280, damping: 18 },
                },
              };

              return (
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-120px" }}
                  className="flex gap-3 flex-wrap"
                >
                  {skills.map((skill) => {
                    const Icon = skillIcons[skill.toLowerCase()];
                    return (
                      <motion.span
                        key={skill}
                        variants={pill}
                        whileHover={{ y: -3, scale: 1.04, rotate: -1 }}
                        whileTap={{ scale: 0.97 }}
                        className="rounded-lg text-sm px-3 py-2 flex items-center gap-2 cursor-pointer
                         text-white bg-black hover:text-black hover:bg-white border border-black/10
                         transition-all duration-200 shadow-[0_8px_22px_-10px_rgba(0,0,0,0.35)]"
                      >
                        {Icon && <Icon size={16} aria-hidden />}
                        {skill}
                      </motion.span>
                    );
                  })}
                </motion.div>
              );
            })()}
          </section>

          {/* EDUCATION — Animated Timeline */}
          <section className="flex flex-col gap-8 justify-center">
            <motion.h2 {...blockAnim} className="font-bold text-2xl">
              Education
            </motion.h2>

            <div className="space-y-10">
              {/* ITEM 1 — DTU (Left) */}
              <div className="flex justify-between lg:h-56">
                {/* Left Card */}
                <motion.article {...blockAnim} className="w-full lg:w-1/2">
                  <div className={cardBase}>
                    {/* Glow ring */}
                    <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#b3d4fc]/30 via-[#d6c8e5]/30 to-[#f3c6c6]/30 blur-xl" />
                    <div className="relative p-5">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="font-extrabold text-lg text-gray-900">
                          Delhi Technological University
                        </h3>
                        <span className="text-sm font-semibold text-red-500 mt-1 sm:mt-0">
                          Nov 2022 — Aug 2026
                        </span>
                      </div>

                      <p className="text-xs mt-1 italic text-gray-600">
                        📍 New Delhi, India
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <span
                          className={`${badge} bg-indigo-100 text-indigo-800`}
                        >
                          🎓 B.Tech
                        </span>
                        <span
                          className={`${badge} bg-purple-100 text-purple-800`}
                        >
                          📡 Electronics & Communication Engineering
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-3">
                        <span
                          className={`${badge} bg-blue-100 text-blue-800 font-medium`}
                        >
                          Minor: Computer Science & Engineering
                        </span>
                        <span
                          className={`${badge} bg-green-100 text-green-800 font-bold`}
                        >
                          CGPA: 8.15/10{" "}
                          <span className="text-gray-600 font-normal">
                            (till 6th sem)
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>

                {/* Timeline Column */}
                <div className="hidden lg:flex w-12 justify-center">
                  <motion.div
                    {...lineAnim}
                    className="origin-top w-1 h-full bg-gradient-to-b from-red-400 via-gray-500 to-red-400 rounded relative"
                  >
                    <div className="absolute -left-2 top-0">{dot}</div>
                  </motion.div>
                </div>

                {/* Right Spacer */}
                <div className="hidden lg:block w-1/3" />
              </div>

              {/* ITEM 2 — Class 12 (Right) */}
              <div className="flex justify-between lg:h-56">
                {/* Left Spacer */}
                <div className="hidden lg:block w-1/2" />

                {/* Timeline Column */}
                <div className="hidden lg:flex w-12 justify-center">
                  <motion.div
                    {...lineAnim}
                    className="origin-top w-1 h-full bg-gradient-to-b from-red-400 via-gray-500 to-red-400 rounded relative"
                  >
                    <div className="absolute -left-2 top-0">{dot}</div>
                  </motion.div>
                </div>

                {/* Right Card */}
                <motion.article {...blockAnim} className="w-full lg:w-1/3">
                  <div className={cardBase}>
                    <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#b3d4fc]/30 via-[#d6c8e5]/30 to-[#f3c6c6]/30 blur-xl" />
                    <div className="relative p-5">
                      <h3 className="font-extrabold text-lg text-gray-900">
                        Rajkiya Sarvodaya Bal Vidyalaya
                      </h3>
                      <p className="text-xs mt-1 italic text-gray-600">
                        📍 Gandhi Nagar, New Delhi
                      </p>

                      <div className="mt-3">
                        <p className="text-sm font-semibold">
                          Major Specialty (Class‑12th):
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {[
                            "Physics",
                            "Chemistry",
                            "Mathematics",
                            "Computer Science",
                            "English",
                          ].map((sub) => (
                            <span
                              key={sub}
                              className={`${badge} bg-blue-100 text-blue-800`}
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-3 text-sm font-semibold">
                        Percentage:{" "}
                        <span className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full shadow-sm border border-red-200">
                          91%
                        </span>
                      </div>

                      <p className="text-sm mt-3 text-red-500 font-semibold">
                        Apr 2020 — Jun 2021
                      </p>
                    </div>
                  </div>
                </motion.article>
              </div>

              {/* ITEM 3 — Class 10 (Left) */}
              <div className="flex justify-between lg:h-56">
                {/* Left Card */}
                <motion.article {...blockAnim} className="w-full lg:w-1/2">
                  <div className={cardBase}>
                    <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#b3d4fc]/30 via-[#d6c8e5]/30 to-[#f3c6c6]/30 blur-xl" />
                    <div className="relative p-5">
                      <h3 className="font-extrabold text-lg text-gray-900">
                        Rajkiya Sarvodaya Bal Vidyalaya
                      </h3>
                      <p className="text-xs mt-1 italic text-gray-600">
                        📍 Gandhi Nagar, New Delhi
                      </p>

                      <div className="mt-3">
                        <p className="text-sm font-semibold">
                          Major Specialty (Class‑10th):
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {[
                            "English",
                            "Hindi",
                            "Mathematics",
                            "Science",
                            "Social Science",
                            "Sanskrit",
                          ].map((sub) => (
                            <span
                              key={sub}
                              className={`${badge} bg-blue-100 text-blue-800`}
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-3 text-sm font-semibold">
                        Percentage:{" "}
                        <span className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full shadow-sm border border-red-200">
                          86.5%
                        </span>
                      </div>

                      <p className="text-sm mt-3 text-red-500 font-semibold">
                        Apr 2018 — Jun 2019
                      </p>
                    </div>
                  </div>
                </motion.article>

                {/* Timeline Column */}
                <div className="hidden lg:flex w-12 justify-center">
                  <motion.div
                    {...lineAnim}
                    className="origin-top w-1 h-full bg-gradient-to-b from-red-400 via-gray-500 to-red-400 rounded relative"
                  >
                    <div className="absolute -left-2 top-0">{dot}</div>
                  </motion.div>
                </div>

                {/* Right Spacer */}
                <div className="hidden lg:block w-1/3" />
              </div>
            </div>
          </section>

          {/* EXPERIENCE — Animated Timeline */}
          <section className="flex flex-col gap-8 justify-center">
            <motion.h2 {...blockAnim} className="font-bold text-2xl">
              Experience
            </motion.h2>

            <div className="space-y-10">
              {/* EXP 1 — Left */}
              <div className="flex justify-between lg:h-48">
                <motion.article {...blockAnim} className="w-full lg:w-1/2">
                  <div className={cardBase}>
                    <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#b3d4fc]/30 via-[#d6c8e5]/30 to-[#f3c6c6]/30 blur-xl" />
                    <div className="relative p-5">
                      <h3 className="font-extrabold text-lg">
                        Full Stack Developer Intern — Zidio Development
                      </h3>
                      <p className="text-xs mt-1 italic text-gray-600">
                        Remote / Bengaluru, India
                      </p>
                      <p className="text-sm mt-3">
                        Built a full‑stack web app for uploading, analyzing, and
                        visualizing Excel files with interactive chart
                        generation.
                      </p>
                      <p className="text-sm mt-3 text-red-500 font-semibold">
                        Jun 2025 — Aug 2025
                      </p>
                    </div>
                  </div>
                </motion.article>

                <div className="hidden lg:flex w-12 justify-center">
                  <motion.div
                    {...lineAnim}
                    className="origin-top w-1 h-full bg-gradient-to-b from-red-400 via-gray-500 to-red-400 rounded relative"
                  >
                    <div className="absolute -left-2 top-0">{dot}</div>
                  </motion.div>
                </div>

                <div className="hidden lg:block w-1/3" />
              </div>

              {/* EXP 2 — Right */}
              <div className="flex justify-between lg:h-44">
                <div className="hidden lg:block w-1/2" />
                <div className="hidden lg:flex w-12 justify-center">
                  <motion.div
                    {...lineAnim}
                    className="origin-top w-1 h-full bg-gradient-to-b from-red-400 via-gray-500 to-red-400 rounded relative"
                  >
                    <div className="absolute -left-2 top-0">{dot}</div>
                  </motion.div>
                </div>

                <motion.article {...blockAnim} className="w-full lg:w-1/3">
                  <div className={cardBase}>
                    <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#b3d4fc]/30 via-[#d6c8e5]/30 to-[#f3c6c6]/30 blur-xl" />
                    <div className="relative p-5">
                      <h3 className="font-extrabold text-lg">
                        Edunet Foundation
                      </h3>
                      <p className="text-xs mt-1 italic text-gray-600">
                        Remote
                      </p>
                      <p className="text-sm mt-3">
                        Developed an AI healthcare chatbot using Python,
                        scikit‑learn, and Hugging Face Transformers.
                      </p>
                      <p className="text-sm mt-3 text-red-500 font-semibold">
                        Jan 2025 — Feb 2025
                      </p>
                    </div>
                  </div>
                </motion.article>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT: BRAIN CANVAS */}
        <div className="hidden lg:block w-1/3 xl:1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}
