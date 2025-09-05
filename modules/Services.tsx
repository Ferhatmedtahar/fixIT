"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mainText = new SplitText(".main-text", {
      type: "words, lines",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
      },
    });

    tl.from(".intro-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    })
      .from(
        mainText.lines,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.5"
      )
      .from(
        ".service-item",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.3"
      )
      .from(
        ".closing-text",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.2"
      );
  }, []);

  return (
    <div className="relative">
      <section id="services" className="min-h-screen ">
        <div ref={containerRef} className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Computer Support Made Simple
              </h2>
            </div>

            <div className="space-y-8">
              <div className="intro-text text-center">
                <p className="text-xl text-gray-700 leading-relaxed">
                  We provide quick, affordable computer support for students and
                  everyday users alike.
                </p>
              </div>

              <div className="main-text">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  Our Core Services
                </h3>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="service-item bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Software Troubleshooting
                        </h4>
                        <p className="text-gray-600">
                          Diagnosing and fixing errors so your system runs
                          smoothly
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="service-item bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Operating System Installation
                        </h4>
                        <p className="text-gray-600">
                          Clean installs or upgrades for Windows, Linux, and
                          more
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="service-item bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Performance Optimization
                        </h4>
                        <p className="text-gray-600">
                          Speeding up slow machines and improving overall
                          stability
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="service-item bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Virus & Malware Cleanup
                        </h4>
                        <p className="text-gray-600">
                          Removing harmful files and keeping your data safe
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="closing-text text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Whether you need a simple fix or a full system refresh, we
                  handle these services and much more right here on campus.
                </p>
                <p className="text-lg font-medium text-blue-700">
                  If you're a student experiencing technical issues, reach out
                  and we'll get you back up and running fast.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 opacity-60"></div>
      </section>
    </div>
  );
};

export default Services;
