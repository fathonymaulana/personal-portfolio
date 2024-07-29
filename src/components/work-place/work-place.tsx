import Image from "next/image";
import React from "react";

const WorkPlace = () => {
  return (
    <div className="space-y-8 border-y py-8 my-8 md:my-28">
      <h2 className="text-muted-foreground text-xs">Proud to be known by & worked at:</h2>
      <div className="grid grid-cols-4 place-items-center">
        <div>
          <Image src="/images/brand/ikon-black.png" alt="brand-logo" width={2400} height={699} loading="lazy" className="block dark:hidden w-16 md:w-40" />
          <Image src="/images/brand/ikon-white.png" alt="brand-logo" width={2400} height={699} loading="lazy" className="hidden dark:block w-16 md:w-40" />
        </div>
        <div>
          <Image src="/images/brand/mitech-black.png" alt="brand-logo" width={2400} height={699} loading="lazy" className="block dark:hidden w-16 md:w-40" />
          <Image src="/images/brand/mitech-white.png" alt="brand-logo" width={2400} height={699} loading="lazy" className="hidden dark:block w-16 md:w-40" />
        </div>
        <div>
          <Image src="/images/brand/bank-mandiri-black.png" alt="brand-logo" width={2400} height={699} loading="lazy" className="block dark:hidden w-16 md:w-40" />
          <Image src="/images/brand/bank-mandiri-white.png" alt="brand-logo" width={2400} height={699} loading="lazy" className="hidden dark:block w-16 md:w-40" />
        </div>
        <div>
          <Image src="/images/brand/upwork-black.png" alt="brand-logo" width={2400} height={699} loading="lazy" className="block dark:hidden w-16 md:w-40" />
          <Image src="/images/brand/upwork-white.png" alt="brand-logo" width={2400} height={699} loading="lazy" className="hidden dark:block w-16 md:w-40" />
        </div>
      </div>
    </div>
  );
};

export default WorkPlace;
