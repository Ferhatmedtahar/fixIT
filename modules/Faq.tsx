"use client";
import { Card } from "@/common/ui/card";
import { useLanguage } from "@/context/language-provider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function Faq() {
  const { t, dir } = useLanguage();

  // Create FAQ data using translations
  const faqData = [
    {
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      question: t("faq.q4"),
      answer: t("faq.a4"),
    },
    {
      question: t("faq.q5"),
      answer: t("faq.a5"),
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#team",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
    tl.from("#faq", {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" relative  " dir={dir}>
      <section id="faq" className="mx-auto py-16 px-6  max-w-6xl w-full  ">
        <div className="space-y-6 w-full flex flex-col items-center  gap-4">
          {/* <h2 className="text-center text-4xl md:text-6xl  pb-4 font-bold bg-gradient-to-r from-primary via-primary/70 to-primary bg-clip-text text-transparent mb-4">
            {t("faq.title")}
          </h2> */}

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            {t("faq.title")}
          </h2>
          <Card className="divide-y divide-border px-4 hover:translate-0 shadow-none">
            {faqData.map((item, index) => (
              <div key={index} className="py-2">
                <button
                  onClick={() => toggleQuestion(index)}
                  className={`w-full py-4 text-${
                    dir === "rtl" ? "right" : "left"
                  } flex items-start ${
                    dir === "rtl" ? "flex-row-reverse" : ""
                  } justify-between gap-4 hover:bg-[var(--secondary)/10] transition-colors duration-200 focus:outline-none focus:bg-[var(--secondary)/20] rounded-lg px-2`}
                >
                  <span className="text-[15px] leading-6 font-medium text-[var(--primary)] flex-1 hover:no-underline">
                    {item.question}
                  </span>
                  <ChevronDownIcon
                    className={`w-4 h-4 text-[var(--primary)]/70 shrink-0 mt-0.5 transition-transform duration-300 ease-in-out ${
                      dir === "rtl" ? "scale-x-[-1]" : ""
                    } ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-4 pt-0 px-2">
                    <div
                      className={`text-[var(--foreground)]/85 leading-relaxed transform transition-transform duration-300 ease-in-out text-${
                        dir === "rtl" ? "right" : "left"
                      } ${
                        openIndex === index ? "translate-y-0" : "-translate-y-2"
                      }`}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </section>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 to-primary opacity-60"></div>
    </div>
  );
}

export default Faq;
