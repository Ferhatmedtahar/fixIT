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
      <div className="relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-[var(--background)]">
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
            className={`absolute ${pos} w-32 h-32 border-[var(--foreground)] opacity-20 z-[2]`}
          />
        ))}

        {/* ===== 4. MAIN CONTENT ===== */}
        <div className="relative z-[5] flex flex-col items-center w-full max-w-6xl gap-8 px-4 mx-auto text-center">
          {/* Top line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="w-24 h-[2px] bg-[var(--foreground)] origin-center"
          />

          {/* Title */}
          <motion.h1
            key={language}
            className="text-[var(--foreground)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl md:text-nowrap font-black tracking-tighter uppercase leading-none"
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
            className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-[var(--foreground)] to-transparent opacity-30"
          />

          {/* Subtitle + Description */}
          <div className="flex flex-col items-center gap-6 max-w-3xl">
            <motion.p
              key={`subtitle-${language}`}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[var(--foreground)] font-bold tracking-[0.05em] uppercase"
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
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
            </motion.p>

            <motion.p
              key={`description-${language}`}
              className="max-w-2xl text-[var(--foreground)]/70 text-base md:text-lg lg:text-xl font-medium text-center leading-relaxed"
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
            >
              {t("hero.description")}
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div
            className={`flex items-center gap-6 mt-4 ${
              dir === "rtl" ? "flex-row-reverse" : ""
            }`}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Button 1 */}
            <motion.div
              // whileHover={{ scale: 1.01 }}
              // whileTap={{ scale: 0.99 }}
              className="relative group"
            >
              {/* <div className="absolute inset-0 bg-[var(--foreground)]/70 translate-x-1 translate-y-1 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5" /> */}
              <Link href="#services">
                <Button className="relative" variant="secondary" size="lg">
                  {t("hero.services")}
                </Button>
              </Link>
            </motion.div>

            {/* Button 2 */}
            <motion.div
              // whileHover={{ scale: 1.01 }}
              // whileTap={{ scale: 0.99 }}
              className="relative group"
            >
              {/* <div className="absolute inset-0 bg-[var(--foreground)]/20 translate-x-1 translate-y-1 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5" /> */}
              <Link href="#contact">
                <Button className="relative" variant="default" size="lg">
                  {t("hero.support")}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Bottom line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="w-24 h-[2px] mt-4 bg-[var(--foreground)] origin-center"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
// "use client";
// import { useLanguage } from "@/context/language-provider";
// import { motion, useScroll, useTransform } from "motion/react";
// import Link from "next/link";
// import { useRef } from "react";

// function Hero() {
//   const heroRef = useRef<HTMLElement>(null);
//   const { t, language, dir } = useLanguage();

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const lampY = useTransform(scrollYProgress, [0, 1], [0, 200]);
//   const leftImageY = useTransform(scrollYProgress, [0, 1], [0, -200]);

//   // Unified title variants for all languages
//   const titleVariants = {
//     hidden: { y: 80, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 1.5,
//         staggerChildren: 0.05,
//       },
//     },
//   };

//   const charVariants = {
//     hidden: { y: 80, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 1.5,
//       },
//     },
//   };

//   const subtitleVariants = {
//     hidden: { y: 100, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 1.5,
//         delay: 0.8,
//         staggerChildren: 0.05,
//       },
//     },
//   };

//   const paragraphVariants = {
//     hidden: { y: 100, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 1.5,
//         delay: 1,
//       },
//     },
//   };

//   const buttonVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 1.2,
//         delay: 1.8,
//       },
//     },
//   };

//   const lineVariants = {
//     hidden: { scaleX: 0 },
//     visible: {
//       scaleX: 1,
//       transition: {
//         duration: 1.5,
//         delay: 0.5,
//       },
//     },
//   };

//   // Split text into individual characters for stagger animation (only for non-Arabic)
//   const titleText = t("hero.title");
//   const titleChars = titleText.split("");
//   const isArabic = language === "ar";

