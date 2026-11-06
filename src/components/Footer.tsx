import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050f1e] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* SCHOOL INFO */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="relative h-16 w-16 rounded-full bg-white p-1">
                <Image
                  src="/images/school-logo.png"
                  alt="School Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div>
                <h3 className="font-serif text-sm tracking-wider">
                  PANICKAVEETTIL
                </h3>
                <p className="text-[10px] tracking-[2px] text-[#c5a15b]">
                  SIR SEBASTIAN
                </p>
                <p className="text-[9px] tracking-[2px]">
                  PUBLIC SCHOOL
                </p>
              </div>
            </div>

            <p className="text-sm leading-7 text-white/50">
              Inspiring young minds through quality education,
              knowledge, values and holistic development.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-7 font-serif text-xl">Quick Links</h3>

            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="/" className="hover:text-[#c5a15b]">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#c5a15b]">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-[#c5a15b]">Academics</Link></li>
              <li><Link href="/admissions" className="hover:text-[#c5a15b]">Admissions</Link></li>
              <li><Link href="/campus-life" className="hover:text-[#c5a15b]">Campus Life</Link></li>
              <li><Link href="/contact" className="hover:text-[#c5a15b]">Contact Us</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="mb-7 font-serif text-xl">Contact Us</h3>

            <div className="space-y-5 text-sm text-white/50">
              <p className="leading-7">
                Panickaveettil Sir Sebastian Public School,
                Cherthala, Kerala.
              </p>

              <p>Phone: Add Official Number</p>
              <p>Email: Add Official Email</p>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <h3 className="mb-7 font-serif text-xl">Follow Us</h3>

            <p className="mb-6 text-sm leading-7 text-white/50">
              Stay connected with our school activities,
              events and latest updates.
            </p>

            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center border border-white/20 transition hover:bg-[#c5a15b] hover:text-[#071426]">
                <span className="font-bold text-lg">f</span>
              </a>

              <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center border border-white/20 transition hover:bg-[#c5a15b] hover:text-[#071426]">
               <span className="text-lg font-bold">ig</span>
              </a>

              <a href="#" aria-label="YouTube" className="flex h-11 w-11 items-center justify-center border border-white/20 transition hover:bg-[#c5a15b] hover:text-[#071426]">
                <span className="text-lg">▶</span>
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 text-center md:flex-row md:items-center md:justify-between md:text-left">

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Panickaveettil Sir Sebastian Public School.
            All Rights Reserved.
          </p>

          <p className="flex items-center justify-center gap-2 text-xs text-white/40">
            Designed with Excellence.
            <ArrowUpRight size={14} />
          </p>

        </div>

      </div>
    </footer>
  );
}