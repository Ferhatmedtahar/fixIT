import Image from "next/image";
import Link from "next/link";

// import { Link }
function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center gap-2 group">
      {/* <span className=" text-2xl font-bold text-[var(--primary)] ">
        Glados Zone
      </span> */}
      <Image src="/glados.svg" alt="Glados Zone Logo" width={30} height={30} />
      <span className=" text-2xl font-bold text-[var(--primary)] hidden sm:inline-block group-hover:text-[var(--foreground)] transition-colors duration-300">
        Glados Zone
      </span>
    </Link>
  );
}

export default Logo;
