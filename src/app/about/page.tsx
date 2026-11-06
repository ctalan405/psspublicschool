"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  GraduationCap,
  CalendarDays,
  BookOpen,
  MapPin,
  Award,
  Users,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#071426] text-white min-h-screen overflow-hidden">

      {/* =========================================
          ABOUT HERO SECTION
      ========================================= */}

      <section className="relative min-h-[650px] h-[85vh] flex items-center overflow-hidden">

        {/* BACKGROUND IMAGE */}

        <div className="absolute inset-0">

          <Image
            src="/images/about-hero.jpg"
            alt="Students of Panickaveettil Sir Sebastian Public School"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* DARK OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-r from-[#061326] via-[#061326]/80 to-[#061326]/30" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-[#071426]/20" />

        </div>

        {/* HERO CONTENT */}

        <div className="relative z-10 max-w-[1500px] mx-auto w-full px-6 md:px-12 pt-16">

          <div className="max-w-[850px]">

            <div className="flex items-center gap-3 mb-7">

              <span className="w-10 h-px bg-[#d6b46e]" />

              <span className="text-[#d6b46e] text-xs tracking-[5px] uppercase">
                Discover Our School
              </span>

            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[85px] leading-[1.08]">

              A Legacy of

              <br />

              <span className="text-[#d6b46e] italic">
                Learning & Excellence.
              </span>

            </h1>

            <p className="text-white/75 text-sm md:text-base leading-8 max-w-[550px] mt-7">

              Established in 1985, Panickaveettil Sir Sebastian
              Public School is committed to nurturing young minds
              through quality education, knowledge and values.

            </p>

            {/* BREADCRUMB */}

            <div className="flex items-center gap-3 mt-9 text-xs tracking-wider">

              <Link
                href="/"
                className="text-white/60 hover:text-[#d6b46e] transition"
              >
                HOME
              </Link>

              <ArrowRight size={14} className="text-[#d6b46e]" />

              <span className="text-[#d6b46e]">
                ABOUT US
              </span>

            </div>

          </div>

        </div>

        {/* SCROLL INDICATOR */}

        <a
          href="#about-intro"
          aria-label="Scroll to about introduction"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20"
        >

          <div className="w-8 h-12 rounded-full border border-white/40 flex justify-center pt-2">

            <span className="w-1 h-3 bg-[#d6b46e] rounded-full" />

          </div>

        </a>

      </section>


      {/* =========================================
          ABOUT INTRODUCTION SECTION
      ========================================= */}

      <section
        id="about-intro"
        className="py-24 md:py-32 px-6 md:px-12 bg-[#071426]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}

            <div>

              <div className="flex items-center gap-3 mb-5">

                <span className="w-10 h-px bg-[#c5a15b]" />

                <p className="text-[#c5a15b] text-xs tracking-[4px] uppercase">
                  Who We Are
                </p>

              </div>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">

                A Journey of

                <span className="block text-[#c5a15b] italic mt-2">
                  Knowledge & Values.
                </span>

              </h2>

              <p className="text-white/60 text-sm leading-8 mt-8">

                Panickaveettil Sir Sebastian Public School is situated
                in Vayalar village, Cherthala, Alappuzha district,
                Kerala. Located away from the hustle and bustle of
                highways and heavy traffic, the school provides a
                peaceful environment for learning.

              </p>

              <p className="text-white/60 text-sm leading-8 mt-5">

                The school is managed by Panickaveettil Sir Sebastian
                Charitable Society, registered under No. A574/85.
                Established in 1985, the institution is affiliated
                with the Central Board of Secondary Education,
                New Delhi, with Affiliation No. 930075 since
                01/04/1993.

              </p>

              <p className="text-white/60 text-sm leading-8 mt-5">

                The school was upgraded to Senior Secondary level
                in 1995 and is named after the late
                Mr. Sebastian Sir Panickaveettil.

              </p>

            </div>


    
             {/* RIGHT IMAGE */}

            <div className="relative">

              <div className="relative h-[350px] md:h-[480px] overflow-hidden">

                <Image
                  src="/images/school-slide-1.jpg"
                  alt="Panickaveettil Sir Sebastian Public School Campus"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/50 to-transparent" />

              </div>

              <div className="absolute -bottom-5 -right-5 w-full h-full border border-[#c5a15b]/50 -z-0" />

            </div>
          </div>

        </div>

      </section>


      {/* =========================================
          SCHOOL LOCATION SECTION
      ========================================= */}

      <section className="relative bg-[#0b1b30] py-24 md:py-28 px-6 md:px-12">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}

            <div>

              <div className="flex items-center gap-3 mb-5">

                <span className="w-10 h-px bg-[#c5a15b]" />

                <p className="text-[#c5a15b] text-xs tracking-[4px] uppercase">
                  Our Location
                </p>

              </div>

              <h2 className="font-serif text-4xl md:text-5xl leading-tight">

                A Peaceful Place

                <span className="block text-[#c5a15b] italic mt-2">
                  To Learn & Grow.
                </span>

              </h2>

              <p className="text-white/60 text-sm leading-8 mt-7">

                Our school is situated in Vayalar village,
                Cherthala, Alappuzha district, Kerala.
                The location is surrounded by the beautiful
                Vembanad Backwaters and small canals.

              </p>

              <p className="text-white/60 text-sm leading-8 mt-5">

                The peaceful surroundings provide a calm
                atmosphere away from the hustle and bustle
                of highways and heavy traffic.

              </p>

              <div className="flex items-center gap-4 mt-9">

                <div className="w-12 h-12 border border-[#c5a15b]/50 flex items-center justify-center">

                  <MapPin
                    size={22}
                    className="text-[#c5a15b]"
                  />

                </div>

                <div>

                  <h3 className="text-white font-semibold text-sm">
                    Vayalar, Cherthala
                  </h3>

                  <p className="text-white/50 text-xs mt-1">
                    Alappuzha, Kerala, India
                  </p>

                </div>

              </div>

            </div>


            {/* RIGHT IMAGE */}

            <div className="relative">

              <div className="relative h-[350px] md:h-[480px] overflow-hidden">

                <Image
                  src="/images/school-slide-1.jpg"
                  alt="Panickaveettil Sir Sebastian Public School Campus"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/50 to-transparent" />

              </div>

              <div className="absolute -bottom-5 -right-5 w-full h-full border border-[#c5a15b]/50 -z-0" />

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          EDUCATIONAL VALUES SECTION
      ========================================= */}

      <section className="bg-[#071426] py-24 md:py-28 px-6 md:px-12">

        <div className="max-w-7xl mx-auto">

          {/* HEADING */}

          <div className="text-center max-w-3xl mx-auto mb-16">

            <p className="text-[#c5a15b] text-xs tracking-[4px] uppercase mb-5">
              Our Educational Purpose
            </p>

            <h2 className="font-serif text-4xl md:text-6xl leading-tight">

              Education Beyond

              <span className="block text-[#c5a15b] italic mt-2">
                The Classroom.
              </span>

            </h2>

            <p className="text-white/50 text-sm leading-8 mt-6">

              We believe in nurturing children to become
              responsible individuals with knowledge,
              character and values.

            </p>

          </div>


          {/* VALUE CARDS */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* CARD 1 */}

            <div className="group bg-[#0c1d32] border border-white/10 p-8 hover:border-[#c5a15b]/60 transition duration-500">

              <Award
                size={34}
                className="text-[#c5a15b] mb-7"
              />

              <h3 className="font-serif text-2xl text-white mb-4">
                Knowledge
              </h3>

              <p className="text-white/50 text-sm leading-7">
                Encouraging students to develop knowledge
                and discover their abilities.
              </p>

              <div className="w-10 h-px bg-[#c5a15b] mt-8 group-hover:w-full transition-all duration-500" />

            </div>


            {/* CARD 2 */}

            <div className="group bg-[#0c1d32] border border-white/10 p-8 hover:border-[#c5a15b]/60 transition duration-500">

              <Users
                size={34}
                className="text-[#c5a15b] mb-7"
              />

              <h3 className="font-serif text-2xl text-white mb-4">
                Character
              </h3>

              <p className="text-white/50 text-sm leading-7">
                Building responsible individuals with
                confidence and good character.
              </p>

              <div className="w-10 h-px bg-[#c5a15b] mt-8 group-hover:w-full transition-all duration-500" />

            </div>


            {/* CARD 3 */}

            <div className="group bg-[#0c1d32] border border-white/10 p-8 hover:border-[#c5a15b]/60 transition duration-500">

              <GraduationCap
                size={34}
                className="text-[#c5a15b] mb-7"
              />

              <h3 className="font-serif text-2xl text-white mb-4">
                Development
              </h3>

              <p className="text-white/50 text-sm leading-7">
                Supporting the overall growth and development
                of every learner.
              </p>

              <div className="w-10 h-px bg-[#c5a15b] mt-8 group-hover:w-full transition-all duration-500" />

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          ADMISSION CTA SECTION
      ========================================= */}

      <section className="bg-[#0b1b30] py-24 px-6 md:px-12">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-[#c5a15b] text-xs tracking-[4px] uppercase mb-5">
            Begin Your Journey
          </p>

          <h2 className="font-serif text-4xl md:text-6xl leading-tight">

            Be Part of Our

            <span className="block text-[#c5a15b] italic mt-2">
              Learning Community.
            </span>

          </h2>

          <p className="text-white/50 text-sm leading-8 max-w-2xl mx-auto mt-7">

            Discover learning opportunities at Panickaveettil
            Sir Sebastian Public School.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <Link
              href="/#admissions"
              className="inline-flex items-center gap-3 bg-[#c5a15b] text-[#071426] px-8 py-4 text-xs font-bold hover:bg-[#e0c17f] transition"
            >

              ADMISSION ENQUIRY

              <ArrowRight size={17} />

            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-xs font-semibold hover:bg-white/10 transition"
            >

              CONTACT US

              <ArrowRight size={17} />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}