//   return (
//     <section id="hero" className="relative" ref={heroRef} dir={dir}>
//       <div className="min-h-screen w-full bg-[var(--background)] overflow-hidden flex items-center justify-center relative">
//         {/* Sharp geometric grid background */}
//         <div
//           className="absolute inset-0 z-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, var(--foreground) 1px, transparent 1px),
//               linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)
//             `,
//             backgroundSize: "80px 80px",
//           }}
//         />

//         {/* Diagonal accent lines */}
//         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//           <motion.div
//             initial={{ x: "-100%" }}
//             animate={{ x: "100%" }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--foreground)] to-transparent opacity-10"
//             style={{ transform: "rotate(-15deg)", width: "150%" }}
//           />
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: "-100%" }}
//             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//             className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--foreground)] to-transparent opacity-10"
//             style={{ transform: "rotate(-15deg)", width: "150%" }}
//           />
//         </div>

//         {/* Corner decorative elements */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//           className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[var(--foreground)] opacity-20"
//         />
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//           className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-[var(--foreground)] opacity-20"
//         />
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//           className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-[var(--foreground)] opacity-20"
//         />
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//           className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[var(--foreground)] opacity-20"
//         />

//         <div className="flex flex-col items-center gap-8 z-10 relative px-4 text-center max-w-6xl mx-auto w-full">
//           {/* Top accent line */}
//           <motion.div
//             variants={lineVariants}
//             initial="hidden"
//             animate="visible"
//             className="h-[2px] w-24 bg-[var(--foreground)] origin-center"
//           />

//           {/* Main title */}
//           <motion.h1
//             key={language}
//             className="text-[var(--foreground)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none"
//             variants={titleVariants}
//             initial="hidden"
//             animate="visible"
//             style={{
//               textTransform: "uppercase",
//               letterSpacing: "-0.05em",
//             }}
//           >
//             {isArabic ? (
//               <motion.span variants={charVariants}>{titleText}</motion.span>
//             ) : (
//               <motion.span className="inline-block">
//                 {titleChars.map((char, i) => (
//                   <motion.span
//                     key={i}
//                     variants={charVariants}
//                     className="inline-block"
//                   >
//                     {char === " " ? "\u00A0" : char}
//                   </motion.span>
//                 ))}
//               </motion.span>
//             )}
//           </motion.h1>

//           {/* Decorative line under title */}
//           <motion.div
//             variants={lineVariants}
//             initial="hidden"
//             animate="visible"
//             className="h-[1px] w-full max-w-2xl bg-gradient-to-r from-transparent via-[var(--foreground)] to-transparent opacity-30"
//           />

//           <div className="flex flex-col items-center gap-6 max-w-3xl">
//             {/* Subtitle */}
//             <motion.p
//               key={`subtitle-${language}`}
//               className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[var(--foreground)] font-bold tracking-tight uppercase"
//               variants={subtitleVariants}
//               initial="hidden"
//               animate="visible"
//               style={{
//                 letterSpacing: "0.05em",
//               }}
//             >
//               {t("hero.subtitle")
//                 .split(" ")
//                 .map((word, i) => (
//                   <motion.span
//                     key={i}
//                     variants={charVariants}
//                     className="inline-block mr-3"
//                   >
//                     {word}
//                   </motion.span>
//                 ))}
//             </motion.p>

//             {/* Description */}
//             <motion.p
//               key={`description-${language}`}
//               className="max-w-2xl text-[var(--foreground)]/70 text-base md:text-lg lg:text-xl font-medium text-center leading-relaxed"
//               variants={paragraphVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               {t("hero.description")}
//             </motion.p>
//           </div>

//           {/* CTA Buttons */}
//           <motion.div
//             className={`flex items-center gap-6 mt-4 ${
//               dir === "rtl" ? "flex-row-reverse" : ""
//             }`}
//             variants={buttonVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="relative group"
//             >
//               <div className="absolute inset-0 bg-[var(--foreground)] translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
//               <Link href="#services">
//                 <button className="relative px-8 py-4 bg-[var(--background)] border-2 border-[var(--foreground)] text-[var(--foreground)] font-bold text-lg uppercase tracking-wider transition-all hover:bg-[var(--foreground)] hover:text-[var(--background)]">
//                   {t("hero.services")}
//                 </button>
//               </Link>
//             </motion.div>

