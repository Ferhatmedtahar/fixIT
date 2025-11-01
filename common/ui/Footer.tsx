"use client";
import { useLanguage } from "@/context/language-provider";
import { SOCIAL_INFO } from "@/utils/constants";
import { Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";
const NAVBAR_ITEMS = [
  { id: "hero", title: "nav.home" },
  { id: "services", title: "nav.services" },
  { id: "faq", title: "nav.faq" },
  { id: "contact", title: "nav.contact" },
];
function Footer() {
  const { dir, t } = useLanguage();
  return (
    <footer className="bg-primary-800 border-t border-primary-500 px-6 md:px-24 py-10 text-primary-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="flex flex-col gap-3">
          <Logo />
        </div>

        <nav>
          <ul className="flex flex-wrap gap-6">
            {NAVBAR_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className="text-[var(--primary)] hover:text-[var(--foreground)] font-medium transition-colors duration-300"
                >
                  {t(item.title)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="flex flex-row gap-4">
          <Link
            className="flex items-center gap-2 hover:text-red-300 transition-all duration-200"
            href={`mailto:${SOCIAL_INFO.email}`}
          >
            <Mail className="h-6 w-6 text-red-500" />
          </Link>
          <Link
            className="flex items-center gap-2 hover:text-blue-300 transition-all duration-200"
            href={SOCIAL_INFO.linkedin}
            target="_blank"
          >
            <Linkedin className="h-6 w-6 text-blue-500" />
          </Link>
          <Link
            className="flex items-center gap-2 hover:text-pink-200 transition-all duration-200"
            href={SOCIAL_INFO.instagram}
            target="_blank"
          >
            <Instagram className="h-6 w-6 text-pink-500" />
          </Link>
        </div>

        <p className="text-sm text-primary-100 mt-4 md:mt-0">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
