"use client";
import { Card } from "@/common/ui/card"; // Adjust import path as needed
import Seperator from "@/common/ui/Seperator";
import { useLanguage } from "@/context/language-provider";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
      duration: 0.61,
      delay: 0.3,
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

const Services = () => {
  const { t, dir } = useLanguage();

  // Service data using translation keys
  const servicesData = [
    {
      id: 1,
      titleKey: "services.software.title",
      descriptionKey: "services.software.description",
    },
    {
      id: 2,
      titleKey: "services.os.title",
      descriptionKey: "services.os.description",
    },
    {
      id: 3,
      titleKey: "services.performance.title",
      descriptionKey: "services.performance.description",
    },
    {
      id: 4,
      titleKey: "services.virus.title",
      descriptionKey: "services.virus.description",
    },
  ];

  return (
    <div className="relative" dir={dir}>
      <section id="services" className="">
        <div className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={headerVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-8">
                {t("services.title")}
              </h2>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.div className="text-center" variants={itemVariants}>
                <p className="text-xl text-[var(--foreground)]/90 leading-relaxed">
                  {t("services.subtitle")}
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold text-[var(--foreground)]/90 mb-6 text-center">
                  {t("services.coreTitle")}
                </h3>

                <motion.div
                  className="grid gap-4 md:grid-cols-2"
                  variants={containerVariants}
                >
                  {servicesData.map((service, index) => (
                    <motion.div
                      key={service.id}
                      variants={itemVariants}
                      custom={index}
                    >
                      <Card className="p-6 h-full w-full">
                        <div
                          className={`flex items-start space-x-3 ${
                            dir === "rtl" ? "space-x-reverse" : ""
                          }`}
                        >
                          <div className="w-2 h-2 bg-[var(--primary)]  mt-3 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold mb-2">
                              {t(service.titleKey)}
                            </h4>
                            <p className="text-[var(--foreground)]/90">
                              {t(service.descriptionKey)}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="text-center p-6 w-full">
                  <p className="text-lg text-[var(--foreground)] leading-relaxed mb-4">
                    {t("services.description")}
                  </p>
                  <p className="text-lg font-medium text-[var(--primary)]">
                    {t("services.callToAction")}
                  </p>
                </Card>
              </motion.div>
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

export default Services;