//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="relative group"
//             >
//               <div className="absolute inset-0 bg-[var(--foreground)]/20 translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
//               <Link href="#contact">
//                 <button className="relative px-8 py-4 bg-[var(--background)] border-2 border-[var(--foreground)] text-[var(--foreground)] font-bold text-lg uppercase tracking-wider transition-all hover:border-[var(--foreground)]/50">
//                   {t("hero.support")}
//                 </button>
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Bottom accent line */}
//           <motion.div
//             variants={lineVariants}
//             initial="hidden"
//             animate="visible"
//             className="h-[2px] w-24 bg-[var(--foreground)] origin-center mt-4"
//           />
//         </div>

//         {/* Animated corner accent */}
//         <motion.div
//           animate={{
//             scale: [1, 1.1, 1],
//             opacity: [0.1, 0.2, 0.1],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[var(--foreground)] pointer-events-none"
//           style={{ transform: "rotate(45deg)" }}
//         />
//       </div>
//     </section>
//   );
// }

// export default Hero;
// // "use client";
// // import { Button } from "@/common/Button";
// // import { useLanguage } from "@/context/language-provider";
// // import { motion, useScroll, useTransform } from "motion/react";
// // import Link from "next/link";
// // import { useRef } from "react";

// // function Hero() {
// //   const heroRef = useRef<HTMLElement>(null);
// //   const { t, language, dir } = useLanguage();

// //   const { scrollYProgress } = useScroll({
// //     target: heroRef,
// //     offset: ["start start", "end start"],
// //   });

// //   const lampY = useTransform(scrollYProgress, [0, 1], [0, 200]);
// //   const leftImageY = useTransform(scrollYProgress, [0, 1], [0, -200]);

// //   // Unified title variants for all languages
// //   const titleVariants = {
// //     hidden: { y: 80, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: {
// //         duration: 1.5,
// //         staggerChildren: 0.05,
// //       },
// //     },
// //   };

// //   const charVariants = {
// //     hidden: { y: 80, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: {
// //         duration: 1.5,
// //       },
// //     },
// //   };

// //   const subtitleVariants = {
// //     hidden: { y: 100, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: {
// //         duration: 1.5,
// //         delay: 0.8,
// //         staggerChildren: 0.05,
// //       },
// //     },
// //   };

// //   const paragraphVariants = {
// //     hidden: { y: 100, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: {
// //         duration: 1.5,
// //         delay: 1,
// //       },
// //     },
// //   };

// //   const imageVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         duration: 1.2,
// //         delay: 0.5,
// //       },
// //     },
// //   };

// //   const buttonVariants = {
// //     hidden: { y: 50, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: {
// //         duration: 1.2,
// //         delay: 1.8,
// //       },
// //     },
// //   };

// //   const floatingAnimation = {
// //     y: [0, 10, 0],
// //     x: [0, 10, 0],
// //     rotate: [0, 0.5, 0],
// //     scale: [1, 1.02, 1],
// //     transition: {
// //       duration: 20,
// //       repeat: Infinity,
// //     },
// //   };

// //   // Split text into individual characters for stagger animation (only for non-Arabic)
// //   const titleText = t("hero.title");
// //   const titleChars = titleText.split("");
// //   const isArabic = language === "ar";

