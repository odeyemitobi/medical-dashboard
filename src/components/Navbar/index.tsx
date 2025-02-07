"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCog } from "react-icons/fa";
import { HiDotsVertical, HiMenu } from "react-icons/hi";
import { GoHome } from "react-icons/go";
import { PiCalendarBlank } from "react-icons/pi";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineCreditCard } from "react-icons/md";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLinks: React.FC = () => (
    <>
      <Link
        href="/overview"
        className={`flex items-center font-semibold gap-2 text-[#072635] lg:px-4 lg:py-2 lg:rounded-full transition-all ${
          pathname === "/overview" ? "lg:bg-[#00FFC2]" : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div>
          <GoHome size={22} />
        </div>
        Overview
      </Link>
      <Link
        href="/patients"
        className={`flex items-center font-semibold gap-2 text-[#072635] lg:px-4 lg:py-2 lg:rounded-full transition-all ${
          pathname === "/patients" || pathname === "/" ? "lg:bg-[#00FFC2]" : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div>
          <Image
            src="/group-user.svg"
            alt="Tech.Care Logo"
            width={24}
            height={24}
            className=""
            priority
          />
        </div>
        Patients
      </Link>
      <Link
        href="/schedule"
        className={`flex items-center font-semibold gap-2 text-[#072635] lg:px-4 lg:py-2 lg:rounded-full transition-all ${
          pathname === "/schedule" ? "lg:bg-[#00FFC2]" : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div>
          <PiCalendarBlank size={22} />
        </div>
        Schedule
      </Link>
      <Link
        href="/message"
        className={`flex items-center font-semibold gap-2 text-[#072635] lg:px-4 lg:py-2 lg:rounded-full transition-all ${
          pathname === "/message" ? "lg:bg-[#00FFC2]" : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div>
          <FiMessageSquare size={22} />
        </div>
        Message
      </Link>
      <Link
        href="/transactions"
        className={`flex items-center font-semibold gap-2 text-[#072635] lg:px-4 lg:py-2 lg:rounded-full transition-all ${
          pathname === "/transactions" ? "lg:bg-[#00FFC2]" : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div>
          <MdOutlineCreditCard size={22} />
        </div>
        Transactions
      </Link>
    </>
  );

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-20 bg-[#F6F7F8] z-40" />
      <nav className="fixed top-4 left-4 right-4 z-50">
        <div className="bg-white rounded-full shadow-lg px-4 py-3 lg:px-6 lg:py-4 mx-auto max-w-[98%]">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="relative w-32 lg:w-52">
                  <Image
                    src="/T.C.svg"
                    alt="Tech.Care Logo"
                    width={0}
                    height={0}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center xlg:space-x-4 space-x-2">
              <NavLinks />
            </div>

            {/* Profile Section */}
            <div className="flex cursor-pointer items-center space-x-2 lg:space-x-4">
              <div className="flex items-center lg:border-r lg:pr-5">
                <div className="relative w-8 h-8 lg:w-10 lg:h-10">
                  <Image
                    src="/snr-doc.png"
                    alt="Dr. Jose Simmons"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-3 hidden lg:block">
                  <div className="text-sm font-bold text-[#072635]">
                    Dr. Jose Simmons
                  </div>
                  <div className="text-sm text-[#707070]">
                    General Practitioner
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <FaCog color="#072635" size={26} />
                </div>
                <div className="hidden lg:block">
                  <HiDotsVertical color="#072635" size={26} />
                </div>
              </div>

              {/* Hamburger Menu (Mobile) */}
              <div className="lg:hidden">
                <div onClick={toggleMenu} className="">
                  <HiMenu color="#072635" size={26} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleMenu}
        >
          <div
            className="fixed bottom-0 left-0 right-0 bg-white p-4 rounded-t-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-8">
              <NavLinks />
            </div>
          </div>
        </div>
      )}
    </>
  );
};