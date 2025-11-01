"use client";

import { Button } from "@/common/Button";
import { useLanguage } from "@/context/language-provider";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { t, language, dir } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const lampY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const leftImageY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Unified title variants for all languages
  const titleVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.05,
      },
    },
  };

  const charVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  const subtitleVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.8,
        staggerChildren: 0.05,
      },
    },
  };

  const paragraphVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 1,
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 1.8,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    },
  };

  // Split text into individual characters for stagger animation (only for non-Arabic)
  const titleText = t("hero.title");
  const titleChars = titleText.split("");
  const isArabic = language === "ar";

  return (
    <section id="hero" className="relative" ref={heroRef} dir={dir}>
      <div className="relative flex items-center justify-center w-full min-h-screen py-12 sm:py-16 md:py-20 overflow-hidden bg-[var(--background)]">
        {/* ===== 1. GRID BACKGROUND ===== */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage: `
        linear-gradient(to bottom, var(--foreground) 1px, transparent 1px),
        linear-gradient(to right, var(--foreground) 1px, transparent 1px)
      `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* ===== 2. DIAGONAL ACCENT LINES ===== */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-[var(--foreground)] to-transparent opacity-20"
            style={{ transform: "rotate(-15deg)" }}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-3/4 left-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-[var(--foreground)] to-transparent opacity-20"
            style={{ transform: "rotate(-15deg)" }}
          />
        </div>

        {/* ===== 3. CORNER DECORATIONS ===== */}
        {[
          "top-0 left-0 border-l-2 border-t-2",
          "top-0 right-0 border-r-2 border-t-2",
          "bottom-0 left-0 border-l-2 border-b-2",
          "bottom-0 right-0 border-r-2 border-b-2",
        ].map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className={`absolute ${pos} w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-[var(--foreground)] opacity-20 z-[2]`}
          />
        ))}

        {/* ===== 4. MAIN CONTENT ===== */}
        <div className="relative z-[5] flex flex-col items-center w-full max-w-6xl gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 lg:px-8 mx-auto text-center">
          {/* Top line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="w-12 sm:w-16 md:w-24 h-[2px] bg-[var(--foreground)] origin-center"
          />

          {/* Title - REMOVED md:text-nowrap and adjusted sizes */}
          <motion.h1
            key={language}
            className="text-[var(--foreground)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter uppercase leading-none break-words"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {isArabic ? (
              <motion.span variants={charVariants}>{titleText}</motion.span>
            ) : (
              <motion.span className="inline-block">
                {titleChars.map((char, i) => (
                  <motion.span
                    key={i}
                    variants={charVariants}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            )}
          </motion.h1>

          {/* Bottom line under title */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-xs sm:max-w-md md:max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-[var(--foreground)] to-transparent opacity-30"
          />

          {/* Subtitle + Description */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6 max-w-3xl w-full">
            <motion.p
              key={`subtitle-${language}`}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[var(--foreground)] font-bold tracking-[0.05em] uppercase px-2"
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
            >
              {t("hero.subtitle")
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    key={i}
                    variants={charVariants}
                    className="inline-block mr-2 sm:mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
            </motion.p>

            <motion.p
              key={`description-${language}`}
              className="max-w-2xl text-[var(--foreground)]/70 text-sm sm:text-base md:text-lg font-medium text-center leading-relaxed px-2"
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
            >
              {t("hero.description")}
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div
            key={`buttons-${language}`}
            className={`flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 mt-2 sm:mt-4 w-full sm:w-auto ${
              dir === "rtl" ? "sm:flex-row-reverse" : ""
            }`}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="relative group w-full sm:w-auto">
              <Link href="#services" className="block w-full sm:w-auto">
                <Button
                  className="relative w-full sm:w-auto"
                  variant="secondary"
                  size="lg"
                >
                  {t("hero.services")}
                </Button>
              </Link>
            </motion.div>

            <motion.div className="relative group w-full sm:w-auto">
              <Link href="#contact" className="block w-full sm:w-auto">
                <Button
                  className="relative w-full sm:w-auto"
                  variant="default"
                  size="lg"
                >
                  {t("hero.support")}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="w-12 sm:w-16 md:w-24 h-[2px] mt-2 sm:mt-4 bg-[var(--foreground)] origin-center"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