// //   return (
// //     <section id="hero" className="relative" ref={heroRef} dir={dir}>
// //       <div className="min-h-screen w-full bg-[var(--background)] overflow-hidden flex items-center justify-center">
// //         <motion.div
// //           className="absolute inset-0 z-0"
// //           animate={floatingAnimation}
// //           style={{
// //             backgroundImage: `
// //               linear-gradient(to right, rgba(59, 130, 246, 0.09) 1px, transparent 1px),
// //               linear-gradient(to bottom, rgba(59, 130, 246, 0.09) 1px, transparent 1px),
// //               radial-gradient(circle 300px at 20% 20%, rgba(59, 130, 246, 0.15), transparent),
// //               radial-gradient(circle 500px at 80% 80%, rgba(59, 130, 246, 0.15), transparent),
// //               radial-gradient(circle 400px at 100% 40%, rgba(124, 58, 237, 0.05), transparent)
// //             `,
// //             backgroundSize:
// //               "60px 60px, 60px 60px, 100% 100%, 100% 100%, 100% 100%",
// //           }}
// //         />
// //         {/*
// //         <motion.div
// //           style={{ y: leftImageY }}
// //           variants={imageVariants}
// //           initial="hidden"
// //           animate="visible"
// //           className={`-rotate-12 filter drop-shadow-lg select-none absolute hidden md:block lg:bottom-0 z-0 ${
// //             dir === "rtl"
// //               ? "-right-18 lg:-translate-x-[-5%]"
// //               : "-left-18 lg:-translate-x-[5%]"
// //           }`}
// //         >
// //           <Image
// //             src="/images/Eggplant.png"
// //             alt="computer-repair"
// //             width={300}
// //             height={300}
// //             loading="eager"
// //             className="md:h-[400px] lg:h-[400px] xl:h-auto"
// //           />
// //         </motion.div> */}
// //         {/*
// //         <motion.div
// //           style={{ y: lampY }}
// //           variants={imageVariants}
// //           initial="hidden"
// //           animate="visible"
// //           className={`filter drop-shadow-md select-none absolute top-20 lg:top-[15%] z-0 ${
// //             dir === "rtl"
// //               ? "left-0 md:left-1 lg:left-8"
// //               : "right-0 md:right-1 lg:right-8"
// //           }`}
// //         >
// //           <Image
// //             src="/images/usb.png"
// //             alt="tech-tools"
// //             width={80}
// //             height={80}
// //             loading="eager"
// //           />
// //         </motion.div> */}

// //         <div className="flex flex-col items-center gap-4 z-10 relative px-4 text-center max-w-4xl mx-auto w-full mb-32">
// //           <motion.h1
// //             key={language}
// //             className="text-[var(--primary)] text-7xl md:text-[13vw] lg:text-[10vw]"
// //             variants={titleVariants}
// //             initial="hidden"
// //             animate="visible"
// //           >
// //             {isArabic ? (
// //               <motion.span variants={charVariants}>{titleText}</motion.span>
// //             ) : (
// //               <motion.span className="inline-block">
// //                 {titleChars.map((char, i) => (
// //                   <motion.span
// //                     key={i}
// //                     variants={charVariants}
// //                     className="inline-block"
// //                   >
// //                     {char}
// //                   </motion.span>
// //                 ))}
// //               </motion.span>
// //             )}
// //           </motion.h1>

// //           <div className="flex flex-col items-center gap-2 -mt-4">
// //             <motion.p
// //               key={`subtitle-${language}`} // Add key for subtitle too
// //               className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary/80 font-semibold tracking-tight"
// //               variants={subtitleVariants}
// //               initial="hidden"
// //               animate="visible"
// //             >
// //               {t("hero.subtitle")
// //                 .split(" ")
// //                 .map((word, i) => (
// //                   <motion.span
// //                     key={i}
// //                     variants={charVariants}
// //                     className="inline-block mr-2"
// //                   >
// //                     {word}
// //                   </motion.span>
// //                 ))}
// //             </motion.p>

// //             <motion.p
// //               key={`description-${language}`} // Add key for description
// //               className="max-w-sm md:max-w-md lg:max-w-3xl text-primary/80 text-base md:text-lg lg:text-xl font-medium text-center leading-relaxed"
// //               variants={paragraphVariants}
// //               initial="hidden"
// //               animate="visible"
// //             >
// //               {t("hero.description")}
// //             </motion.p>
// //           </div>

// //           <motion.div
// //             className={`flex items-center gap-4 ${
// //               dir === "rtl" ? "flex-row-reverse" : ""
// //             }`}
// //             variants={buttonVariants}
// //             initial="hidden"
// //             animate="visible"
// //           >
// //             <motion.div>
// //               <Button variant="default" size={"lg"}>
// //                 <Link href="#services">{t("hero.services")}</Link>
// //               </Button>
// //             </motion.div>

// //             <motion.div>
// //               <Button variant="outline" size={"lg"}>
// //                 <Link href="#contact">{t("hero.support")}</Link>
// //               </Button>
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Hero;
