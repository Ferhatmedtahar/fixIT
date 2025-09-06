"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NAVBAR_ITEMS = [
  { id: "home", title: "Home" },
  { id: "services", title: "Services" },
  { id: "contact", title: "Contact" },
];

// FixIT Contact Info
const fixitInfo = {
  contact: {
    email: "email@gmail.com",
    phone: "+213 796 97 33 17",
  },
};

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".navbar",
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 border-b border-gray-300  ">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            {/* <Image
              src="/logo.png"
              className="w-12 h-12 rounded-full"
              alt="Logo"
              width={36}
              height={36}
            />{" "} */}
            <span className="text-2xl font-bold text-primary font-inter">
              Fix<span className="">IT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAVBAR_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="text-primary/90 hover:text-primary-400 font-medium transition-colors duration-300 relative group"
              >
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={`tel:${fixitInfo.contact.phone}`}
              className="flex items-center gap-2 text-primary  hover:text-secondary-400 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">
                {fixitInfo.contact.phone}
              </span>
            </Link>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 group"
          >
            <div
              className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-neutral-900/95 backdrop-blur-md z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      >
        <div
          className="flex flex-col justify-center items-center h-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col items-center space-y-8">
            {NAVBAR_ITEMS.map((item, index) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMobileMenu}
                className="text-white hover:text-primary-400 text-2xl font-semibold transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="mt-12 flex flex-col items-center gap-4">
            <Link
              href={`tel:${fixitInfo.contact.phone}`}
              onClick={closeMobileMenu}
              className="flex items-center gap-3 text-neutral-300 hover:text-secondary-400 transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg font-medium">
                {fixitInfo.contact.phone}
              </span>
            </Link>
            <Link
              href={`mailto:${fixitInfo.contact.email}`}
              onClick={closeMobileMenu}
              className="flex items-center gap-3 text-neutral-300 hover:text-primary-400 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg font-medium">
                {fixitInfo.contact.email}
              </span>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="text-neutral-400 text-sm font-medium">
              Professional Computer Repair Services
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
