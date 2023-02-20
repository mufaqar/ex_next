import { Container } from "@/constant/imports";
import React, { useEffect, useState } from "react";
//import {Logo} from './imports'
import { Logo } from "./imports";
import Link from "next/link";
import { navItems } from "../../public/DataFiles/NavItem";
import { BiSearch, BiUser } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";

interface INavItem {
  name: string;
  link: string;
}

function Header() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      const handleResize = (): void => {
        const screenWidth = window.innerWidth;
        setScreenWidth(screenWidth);
        if (screenWidth >= 768) {
          setMobileNav(false);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <header className="py-3 bg-white/80 fixed w-full top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <nav
            className={`items-center gap-6 lg:gap-10  md:flex ${mobileNav
              ? "flex flex-col items-center justify-center p-10 absolute text-white top-[86px] right-0 left-0 bg-main"
              : "hidden"
              }`}
          >
            {navItems.map((nav: INavItem, idx: number) => {
              return (
                <Link
                  href={nav.link}
                  className="text-sm font-semibold hover:text-main"
                  key={idx}
                >
                  {nav.name}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <button className="p-2 shadow-lg rounded-md">
              <BiSearch className="text-main" size={20} />
            </button>
            <button className="button">

              <BiUser /><Link href="/subscription"> Login / Register</Link>
            </button>
            {/* hamburger  */}
            <button
              className="md:hidden"
              onClick={() => setMobileNav(!mobileNav)}
            >
              <HiMenuAlt3 size={28} />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
