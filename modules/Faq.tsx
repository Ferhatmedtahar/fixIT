"use client";
import { Card } from "@/common/card"; // Adjust import path as needed
import { faqData } from "@/utils/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function Faq() {
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

  const [openIndex, setOpenIndex] = useState<number | null>(null); // initially no item is open

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-8 px-6 bg-background">
      <section id="faq" className=" mx-auto max-w-6xl px-4 ">
        <div className="space-y-6">
          <h2 className="text-center text-4xl md:text-6xl pb-4 font-bold bg-gradient-to-r from-primary via-primary/70 to-primary bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>

          <Card className="divide-y divide-border px-4 hover:translate-0 shadow-none">
            {faqData.map((item, index) => (
              <div key={index} className="py-2">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full py-4 text-left flex items-start justify-between gap-4 hover:bg-secondary/40 transition-colors duration-200 focus:outline-none focus:bg-secondary/40 rounded-lg px-2"
                >
                  <span className="text-[15px] leading-6 font-medium text-primary flex-1 hover:no-underline">
                    {item.question}
                  </span>
                  <ChevronDownIcon
                    className={`w-4 h-4 text-primary/70 shrink-0 mt-0.5 transition-transform duration-300 ease-in-out ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
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
                      className={`text-muted-foreground leading-relaxed transform transition-transform duration-300 ease-in-out ${
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
    </div>
  );
}

export default Faq;
