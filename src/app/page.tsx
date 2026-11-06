"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,

  Globe,
  GraduationCap,
  Users,
  Lightbulb,
  ShieldCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

const slides = [
  {
    image: "/images/school-slide-1.jpg",
    subtitle: "WELCOME TO OUR SCHOOL",
    title1: "Where Young",
    title2: "Minds Flourish",
    description:
      "Panickaveettil Sir Sebastian Public School is committed to nurturing young minds through quality education, knowledge, values and holistic development.",
    button1: "Admission Enquiry",
    link1: "#admissions",
    button2: "Explore Our School",
    link2: "#about",
  },
  {
    image: "/images/school-slide-2.jpg",
    subtitle: "ACADEMIC EXCELLENCE",
    title1: "Inspiring Knowledge",
    title2: "& Creativity",
    description:
      "Encouraging students to explore new ideas, develop their abilities and build a strong foundation for lifelong learning.",
    button1: "Explore Academics",
    link1: "#academics",
    button2: "Know More",
    link2: "#about",
  },
  {
    image: "/images/school-slide-3.jpg",
    subtitle: "OUR CAMPUS LIFE",
    title1: "Learning, Growing",
    title2: "Together",
    description:
      "A supportive learning environment where students discover their talents, build friendships and grow with confidence.",
    button1: "Discover More",
    link1: "#about",
    button2: "Contact Us",
    link2: "#contact",
  },
];

useEffect(() => {
  const interval = setInterval(() => {
    setActiveSlide((current) => (current + 1) % slides.length);
  }, 5000);

  return () => clearInterval(interval);
}, [slides.length]);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      tl.from(
        ".highlight-card",
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
        },
        "-=0.3"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);


// ABOUT SECTION ANIMATION
useEffect(() => {
  const ctx = gsap.context(() => {

    gsap.from(".about-image", {
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%",
        once: true,
      },
      x: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(".about-content > *", {
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%",
        once: true,
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.18,
      ease: "power3.out",
    });

  });

  return () => ctx.revert();
}, []);

// PRINCIPAL SECTION ANIMATION
useEffect(() => {
  const ctx = gsap.context(() => {

    // Principal Image Animation
    gsap.from(".principal-image", {
      scrollTrigger: {
        trigger: "#principal",
        start: "top 75%",
        once: true,
      },
      x: -100,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
    });

    // Principal Content Animation
    gsap.from(".principal-content > *", {
      scrollTrigger: {
        trigger: "#principal",
        start: "top 75%",
        once: true,
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

  });

  return () => ctx.revert();
}, []);

// ACADEMICS SECTION ANIMATION
useEffect(() => {
  const ctx = gsap.context(() => {

    gsap.fromTo(
      ".academic-card",
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".academics-section",
          start: "top 80%",
          once: true,
        },
      }
    );

  });

  return () => ctx.revert();
}, []);

// ADMISSIONS SECTION ANIMATION
useEffect(() => {
  const ctx = gsap.context(() => {

    gsap.fromTo(
      ".admission-content",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".admissions-section",
          start: "top 75%",
          once: true,
        },
      }
    );

  });

  return () => ctx.revert();
}, []);

