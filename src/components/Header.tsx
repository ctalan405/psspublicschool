"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // NAVBAR SCROLL ANIMATION
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Campus Life", href: "/campus-life" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[#071426]/95 backdrop-blur-xl border-white/10 shadow-xl shadow-black/30"
          : "bg-[#071426]/20 backdrop-blur-sm border-white/15"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-5 md:px-12">

        <div className="h-24 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">

            <div className="relative w-14 h-14 bg-white rounded-full p-1">
              <Image
                src="/images/school-logo.png"
                alt="School Logo"
                fill
                className="object-contain p-1"
              />
            </div>

            <div>
              <h2 className="font-serif text-sm md:text-base tracking-wider">
                PANICKAVEETTIL
              </h2>

              <p className="text-[#d6b46e] text-[10px] tracking-[2px]">
                SIR SEBASTIAN
              </p>

              <p className="text-[9px] tracking-[2px]">
                PUBLIC SCHOOL
              </p>
            </div>

          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-white/80 hover:text-[#d6b46e] transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* ADMISSION BUTTON */}
          <Link
            href="/admissions"
            className="hidden lg:flex items-center gap-3 bg-[#c5a15b] text-[#071426] px-6 py-3 text-xs font-bold hover:bg-[#e0c17f] transition"
          >
            Apply Now
            <ArrowRight size={16} />
          </Link>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={27} /> : <Menu size={27} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-[#071426] px-6 py-7 border-t border-white/10">
          <nav className="flex flex-col gap-6">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm hover:text-[#d6b46e]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/admissions"
              onClick={() => setMenuOpen(false)}
              className="bg-[#c5a15b] text-[#071426] text-center py-3 font-bold"
            >
              Admission Enquiry
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}