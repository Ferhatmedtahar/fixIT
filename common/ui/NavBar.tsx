"use client";
import { Button } from "@/common/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/common/drop-down";
import { SOCIAL_INFO } from "@/utils/constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Mail, Moon, Phone, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

const NAVBAR_ITEMS = [
  { id: "hero", title: "Home" },
  { id: "services", title: "Services" },
  { id: "faq", title: "FAQ" },
  { id: "contact", title: "Contact" },
];

function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

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
      <nav className="navbar fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 border-b border-gray-300">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-2xl font-bold text-primary dark:text-primary font-inter">
              Fix<span className="">IT</span>
            </span>
          </Link>

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
              href={`tel:${SOCIAL_INFO.phone}`}
              className="flex items-center gap-2 text-primary hover:text-secondary-400 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{SOCIAL_INFO.phone}</span>
            </Link>
            <ModeToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ModeToggle />
            <button
              onClick={toggleMobileMenu}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 group"
            >
              <div
                className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></div>
            </button>
          </div>
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
              href={`tel:${SOCIAL_INFO.phone}`}
              onClick={closeMobileMenu}
              className="flex items-center gap-3 text-[var(--primary)] hover:text-secondary-400 transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg font-medium">{SOCIAL_INFO.phone}</span>
            </Link>
            <Link
              href={`mailto:${SOCIAL_INFO.email}`}
              onClick={closeMobileMenu}
              className="flex items-center gap-3  text-[var(--secondary)] hover:text-primary-400 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg font-medium">{SOCIAL_INFO.email}</span>
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
