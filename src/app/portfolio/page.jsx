"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Excel Analytics",
    img: "/Excel_analytics.png",
    bullets: [
      "A full-stack web app for uploading , analyzing,	and	visualizing Excel	files with interactive chart generation.",
      "Developed RESTful	APIs using Node.js, Express, and MongoDB for secure file storage and data	parsing",
      "Implemented JWT authentication, role-based	routing, protected dashboard and responsive dark/light mode toggle",
      "Enabled upload	history, recent charts, and 2D/3D chart visualization , users can download charts as PNG images",
    ],
    tags: [
      "React.js",
      "Node.js",
      "Vite",
      "Express.js",
      "MongoDB",
      "Tailwind	CSS",
      "JWT",
      "XLSX",
      "Recharts",
      "Vercel",
    ],
    live: "https://excel-analytics-arm.vercel.app/",
    github: "https://github.com/Abdurrehman96x/Excel_Analytics_Mern",
    details: "/projects/solanaforge",
  },
  {
    id: 2,
    title: "Concise AI - AI Article Summarizer",
    img: "/Concise_AI.png",
    bullets: [
      "Developed a Chrome extension to summarize online articles using Gemini API.",
      "Implemented 3 summary modes (brief, detailed, bullet points), enhancing user flexibility",
      "Utilized Google Gemini via proxy server to generate accurate & Achieved 95%+ accuracy in AI-driven summaries ",
      "Added PD download functionality using jsPDF, including multi-page support and custom branding",
    ],
    tags: [
      "HTML",
      "CSS	",
      "JavaScript",
      "Gemini	API",
      "Node",
      "Chrome	Extension	(Manifest	V3)",
    ],
    live: "https://chromewebstore.google.com/detail/concise-ai/mnbijdkdbjnpanmbfnjmkidpciakloea",
    github: "https://github.com/Abdurrehman96x/Concise-AI",
    details: "/projects/react-commerce",
  },
  {
    id: 3,
    title: "Real Track",
    img: "/Real_track.png",
    bullets: [
      "It is a Real Time Tracker which enables real-time	tracking	of	up	to	two	users simultaneously, displaying theirlocation and providing directions for the shortest	path	and	distance	between them.",
      "Enabled real-time updates every	5	seconds to track up to two users at the same time",
      "Leafletjs library provides Interactive	maps to show user locations .",
      "Provided turn-by-turn directions on an interactive map for easy navigation.",
    ],
    tags: [
      "Node.js",
      "Javascript",
      "Express.js",
      "Socket	io",
      "Leaflet Js",
    ],
    live: "https://realtrack.onrender.com/",
    github: "https://github.com/Abdurrehman96x/RealTrack",
    details: "/projects/solanaforge",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: 0.05 * i },
  }),
};

function IconLink() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="mr-2">
      <path
        d="M14 3h7v7M21 3l-8 8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 21H6a3 3 0 0 1-3-3V6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCode() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="mr-2">
      <path
        d="M8 17l-5-5 5-5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMore() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="mr-2">
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PortfolioPage() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#b3d4fc] via-[#d6c8e5] to-[#f3c6c6] text-black"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #b3d4fc, #c6b4db, #f3c6c6)",
      }}
      initial={false}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-12 md:pt-16 pb-6">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          My Projects
        </motion.h1>
        <motion.p
          className="mt-3 text-gray-800 max-w-2xl"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
        >
          A curated set of builds and experiments. Click “More Details” for a
          case study, or jump straight to the demo and source.
        </motion.p>
      </header>

      {/* List */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pb-20 space-y-12 md:space-y-16">
        {projects.map((p, idx) => (
          <motion.article
            key={p.id}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={idx + 2}
            className="relative rounded-3xl overflow-hidden ring-1 ring-black/10 
             bg-gradient-to-br from-white/20 via-white/10 to-white/20 
             backdrop-blur-xl shadow-lg transition-all duration-1000 
            hover:scale-[1.5] hover:shadow-2xl hover:from-white/30 hover:via-white/20 hover:to-white/30"
          >
            <div className="absolute inset-0 rounded-3xl shadow-[0_40px_120px_-40px_rgba(0,0,0,0.2)] pointer-events-none" />

            {/* preview */}
            <div className="p-4 md:p-6">
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-black/10">
                <div className="relative">
                  <Image
                    src={p.img}
                    alt={`${p.title} preview`}
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover rounded-2xl"
                    priority={idx === 0}
                  />

                  {/* overlay + More Details */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                    <Link
                      href={p.details || p.live || "#"}
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-black text-white font-semibold shadow hover:shadow-lg"
                    >
                      <IconMore /> More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* text zone */}
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <h2 className="text-2xl md:text-[32px] font-extrabold leading-tight">
                {p.title}
              </h2>

              <ul className="mt-4 space-y-2 text-[15px] md:text-base text-gray-700">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex">
                    <span className="mt-[7px] mr-3 h-1.5 w-1.5 rounded-full bg-pink-400/90" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs md:text-sm rounded-full bg-gray-200 ring-1 ring-black/10 text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* actions */}
              <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
                {p.github && (
                  <Link
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-xl bg-gray-100 text-gray-800 ring-1 ring-black/10 hover:bg-gray-200 transition"
                  >
                    <IconCode />
                    <span className="font-semibold">Source Code</span>
                  </Link>
                )}
                {p.live && (
                  <Link
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-gray-800 to-black text-white hover:opacity-90 transition"
                  >
                    <IconLink />
                    <span className="font-semibold">View Project</span>
                  </Link>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </main>
    </motion.div>
  );
}
