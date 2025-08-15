"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Projects" },
  { url: "/contact", title: "Contact" },
  { url: "https://drive.google.com/file/d/1PAkRpRjK2TadRJOMHVEPRlvoXb3hk4MX/view?usp=drive_link", title: "Resume" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45 },
  };
  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45 },
  };

  const listVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const listItemVariants = {
    closed: { x: "-10", opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div
      className="h-20 w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl
      bg-white/10 backdrop-blur-md border-b border-white/20 fixed top-0 left-0 z-50"
    >
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-4 w-1/3  ">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href="/">
          <Image src="/l.png" alt="Logo" width={110} height={110} />
        </Link>
      </div>

      {/* Social Links */}
      <div className="hidden md:flex gap-4 w-1/3 xl:flex xl:justify-end">
        <Link href="https://github.com/Abdurrehman96x" target="_blank">
          <Image src="/github.png" alt="GitHub" width={24} height={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/abdur-rehman-malik-2a2b62239/"
          target="_blank"
        >
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link>
        <Link href="mailto:abdurrehman96x@gmail.com">
          <Image src="/mail.png" alt="Email" width={24} height={24} />
        </Link>
        <Link href="https://leetcode.com/u/abdurrehman96x/" target="_blank">
          <Image src="/leetcode.png" alt="LeetCode" width={24} height={24} />
        </Link>
        <Link href="https://codolio.com/profile/abdurrehman96x" target="_blank">
          <Image src="/codolio.png" alt="Codolio" width={24} height={24} />
        </Link>
        <Link
          href="https://www.instagram.com/abdur.rehman96x_/"
          target="_blank"
        >
          <Image src="/insta.png" alt="Instagram" width={24} height={24} />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded-3xl origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded-3xl"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded-3xl origin-left"
          ></motion.div>
        </button>

        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen 
      bg-gradient-to-b from-[#b3d4fc] via-[#d6c8e5] to-[#f3c6c6] 
      backdrop-blur-[80px] 
      border-l border-white/30 
      text-gray-900 
      flex flex-col justify-center items-center gap-4 text-4xl z-40 
      shadow-[inset_0_0_80px_rgba(255,255,255,0.3)]"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link
                  href={link.url}
                  target={link.title === "Resume" ? "_blank" : "_self"}
                  rel={link.title === "Resume" ? "noopener noreferrer" : ""}
                  onClick={() => setOpen(false)}
                  className="hover:text-black/70 transition-colors duration-200"
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
