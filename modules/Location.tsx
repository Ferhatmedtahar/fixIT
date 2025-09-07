"use client";
import { Button } from "@/common/Button";
import { Card } from "@/common/card";
import { useLanguage } from "@/context/language-provider";

function Location() {
  const { t, dir } = useLanguage();

  return (
    <div className="relative" dir={dir}>
      <section id="about" className="py-20 px-6 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              {t("location.title")}
            </h2>
            <p className="text-lg text-[var(--foreground)]/90">
              {t("location.description")}
            </p>
          </div>

          <div
            className={`grid lg:grid-cols-2 gap-6 items-start ${
              dir === "rtl" ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            <div className="space-y-4">
              <Card className="p-6 w-full">
                <h3 className="text-xl font-semibold text-[var(--foreground)]/95 mb-4">
                  {t("location.contact")}
                </h3>
                <div className="space-y-4">
                  <div
                    className={`flex items-start space-x-3 ${
                      dir === "rtl" ? "space-x-reverse" : ""
                    }`}
                  >
                    <div className="w-5 h-5 text-primary mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--foreground)]/90">
                        {t("location.address")}
                      </p>
                      <p className="text-[var(--foreground)]/90">
                        {t("location.addressValue")}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex items-start space-x-3 ${
                      dir === "rtl" ? "space-x-reverse" : ""
                    }`}
                  >
                    <div className="w-5 h-5 text-primary mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--foreground)]/90">
                        {t("location.phone")}
                      </p>
                      <p className="text-[var(--foreground)]/90">
                        {t("location.phoneValue")}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex items-start space-x-3 ${
                      dir === "rtl" ? "space-x-reverse" : ""
                    }`}
                  >
                    <div className="w-5 h-5 text-primary mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--foreground)]/90">
                        {t("location.email")}
                      </p>
                      <p className="text-[var(--foreground)]/90">
                        {t("location.emailValue")}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 w-full">
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                  {t("location.hours")}
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[var(--foreground)]/90">
                      {t("location.weekdays")}
                    </span>
                    <span className="font-medium text-[var(--foreground)]">
                      {t("location.weekdaysHours")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--foreground)]/90">
                      {t("location.weekend")}
                    </span>
                    <span className="font-medium text-[var(--foreground)]">
                      {t("location.weekendHours")}
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="overflow-hidden">
              <div className="h-96 relative">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8184953619143!2d2.825040494367871!3d33.7747441196735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1262e10076c0cb67%3A0x41357958e95a346d!2z2KzYp9mF2LnYqSDYudmF2KfYsSDYq9mE2YrYrNmKLdin2YTZgti32Kkg2KfZhNis2KfZhdi52Yog2LHZgtmFIDAy!5e1!3m2!1sen!2sdz!4v1757096223545!5m2!1sen!2sdz`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Laghouat Location Map"
                ></iframe>
              </div>

              <div className="p-4 border border-t-2 text-[var(--foreground)]">
                <p className="text-sm text-[var(--foreground)]/95 text-center">
                  {t("location.mapDescription")}
                </p>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="p-8 text-center bg-primary/50 w-full">
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                {t("location.help")}
              </h3>
              <p className="text-[var(--foreground)]/90 mb-4">
                {t("location.helpDescription")}
              </p>
              <Button className="inline-flex items-center">
                <svg
                  className={`w-5 h-5 ${dir === "rtl" ? "ml-2" : "mr-2"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d={
                      dir === "rtl"
                        ? "M12.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 9H5a7 7 0 00-7 7v2a1 1 0 01-2 0v-2a5 5 0 015-5h9.586l-2.293-2.293a1 1 0 010-1.414z"
                        : "M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    }
                    clipRule="evenodd"
                  />
                </svg>
                {t("location.directions")}
              </Button>
            </Card>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 to-primary opacity-60"></div>
      </section>
    </div>
  );
}

export default Location; // import { Button } from "@/common/Button"; // Adjust import path as needed
// import { Card } from "@/common/card"; // Adjust import path as needed

// function Location() {
//   return (
//     <div className="relative">
//       <section id="about" className=" py-20 px-6 bg-[var(--background)]">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
//               Our Location
//             </h2>
//             <p className="text-lg text-[var(--foreground)]/90">
//               We're located at Ammar Telidji University in Laghouat, Algeria -
//               ready to help with your computer support needs
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-6 items-start">
//             <div className="space-y-4">
//               <Card className="p-6 w-full">
//                 <h3 className="text-xl font-semibold text-[var(--foreground)]/95 mb-4">
//                   Contact Information
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="flex items-start space-x-3">
//                     <div className="w-5 h-5 text-primary mt-1">
//                       <svg fill="currentColor" viewBox="0 0 20 20">
//                         <path
//                           fillRule="evenodd"
//                           d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="font-medium text-[var(--foreground)]/90">
//                         Address
//                       </p>
//                       <p className="text-[var(--foreground)]/90">
//                         Laghouat, Algeria
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3">
//                     <div className="w-5 h-5 text-primary mt-1">
//                       <svg fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="font-medium text-[var(--foreground)]/90">
//                         Phone
//                       </p>
//                       <p className="text-[var(--foreground)]/90">
//                         Available on campus
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3">
//                     <div className="w-5 h-5 text-primary mt-1">
//                       <svg fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                         <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="font-medium text-[var(--foreground)]/90">
//                         Email
//                       </p>
//                       <p className="text-[var(--foreground)]/90">
//                         contact@support.dz
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </Card>

//               <Card className="p-6 w-full">
//                 <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4 ">
//                   Service Hours
//                 </h3>
//                 <div className="space-y-2">
//                   <div className="flex justify-between">
//                     <span className="text-[var(--foreground)]/90">
//                       Sunday - Thursday
//                     </span>
//                     <span className="font-medium text-[var(--foreground)]">
//                       8:00 AM - 5:00 PM
//                     </span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-[var(--foreground)]/90">
//                       Friday - Saturday
//                     </span>
//                     <span className="font-medium text-[var(--foreground)]">
//                       By Appointment
//                     </span>
//                   </div>
//                 </div>
//               </Card>
//             </div>

//             <Card className="overflow-hidden ">
//               <div className="h-96 relative">
//                 <iframe
//                   src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8184953619143!2d2.825040494367871!3d33.7747441196735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1262e10076c0cb67%3A0x41357958e95a346d!2z2KzYp9mF2LnYqSDYudmF2KfYsSDYq9mE2YrYrNmKLdin2YTZgti32Kgg2KfZhNis2KfZhdi52Yog2LHZgtmFIDAy!5e1!3m2!1sen!2sdz!4v1757096223545!5m2!1sen!2sdz`}
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Laghouat Location Map"
//                 ></iframe>
//               </div>

//               <div className="p-4 border border-t-2 text-[var(--foreground)]">
//                 <p className="text-sm text-[var(--foreground)]/95 text-center">
//                   📍 Laghouat, Algeria - Click the map to get directions
//                 </p>
//               </div>
//             </Card>
//           </div>

//           <div className="mt-12 text-center">
//             <Card className="p-8 text-center bg-primary/50 w-full">
//               <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
//                 Need Help? We're Here for You
//               </h3>
//               <p className="text-[var(--foreground)]/90 mb-4">
//                 Drop by our location or reach out to us for quick computer
//                 support
//               </p>
//               <Button className="inline-flex items-center">
//                 <svg
//                   className="w-5 h-5 mr-2"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 Get Directions
//               </Button>
//             </Card>
//           </div>
//         </div>{" "}
//         <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 to-primary opacity-60"></div>
//       </section>{" "}
//     </div>
//   );
// }

// export default Location;