// CONTACT SECTION ANIMATION
useEffect(() => {
  const ctx = gsap.context(() => {

    gsap.fromTo(
      ".contact-heading > *",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 75%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      [".contact-info", ".contact-form"],
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 70%",
          once: true,
        },
      }
    );

  });

  return () => ctx.revert();
}, []);

  const highlights = [
    {
      icon: Globe,
      title: "CBSE Curriculum",
      description: "Structured learning experience",
    },
    {
      icon: Users,
      title: "Dedicated Faculty",
      description: "Guidance and inspiration",
    },
    {
      icon: GraduationCap,
      title: "Holistic Learning",
      description: "Learning beyond classrooms",
    },
    {
      icon: Lightbulb,
      title: "Modern Education",
      description: "Creativity and innovation",
    },
    {
      icon: ShieldCheck,
      title: "Safe Environment",
      description: "A place to learn and grow",
    },
  ];

  return (
    <main
      ref={heroRef}
      className="min-h-screen bg-[#071426] text-white overflow-hidden"
    >

{/* HERO SECTION - 3 SLIDE SLIDER */}

<section
  id="home"
  className="relative min-h-[850px] h-screen flex items-center"
>

  {/* SLIDER BACKGROUND */}

  <div className="absolute inset-0">

    {slides.map((slide, index) => (
      <div
        key={slide.image}
        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
          activeSlide === index
            ? "opacity-100 scale-100"
            : "opacity-0 scale-105"
        }`}
      >
        <Image
          src={slide.image}
          alt={slide.subtitle}
          fill
          priority={index === 0}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    ))}

    {/* DARK OVERLAY */}

    <div className="absolute inset-0 bg-gradient-to-r from-[#061326] via-[#061326]/85 to-[#061326]/30" />

    <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-[#071426]/30" />

  </div>

  {/* HERO CONTENT */}

  <div className="relative z-10 max-w-[1500px] mx-auto w-full px-6 md:px-12 pt-20">

    <div
      key={activeSlide}
      className="hero-content max-w-[750px] animate-[fadeIn_0.8s_ease-in-out]"
    >

      <div className="flex items-center gap-3 mb-7">

        <span className="w-10 h-px bg-[#d6b46e]" />

        <span className="text-[#d6b46e] text-xs tracking-[4px] uppercase">
          {slides[activeSlide].subtitle}
        </span>

      </div>

      <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[85px] leading-[1.08]">

        {slides[activeSlide].title1}

        <br />

        <span className="text-[#d6b46e] italic">
          {slides[activeSlide].title2}
        </span>

      </h1>

      <p className="text-white/75 text-sm md:text-base leading-8 max-w-[520px] mt-7">

        {slides[activeSlide].description}

      </p>

      {/* BUTTONS */}

      <div className="flex flex-wrap gap-4 mt-9">

        <Link
          href={slides[activeSlide].link1}
          className="flex items-center gap-3 bg-[#c5a15b] text-[#071426] px-7 py-4 text-xs font-bold hover:bg-[#e0c17f] transition"
        >
          {slides[activeSlide].button1}
          <ArrowRight size={17} />
        </Link>

        <Link
          href={slides[activeSlide].link2}
          className="flex items-center gap-3 border border-white/40 px-7 py-4 text-xs font-semibold hover:bg-white/10 transition"
        >
          {slides[activeSlide].button2}
          <ArrowRight size={17} />
        </Link>

      </div>

    </div>

  </div>

  {/* PREVIOUS BUTTON */}

  <button
    onClick={() =>
      setActiveSlide((current) =>
        (current - 1 + slides.length) % slides.length
      )
    }
    aria-label="Previous slide"
    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-14 md:h-14 rounded-full border border-white/40 bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-[#c5a15b] hover:text-[#071426] transition"
  >
    <ChevronLeft size={25} />
  </button>

  {/* NEXT BUTTON */}

  <button
    onClick={() =>
      setActiveSlide((current) =>
        (current + 1) % slides.length
      )
    }
    aria-label="Next slide"
    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-14 md:h-14 rounded-full border border-white/40 bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-[#c5a15b] hover:text-[#071426] transition"
  >
    <ChevronRight size={25} />
  </button>

  {/* SLIDE DOTS */}

  <div className="absolute bottom-48 md:bottom-52 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">

    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => setActiveSlide(index)}
        aria-label={`Go to slide ${index + 1}`}
        className={`h-2 rounded-full transition-all duration-500 ${
          activeSlide === index
            ? "w-10 bg-[#d6b46e]"
            : "w-2 bg-white/50 hover:bg-white"
        }`}
      />
    ))}

  </div>

  {/* SCROLL ICON */}

  <a
    href="#highlights"
    aria-label="Scroll down"
    className="absolute bottom-44 left-1/2 -translate-x-1/2 animate-bounce z-20"
  >
    <ChevronDown size={26} />
  </a>

  {/* HIGHLIGHTS - EXISTING DESIGN */}

  <div
    id="highlights"
    className="absolute bottom-5 md:bottom-9 left-0 w-full px-4 md:px-10 z-20"
  >

    <div className="max-w-[1450px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-[#0c1d32]/80 backdrop-blur-xl border border-white/20">

      {highlights.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="highlight-card flex items-center gap-3 p-4 md:p-5 border-r border-white/10"
          >

            <div className="hidden sm:flex w-11 h-11 shrink-0 rounded-full border border-[#d6b46e]/60 items-center justify-center">

              <Icon size={21} className="text-[#d6b46e]" />

            </div>

            <div>

              <h3 className="text-xs md:text-sm font-semibold">
                {item.title}
              </h3>

              <p className="text-[9px] md:text-[10px] text-white/55 mt-1">
                {item.description}
              </p>

            </div>

          </div>

        );

      })}

    </div>

  </div>

</section>

      {/* ABOUT SECTION */}


<section
  id="about"
  className="about-section relative py-28 md:py-36 px-6 md:px-12 bg-[#071426]"
>
  <div className="max-w-[1400px] mx-auto">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT IMAGE */}

      <div className="about-image relative">

        <div className="relative h-[420px] md:h-[550px] overflow-hidden">

          <Image
            src="/images/school-slide-1.jpg"
            alt="School Campus"
            fill
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/40 to-transparent" />

        </div>

        {/* GOLD BORDER */}

        <div className="absolute -bottom-5 -right-5 w-full h-full border border-[#c5a15b]/50 -z-0" />

      </div>

      {/* RIGHT CONTENT */}

      <div className="about-content relative z-10">

        <div className="flex items-center gap-3 mb-6">

          <span className="w-10 h-px bg-[#c5a15b]" />

          <span className="text-[#c5a15b] text-xs tracking-[4px] uppercase">
            About Our School
          </span>

        </div>

        <h2 className="font-serif text-4xl md:text-6xl leading-tight">

          Inspiring Young Minds,

          <span className="block text-[#c5a15b] italic mt-2">
            Shaping Bright Futures.
          </span>

        </h2>

        <p className="text-white/60 text-sm leading-8 mt-8">
          Panickaveettil Sir Sebastian Public School is dedicated
          to providing a meaningful educational experience that
          encourages students to discover their abilities,
          develop knowledge and grow with confidence.
        </p>

        <p className="text-white/60 text-sm leading-8 mt-5">
          We believe education is more than academic learning.
          It is about building character, nurturing creativity
          and preparing young minds for the future.
        </p>

        {/* VISION MISSION */}

        <div className="grid sm:grid-cols-2 gap-8 mt-10">

          <div className="border-l-2 border-[#c5a15b] pl-5">

            <h3 className="font-serif text-xl text-white">
              Our Vision
            </h3>

            <p className="text-white/50 text-xs leading-7 mt-3">
              To inspire every learner to achieve their potential
              and become a responsible individual.
            </p>

          </div>

          <div className="border-l-2 border-[#c5a15b] pl-5">

            <h3 className="font-serif text-xl text-white">
              Our Mission
            </h3>

            <p className="text-white/50 text-xs leading-7 mt-3">
              To encourage learning, creativity, values and
              all-round development.
            </p>

          </div>

        </div>

{/* BUTTON */}
<div className="mt-10 relative z-20">
  <Link
    href="#highlights"
    className="inline-flex items-center gap-4 bg-[#c5a15b] text-[#071426] px-7 py-4 text-xs font-bold hover:bg-[#e0c17f] transition-all duration-300"
  >
    DISCOVER MORE
    <ArrowRight size={17} />
  </Link>
</div>

      </div>

    </div>

  </div>
</section>

{/* PRINCIPAL'S MESSAGE */}
<section
  id="principal"
  className="relative overflow-hidden bg-[#0b1b30] py-24 px-6 md:px-12"
>
  <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

    {/* PRINCIPAL IMAGE */}
    <div className="principal-image relative mx-auto w-full max-w-lg">
      <div className="absolute -left-4 -top-4 h-full w-full border border-[#c5a15b]/50"></div>

      <div className="relative overflow-hidden rounded-sm">
        <Image
          src="/images/principal.jpg"
          alt="Mrs. Diana Jacob - Principal"
          width={800}
          height={600}
          className="h-[420px] w-full object-cover object-center"
        />
      </div>

      <div className="absolute -bottom-5 right-5 bg-[#c5a15b] px-7 py-4 text-[#071426] shadow-xl">
        <h3 className="font-serif text-xl font-bold">
          Mrs. Diana Jacob
        </h3>
        <p className="text-sm font-medium tracking-wider">
          PRINCIPAL
        </p>
      </div>
    </div>

    {/* MESSAGE CONTENT */}
    <div className="principal-content relative z-10 pt-5 md:pt-0">

      <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-[#c5a15b]">
        Principal's Message
      </p>

      <h2 className="mb-8 font-serif text-4xl leading-tight text-white md:text-5xl">
        Education is the Foundation of
        <span className="text-[#c5a15b]"> a Brighter Future.</span>
      </h2>

      <div className="mb-8 h-[2px] w-20 bg-[#c5a15b]"></div>

      <p className="mb-5 text-base leading-8 text-gray-300">
        Welcome to Panickaveettil Sir Sebastian Public School.
        We believe that education is not just about academic
        excellence, but also about developing character,
        confidence, creativity and responsibility.
      </p>

      <p className="mb-8 text-base leading-8 text-gray-300">
        Our aim is to create a positive learning environment
        where every student is encouraged to discover their
        potential and grow into a responsible individual.
      </p>

      <div>
        <h3 className="font-serif text-2xl text-white">
          Mrs. Diana Jacob
        </h3>
        <p className="mt-1 text-sm tracking-widest text-[#c5a15b]">
          PRINCIPAL
        </p>
      </div>

    </div>
  </div>
</section>

{/* ACADEMICS SECTION */}
<section
  id="academics"
  className="academics-section relative overflow-hidden bg-[#071426] py-28 px-6 md:px-12"
>
  <div className="mx-auto max-w-7xl">

    {/* SECTION HEADING */}
    <div className="academics-heading mx-auto mb-16 max-w-3xl text-center">

      <p className="mb-4 text-xs font-semibold uppercase tracking-[4px] text-[#c5a15b]">
        Academic Excellence
      </p>

      <h2 className="font-serif text-4xl leading-tight text-white md:text-6xl">
        Learning Today,
        <span className="block mt-2 italic text-[#c5a15b]">
          Leading Tomorrow.
        </span>
      </h2>

      <p className="mt-6 text-sm leading-8 text-white/60 md:text-base">
        We believe in creating meaningful learning experiences
        that encourage curiosity, knowledge and personal growth.
      </p>

    </div>

    {/* ACADEMIC CARDS */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {/* CARD 1 */}
      <div className="academic-card group border border-white/10 bg-[#0c1d32] p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#c5a15b]/60">

        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#c5a15b]/50 text-[#c5a15b] transition group-hover:bg-[#c5a15b] group-hover:text-[#071426]">
          <GraduationCap size={30} />
        </div>

        <h3 className="mb-4 font-serif text-2xl text-white">
          CBSE Curriculum
        </h3>

        <p className="text-sm leading-7 text-white/50">
          A structured learning approach designed to build
          knowledge, understanding and academic confidence.
        </p>

        <div className="mt-8 h-px w-12 bg-[#c5a15b] transition-all duration-500 group-hover:w-full" />

      </div>

      {/* CARD 2 */}
      <div className="academic-card group border border-white/10 bg-[#0c1d32] p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#c5a15b]/60">

        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#c5a15b]/50 text-[#c5a15b] transition group-hover:bg-[#c5a15b] group-hover:text-[#071426]">
          <Lightbulb size={30} />
        </div>

        <h3 className="mb-4 font-serif text-2xl text-white">
          Primary Education
        </h3>

        <p className="text-sm leading-7 text-white/50">
          Encouraging young learners to explore, discover
          and develop strong foundational skills.
        </p>

        <div className="mt-8 h-px w-12 bg-[#c5a15b] transition-all duration-500 group-hover:w-full" />

      </div>

      {/* CARD 3 */}
      <div className="academic-card group border border-white/10 bg-[#0c1d32] p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#c5a15b]/60">

        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#c5a15b]/50 text-[#c5a15b] transition group-hover:bg-[#c5a15b] group-hover:text-[#071426]">
          <Users size={30} />
        </div>

        <h3 className="mb-4 font-serif text-2xl text-white">
          Middle School
        </h3>

        <p className="text-sm leading-7 text-white/50">
          Supporting students in developing critical thinking,
          creativity and independent learning.
        </p>

        <div className="mt-8 h-px w-12 bg-[#c5a15b] transition-all duration-500 group-hover:w-full" />

      </div>

      {/* CARD 4 */}
      <div className="academic-card group border border-white/10 bg-[#0c1d32] p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#c5a15b]/60">

        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#c5a15b]/50 text-[#c5a15b] transition group-hover:bg-[#c5a15b] group-hover:text-[#071426]">
          <Globe size={30} />
        </div>

        <h3 className="mb-4 font-serif text-2xl text-white">
          Secondary Education
        </h3>

        <p className="text-sm leading-7 text-white/50">
          Preparing students for future opportunities through
          focused learning and academic development.
        </p>

        <div className="mt-8 h-px w-12 bg-[#c5a15b] transition-all duration-500 group-hover:w-full" />

      </div>

    </div>

  </div>
</section>

{/* ADMISSIONS SECTION */}
<section
  id="admissions"
  className="admissions-section relative overflow-hidden bg-[#0b1b30] py-28 px-6 md:px-12"
>
  {/* BACKGROUND DECORATION */}
  <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#c5a15b]/10" />
  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#c5a15b]/10" />

  <div className="relative z-10 mx-auto max-w-5xl text-center">

    <p className="admission-content mb-5 text-xs font-semibold uppercase tracking-[4px] text-[#c5a15b]">
      Admissions Open
    </p>

    <h2 className="admission-content font-serif text-4xl leading-tight text-white md:text-6xl">
      Give Your Child
      <span className="mt-2 block italic text-[#c5a15b]">
        A Brighter Tomorrow.
      </span>
    </h2>

    <p className="admission-content mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
      Begin your child's journey towards knowledge, confidence
      and excellence. Join Panickaveettil Sir Sebastian Public School
      and discover a world of learning opportunities.
    </p>

    <div className="admission-content mt-10 flex flex-wrap justify-center gap-5">

      <Link
        href="#contact"
        className="inline-flex items-center gap-3 bg-[#c5a15b] px-8 py-4 text-xs font-bold text-[#071426] transition-all duration-300 hover:bg-[#e0c17f]"
      >
        ENQUIRE NOW
        <ArrowRight size={17} />
      </Link>

      <Link
        href="#academics"
        className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-xs font-semibold text-white transition-all duration-300 hover:bg-white/10"
      >
        EXPLORE ACADEMICS
        <ArrowRight size={17} />
      </Link>

    </div>

  </div>
</section>

{/* CONTACT SECTION */}
<section
  id="contact"
  className="contact-section bg-[#071426] px-6 py-28 md:px-12"
>
  <div className="mx-auto max-w-7xl">

    {/* HEADING */}
    <div className="contact-heading mb-16 text-center">

      <p className="mb-4 text-xs font-semibold uppercase tracking-[4px] text-[#c5a15b]">
        Get In Touch
      </p>

      <h2 className="font-serif text-4xl text-white md:text-6xl">
        Let's Start a
        <span className="block mt-2 italic text-[#c5a15b]">
          Bright Journey.
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/60">
        We would love to hear from you. Contact us for admissions,
        enquiries and more information about our school.
      </p>

    </div>

    <div className="grid gap-12 lg:grid-cols-2">

      {/* CONTACT INFORMATION */}
      <div className="contact-info space-y-8">

        <div className="border-l-2 border-[#c5a15b] bg-[#0c1d32] p-7">
          <h3 className="mb-3 font-serif text-xl text-white">
            School Address
          </h3>
          <p className="text-sm leading-7 text-white/60">
            Panickaveettil Sir Sebastian Public School,
            Cherthala, Kerala.
          </p>
        </div>

        <div className="border-l-2 border-[#c5a15b] bg-[#0c1d32] p-7">
          <h3 className="mb-3 font-serif text-xl text-white">
            Phone Number
          </h3>
          <p className="text-sm text-white/60">
            Add official school phone number here.
          </p>
        </div>

        <div className="border-l-2 border-[#c5a15b] bg-[#0c1d32] p-7">
          <h3 className="mb-3 font-serif text-xl text-white">
            Email Address
          </h3>
          <p className="text-sm text-white/60">
            Add official school email here.
          </p>
        </div>

      </div>

      {/* CONTACT FORM */}
      <div className="contact-form border border-white/10 bg-[#0c1d32] p-8 md:p-10">

        <h3 className="mb-8 font-serif text-3xl text-white">
          Send Us a Message
        </h3>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-white/10 bg-[#071426] px-5 py-4 text-sm text-white outline-none transition focus:border-[#c5a15b]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-white/10 bg-[#071426] px-5 py-4 text-sm text-white outline-none transition focus:border-[#c5a15b]"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-white/10 bg-[#071426] px-5 py-4 text-sm text-white outline-none transition focus:border-[#c5a15b]"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full resize-none border border-white/10 bg-[#071426] px-5 py-4 text-sm text-white outline-none transition focus:border-[#c5a15b]"
          />

          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 bg-[#c5a15b] px-7 py-4 text-xs font-bold text-[#071426] transition hover:bg-[#e0c17f]"
          >
            SEND MESSAGE
            <ArrowRight size={17} />
          </button>

        </form>

      </div>

    </div>

  </div>
</section>


    </main>
  );
}