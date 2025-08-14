"use client";
import Brain from "@/components/brain";
import { motion, useScroll, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const AboutPage = () => {
  const containterRef = useRef();
  const { scrollYProgress } = useScroll({ container: containterRef });
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  const workRef = useRef();
  const isWorkRefInView = useInView(workRef, { margin: "-100px" });
  return (
    <motion.div
      className="h-full"
      initial={false}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/*Containter */}
      <div
        className="h-full overflow-auto lg:flex no-scrollbar "
        ref={containterRef}
      >
        {/* Text Containter */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-34 lg:gap-48 xl:gap-64 lg:w-2/3 xl:1/2  ">
          {/* Biblography Containter */}
          <div className="flex flex-col gap-12 justify-center">
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
            <h2 className="italic font-bold text-lg">
              Scroll Down For Education & Experience Section
            </h2>
            <div className="">
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
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* Skills Containter */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <div className="flex gap-4 flex-wrap">
              <div className="rounded-lg text-sm p-2 cursor-pointer text-white bg-black hover:text-black hover:bg-white ">
                HTML
              </div>
              <div className="rounded-lg text-sm p-2 cursor-pointer text-white bg-black hover:text-black hover:bg-white ">
                CSS
              </div>
              <div className="rounded-lg text-sm p-2 cursor-pointer text-white bg-black hover:text-black hover:bg-white ">
                JavaScript
              </div>
              <div className="rounded-lg text-sm p-2 cursor-pointer text-white bg-black hover:text-black hover:bg-white ">
                Node Js
              </div>
              <div className="rounded-lg text-sm p-2 cursor-pointer text-white bg-black hover:text-black hover:bg-white ">
                Express JS
              </div>
              <div className="rounded-lg text-sm p-2 cursor-pointer text-white bg-black hover:text-black hover:bg-white ">
                Tailwind
              </div>
              <div className="rounded-lg text-sm p-2 cursor-pointer text-white bg-black hover:text-black hover:bg-white ">
                React
              </div>
              <div className="rounded-lg text-sm p-2 cursor-pointer text-white bg-black hover:text-black hover:bg-white ">
                NEXT js
              </div>
              <div className="rounded-lg text-sm p-2 cursor-pointer text-white bg-black hover:text-black hover:bg-white ">
                C
              </div>
              <div className="rounded-lg text-sm p-2 cursor-pointer text-white bg-black hover:text-black hover:bg-white ">
                C++
              </div>
              <div className="rounded-lg text-sm p-2 cursor-pointer text-white bg-black hover:text-black hover:bg-white ">
                Framer Motion
              </div>
              <div className="rounded-lg text-sm p-2 cursor-pointer text-white bg-black hover:text-black hover:bg-white ">
                MongoDB
              </div>
            </div>
            <div>
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
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* Education Containter */}
          <div
            className="flex flex-col gap-12 justify-center pb-48 "
            ref={experienceRef}
          >
            {/* Education TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Education
            </motion.h1>
            {/* Education List */}
            <div className="">
              {/* Items*/}
              <div
                className="flex justify-between h-52
                "
              >
                {/*Left */}
                <div className="w-1/2 ">
                  {/* Title */}

                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    {" "}
                    Delhi Technological University{" "}
                  </div>
                  <div className="text-xs p-1 mt-1  italic bg-gray-700 text-white rounded-b-lg rounded-s-lg">
                    New Delhi,India
                  </div>
                  {/* Location */}

                  <div className="text-sm p-3 font-semibold ">
                    Bachelors of Technology in Electronics & Communication
                    Engineering (ECE)
                  </div>
                  <div className="text-sm p-3 ">
                    <p className="font-semibold">Minor Specialty: </p>
                    <p className="font-semibold">
                      {" "}
                      Computer Science & Engineering
                    </p>
                    <p className="font-semibold">
                      CGPA: 8.15/10(till 6th semester)
                    </p>
                  </div>
                  {/* DAte */}
                  <div className="text-sm p-3 text-red-600  font-semibold">
                    {" "}
                    Nov,2022 - Aug,2026
                  </div>
                </div>

                {/*Center*/}
                <div className="w-1/7 ">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/*Right*/}
                <div className="w-1/3"></div>
              </div>

              <div className="flex justify-between h-48">
                {/*Left */}
                <div className="w-1/2 "></div>

                {/*Center*/}
                <div className="w-1/7 ">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/*Right*/}
                <div className="w-1/3">
                  {/* Title */}

                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-r-lg">
                    Rajkiya Sarvodaya Bal Vidyalaya
                  </div>
                  <div className="text-xs p-1 mt-1  italic bg-gray-700 text-white rounded-b-lg rounded-r-lg">
                    Gandhi Nagar, New Delhi
                  </div>
                  {/* Location */}

                  <div className="text-sm p-3 font-semibold ">
                    Major Specialty(Class-12th): Physics, Chemistry,
                    Mathematics, Computer Science ,English
                  </div>
                  <div className="text-sm p-3 font-semibold">
                    Percentage : 91%
                  </div>
                  {/* DAte */}
                  <div className="text-sm p-3 text-red-600  font-semibold">
                    {" "}
                    Apr,2020 - Jun,2021
                  </div>
                </div>
              </div>

              <div className="flex justify-between h-48">
                {/*Left */}
                <div className="w-1/2 ">
                  {/* Title */}

                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    {" "}
                    Rajkiya Sarvodaya Bal Vidyalaya
                  </div>
                  <div className="text-xs p-1 mt-1  italic bg-gray-700 text-white rounded-b-lg rounded-s-lg">
                    {" "}
                    Gandhi Nagar, New Delhi
                  </div>
                  {/* Location */}

                  <div className="text-sm p-3 font-semibold ">
                    Major Specialty(Class-10th): English, Hindi,
                    Mathematics,Science , Social Science, Sanskrit
                  </div>
                  <div className="text-sm p-3 font-semibold ">
                    Percentage : 86.5%
                  </div>
                  {/* DAte */}
                  <div className="text-sm p-3 text-red-600  font-semibold">
                    {" "}
                    Apr,2018 - Jun,2019
                  </div>
                </div>

                {/*Center*/}
                <div className="w-1/7 ">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/*Right*/}
                <div className="w-1/3"></div>
              </div>
            </div>
          </div>
          {/* 

          {/* Experience Containter */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={workRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isWorkRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Experience
            </motion.h1>

            {/* Experience List */}
            <div>
              {/* Exp 1 - Left */}
              <div className="flex justify-between h-52">
                {/* Left */}
                <div className="w-1/2">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Full Stack Developer Intern — Zidio Development
                  </div>
                  <div className="text-xs p-1 mt-1 italic bg-gray-700 text-white rounded-b-lg rounded-s-lg">
                    Remote / Bengaluru, India
                  </div>
                  <div className="text-sm p-3 font-semibold">
                    Built features with Next.js, Tailwind, and Node.js; improved
                    performance and created reusable UI components.
                  </div>
                  <div className="text-sm p-3 text-red-600 font-semibold">
                    Jun, 2025 — Aug, 2025
                  </div>
                </div>

                {/* Center */}
                <div className="w-1/7">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* Right */}
                <div className="w-1/3"></div>
              </div>

              {/* Exp 2 - Right */}
              <div className="flex justify-between h-48">
                {/* Left (empty to alternate) */}
                <div className="w-1/2"></div>

                {/* Center */}
                <div className="w-1/7">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* Right */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-r-lg">
                    Open Source Contributor — Project/Org
                  </div>
                  <div className="text-xs p-1 mt-1 italic bg-gray-700 text-white rounded-b-lg rounded-r-lg">
                    GitHub
                  </div>
                  <div className="text-sm p-3 font-semibold">
                    Contributed to issues & PRs; fixed bugs, improved docs, and
                    shipped features in React/JS tools.
                  </div>
                  <div className="text-sm p-3 text-red-600 font-semibold">
                    Jan, 2025 — Present
                  </div>
                </div>
              </div>

              {/* Exp 3 - Left */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/2">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelance Web Developer — Client Name
                  </div>
                  <div className="text-xs p-1 mt-1 italic bg-gray-700 text-white rounded-b-lg rounded-s-lg">
                    Remote
                  </div>
                  <div className="text-sm p-3 font-semibold">
                    Delivered a responsive SPA with auth, payments, and CMS
                    integration; improved Lighthouse scores.
                  </div>
                  <div className="text-sm p-3 text-red-600 font-semibold">
                    Sep, 2024 — Dec, 2024
                  </div>
                </div>

                {/* Center */}
                <div className="w-1/7">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* Right */}
                <div className="w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG Containter */}
        <div className="hidden lg:block w-1/3 xl:1/2 sticky top-0 z-30 ">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
