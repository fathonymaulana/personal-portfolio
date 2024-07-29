// src/components/NavLinks.tsx

"use client"

import { navLinks } from '@/constant/nav-links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const NavLinks: React.FC = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <nav className="hidden md:flex items-center gap-8 text-sm font-base">
      {navLinks.map((link) => (
        <Link key={link.name} href={link.path} className='hover:opacity-80 transition'>
          <span className={pathname === link.path ? 'text-foreground' : 'text-muted-foreground'}>
            {link.name}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
