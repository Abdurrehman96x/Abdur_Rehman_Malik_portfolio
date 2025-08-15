"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { Code2, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";


const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: 0.06 * i },
  }),
};

export default function ContactPage() {
  const form = useRef(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [msgLen, setMsgLen] = useState(0);

  const sendEmail = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const fd = new FormData(form.current);
    const email = (fd.get("user_email") || "").toString().trim();
    const message = (fd.get("user_message") || "").toString().trim();
    const name = (fd.get("user_name") || "").toString().trim();
    const botTrap = (fd.get("website") || "").toString(); // honeypot

    if (botTrap) return;
    if (!name) return setError("Please enter your name.");
    if (!email || !/^\S+@\S+\.\S+$/.test(email))
      return setError("Please enter a valid email address.");
    if (!message || message.length < 10)
      return setError(
        "Please write a few words about your message (min 10 chars)."
      );

    setLoading(true);
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );
      setSuccess(true);
      form.current.reset();
      setMsgLen(0);
    } catch (err) {
      setError("Something went wrong while sending. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#b3d4fc] via-[#d6c8e5] to-[#f3c6c6] text-black"
      initial={false}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        {/* Header + Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {/* Left: intro / contacts */}
          <div>
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
              variants={fadeUp}
            >
              Say Hello 👋
            </motion.h1>
            <motion.p
              className="mt-3 text-gray-800 max-w-prose"
              variants={fadeUp}
              custom={1}
            >
              I’d love to hear about your project, collaboration ideas, or just
              chat tech. I usually reply within 24 hours.
            </motion.p>

            <motion.div className="mt-8 space-y-4" variants={fadeUp} custom={2}>
              <div className="flex items-center gap-3 text-gray-700">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4z" fill="none" />
                  <path
                    d="M4 8l8 5 8-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="2"
                    ry="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
                <a
                  href="mailto:abdurrehman96x@gmail.com"
                  className="hover:underline"
                >
                  abdurrehman96x@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    d="M16 8a4 4 0 11-8 0 4 4 0 018 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M12 14c-5 0-8 3-8 6v1h16v-1c0-3-3-6-8-6z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
                <span>New Delhi, India</span>
              </div>
            </motion.div>
          </div>

          {/* Right: form card */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="relative rounded-3xl overflow-hidden ring-1 ring-black/10 bg-white/80 backdrop-blur-md p-6 md:p-8"
            variants={fadeUp}
            custom={3}
          >
            {/* soft glow */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[0_40px_120px_-40px_rgba(0,0,0,0.2)]" />

            {/* Banner states */}
            {success && (
              <div className="mb-4 rounded-lg bg-emerald-500/15 text-emerald-700 ring-1 ring-emerald-400/30 px-4 py-3">
                Your message has been sent successfully! 🎉
              </div>
            )}
            {error && (
              <div className="mb-4 rounded-lg bg-rose-500/15 text-rose-700 ring-1 ring-rose-400/30 px-4 py-3">
                {error}
              </div>
            )}

            {/* Honeypot (anti‑spam) */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <label className="flex flex-col">
                <span className="text-sm text-gray-600 mb-1">Your Name</span>
                <input
                  name="user_name"
                  type="text"
                  placeholder="John Doe"
                  className="rounded-xl bg-white/70 border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500/60"
                />
              </label>

              {/* Email */}
              <label className="flex flex-col">
                <span className="text-sm text-gray-600 mb-1">Email</span>
                <input
                  name="user_email"
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-xl bg-white/70 border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500/60"
                />
              </label>

              {/* Subject */}
              <label className="md:col-span-2 flex flex-col">
                <span className="text-sm text-gray-600 mb-1">Subject</span>
                <input
                  name="subject"
                  type="text"
                  placeholder="Project inquiry, collaboration, feedback…"
                  className="rounded-xl bg-white/70 border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500/60"
                />
              </label>

              {/* Message */}
              <label className="md:col-span-2 flex flex-col">
                <span className="text-sm text-gray-600 mb-1">Message</span>
                <textarea
                  name="user_message"
                  rows={6}
                  placeholder="Tell me a little about what you need…"
                  onChange={(e) => setMsgLen(e.target.value.length)}
                  className="rounded-xl bg-white/70 border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500/60 resize-y"
                />
                <span className="mt-1 text-xs text-gray-500">
                  {msgLen} / 1000
                </span>
              </label>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              <span className="text-xs text-gray-600">
                This form uses EmailJS. Your email will only be used to reply.
              </span>

              <button
                disabled={loading}
                className="inline-flex items-center px-5 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold ring-1 ring-black/10 hover:opacity-90 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin mr-2 h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#b3d4fc] via-[#d6c8e5] to-[#f3c6c6] text-gray-900 border-t border-white/30 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Logo & Branding */}
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-black" />
            <span className="font-bold text-lg tracking-wide">
              Abdur Rehman Malik
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 text-sm font-medium">
            <a href="/about" className="hover:text-black transition-colors">
              About
            </a>
            <Link
              href="/portfolio"
              className="hover:text-black transition-colors"
            >
              Projects
            </Link>
            <a href="/contact" className="hover:text-black transition-colors">
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/1BS48bzJMD2IcljzTmeaZUQ9TCmSYeeRl/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Abdurrehman96x"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdur-rehman-malik-2a2b62239/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:abdurrehman96x@gmail.com"
              className="hover:scale-110 transition-transform"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-4 text-xs">
          © {new Date().getFullYear()} Abdur Rehman Malik. All rights reserved.
        </div>
      </footer>
    </motion.div>
  );
}
