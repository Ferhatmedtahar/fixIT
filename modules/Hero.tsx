"use client";
import { Button } from "@/common/Button";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const lampY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const leftImageY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const titleVariants = {
    hidden: { y: 130, opacity: 0 },
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
    hidden: { y: 130, opacity: 0 },
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

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.5,
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

  const floatingAnimation = {
    y: [0, 10, 0],
    x: [0, 10, 0],
    rotate: [0, 0.5, 0],
    scale: [1, 1.02, 1],
    transition: {
      duration: 20,
      repeat: Infinity,
    },
  };

  // Split text into individual characters for stagger animation
  const titleText = "Fix";
  const titleChars = titleText.split("");

  return (
    <section id="hero" className="relative" ref={heroRef}>
      <div className="min-h-screen w-full bg-[var(--background)]  overflow-hidden flex items-center justify-center">
        {/* Enhanced Gradient Overlay with Animated Blobs - Theme Aware */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={floatingAnimation}
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.09) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.09) 1px, transparent 1px),
              radial-gradient(circle 300px at 20% 20%, rgba(59, 130, 246, 0.15), transparent),
              radial-gradient(circle 500px at 80% 80%, rgba(59, 130, 246, 0.15), transparent),
              radial-gradient(circle 400px at 100% 40%, rgba(124, 58, 237, 0.05), transparent)
            `,
            backgroundSize:
              "60px 60px, 60px 60px, 100% 100%, 100% 100%, 100% 100%",
          }}
        />

        {/* Dark mode overlay for grid pattern */}
        {/* <div className="absolute inset-0 z-0 dark:bg-black/20"></div> */}

        {/* Left Image - Eggplant */}
        <motion.div
          style={{ y: leftImageY }}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="-rotate-12 filter drop-shadow-lg select-none absolute -left-18 hidden md:block lg:bottom-0 lg:-translate-x-[5%] z-0"
        >
          <Image
            src="/images/Eggplant.png"
            alt="computer-repair"
            width={300}
            height={300}
            loading="eager"
            className="md:h-[400px] lg:h-[400px] xl:h-auto"
          />
        </motion.div>

        {/* Right Image - USB */}
        <motion.div
          style={{ y: lampY }}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="filter drop-shadow-md select-none absolute right-0 md:right-1 lg:right-8 top-20 lg:top-[15%] z-0"
        >
          <Image
            src="/images/usb.png"
            alt="tech-tools"
            width={80}
            height={80}
            loading="eager"
          />
        </motion.div>

        <div className="flex flex-col items-center gap-4 z-10 relative px-4 text-center max-w-4xl mx-auto w-full mb-32">
          <motion.h1
            className="text-primary text-7xl md:text-[13vw] lg:text-[10vw] font-bold"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="inline-block">
              {titleChars.map((char, i) => (
                <motion.span
                  key={i}
                  variants={charVariants}
                  className=" inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
            <motion.span variants={charVariants} className=" inline-block">
              IT
            </motion.span>
          </motion.h1>

          <div className="flex flex-col items-center gap-2 -mt-4">
            <motion.p
              className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl font-inter text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary/80  font-semibold tracking-tight"
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
            >
              {"YOUR TECH PROBLEMS, OUR SOLUTIONS".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={charVariants}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>

            <motion.p
              className="max-w-sm md:max-w-md lg:max-w-3xl text-primary/80  font-inter text-base md:text-lg lg:text-xl font-medium text-center leading-relaxed"
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
            >
              Professional computer repair and IT support services you can trust
            </motion.p>
          </div>

          <motion.div
            className="flex items-center gap-4"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div>
              <Button variant="default" size={"lg"}>
                <Link href="#services">Our Services</Link>
              </Button>
            </motion.div>

            <motion.div>
              <Button variant="outline" size={"lg"}>
                <Link href="#contact">Get Support</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Accent - Theme Aware */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary- via-secondary-400 to-primary-400 dark:from-primary-600 dark:via-secondary-500 dark:to-primary-500 opacity-60"></div> */}
      </div>
    </section>
  );
}

export default Hero;
