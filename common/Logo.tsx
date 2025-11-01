"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import LogoPicDark from "../public/glados-dark.png";
import LogoPic from "../public/glados.svg";
function Logo() {
  const { theme } = useTheme();
  const logoSrc = theme === "light" ? LogoPic : LogoPicDark;
  return (
    <Link href="/" className="flex items-center justify-center gap-2 group">
      <Image src={logoSrc} alt="Glados Zone Logo" width={30} height={30} />
      <span className=" text-2xl font-bold text-[var(--primary)] hidden sm:inline-block group-hover:text-[var(--foreground)] transition-colors duration-300">
        Glados Zone
      </span>
    </Link>
  );
}

export default Logo;
