// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/25 bg-white/10 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-800">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} <span className="font-semibold">Abdur Rehman Malik</span>. All rights reserved.
        </p>

        <nav className="flex items-center gap-5">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/portfolio" className="hover:underline">Projects</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/Abdur_Resume.pdf" target="_blank" className="hover:underline">Resume</Link>
        </nav>
      </div>
    </footer>
  );
}
