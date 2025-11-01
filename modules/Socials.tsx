"use client";
import { Card } from "@/common/ui/card";
import { useLanguage } from "@/context/language-provider";
import { SOCIAL_INFO } from "@/utils/constants";
import { motion } from "motion/react";
import Image from "next/image";
import GmailLogoDark from "../public/gmail-dark.svg";
import GmailLogo from "../public/gmail.svg";

import Seperator from "@/common/ui/Seperator";
import { useTheme } from "next-themes";
import InstagramLogoDark from "../public/instagram-dark.svg";
import InstagramLogo from "../public/instagram.svg";
import LinkedInLogoDark from "../public/linkedin-dark.svg";
import LinkedInLogo from "../public/linkedin.svg";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const headerVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const Socials = () => {
  const { t, dir } = useLanguage();
  const { theme } = useTheme();
  console.log(theme);
  const socialsData = [
    {
      id: 1,
      name: "Instagram",
      icon: theme === "light" ? InstagramLogo : InstagramLogoDark,
      href: SOCIAL_INFO.instagram,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: theme === "light" ? LinkedInLogo : LinkedInLogoDark,
      href: SOCIAL_INFO.linkedin,
      color: "from-blue-600 to-blue-400",
    },
    {
      id: 3,
      name: "Email",
      icon: theme === "light" ? GmailLogo : GmailLogoDark,
      href: `mailto:${SOCIAL_INFO.email}`,
      color: "from-red-500 to-orange-500",
    },
  ];

  return (
    <div className="relative" dir={dir}>
      <section id="socials" className="">
        <div className="py-16 px-6">
          <div className="max-w-6xl mx-auto flex flex-col gap-12">
            <motion.div
              className="text-center "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={headerVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                {t("socials.title")}
              </h2>
              <p className="text-xl text-[var(--foreground)]/80">
                {t("socials.subtitle")}
              </p>
            </motion.div>

            <motion.div
              className="grid gap-6 md:grid-cols-3 max-w-6xl w-full mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {socialsData.map((social) => {
                return (
                  <motion.a
                    key={social.id}
                    href={social.href}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel={
                      social.name !== "Email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    variants={itemVariants}
                    className="block"
                  >
                    <Card className=" text-[var(--foreground)] p-14 h-full w-full flex flex-col items-center justify-center gap-4">
                      <Image
                        className="text-[var(--foreground)]"
                        src={social.icon}
                        alt={social.name}
                        width={50}
                        height={50}
                      />
                      {/* <IconComponent className="w-8 h-8 text-white" /> */}

                      <h3 className="text-xl font-bold text-[var(--foreground)]">
                        {social.name}
                      </h3>
                    </Card>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              className="text-center "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
            >
              <p className="text-lg text-[var(--foreground)]/80">
                {t("socials.callToAction")}
              </p>
            </motion.div>
          </div>
        </div>

        {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 to-primary opacity-60"></div> */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--foreground)]/90 to-[var(--foreground)] opacity-20"></div> */}
        <Seperator />
      </section>
    </div>
  );
};

export default Socials;
