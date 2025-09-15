// app/components/NavLink.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();

  // Normalize trailing slash
  const normalizedHref = href.replace(/\/$/, "");
  const normalizedPathname = pathname.replace(/\/$/, "");
  const isActive = normalizedHref === normalizedPathname;

  return (
    <Link href={href} className={isActive ? "active" : ""}>
      {children}
    </Link>
  );
};

export default NavLink;
