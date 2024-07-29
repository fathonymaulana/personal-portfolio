import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
      <Image
        src="/images/logo/fm-logo-black.png"
        alt="logo"
        width={34}
        height={34}
        loading="lazy"
        className="block dark:hidden"
      />
      <Image
        src="/images/logo/fm-logo-white.png"
        alt="logo"
        width={34}
        height={34}
        loading="lazy"
        className="hidden dark:block"
      />
      <span className="font-bold inline-block text-sm md:text-base">fm/portfolio</span>
    </Link>
  );
};

export default Logo;
