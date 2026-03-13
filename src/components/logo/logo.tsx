import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/images/logo/Logo.svg"
        alt="logo"
        width={40}
        height={40}
        loading="lazy"
      />
      {/* <p className="text-sm font-semibold uppercase tracking-tighter">
        fathony maulana
      </p> */}
    </Link>
  );
};

export default Logo;
