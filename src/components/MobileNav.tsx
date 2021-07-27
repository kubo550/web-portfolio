import { navLinks } from "data/navLinks";
import Link from "next/link";
import React from "react";

interface MobileNavProps {
  closeMobileMenu: () => void;
}

export const MobileNav = React.forwardRef<HTMLDivElement, MobileNavProps>(
  ({ closeMobileMenu }, ref) => (
    <div className='sm:hidden'>
      <div ref={ref} className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
        {navLinks.map(({ path, title }) => (
          <Link key={path} href={path}>
            <a
              className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'
              onClick={closeMobileMenu}
            >
              {title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
);

MobileNav.displayName = "NavMenu";
