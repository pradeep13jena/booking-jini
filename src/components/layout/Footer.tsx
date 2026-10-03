"use client";

import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

import { Orangelogo } from "@/components/assets/image";
import { SectionDivider } from "@/components/layout/SectionDivider";

const footerSections = [
  {
    title: "Company",
    links: [
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Customers",
        href: "/customer",
      },
      {
        label: "Resources",
        href: "/resources",
      },
      {
        label: "Careers",
        href: "/careers",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "Solutions",
    links: [
      {
        label: "Independent Hotels",
        href: "/solutions/independent-hotels",
      },
      {
        label: "Hotel Groups",
        href: "/solutions/hotel-groups",
      },
      {
        label: "Homestays",
        href: "/solutions/homestays",
      },
      {
        label: "Tourism Boards",
        href: "/solutions/tourism-boards",
      },
    ],
  },
  {
    title: "Platform",
    links: [
      {
        label: "Booking Engine",
        href: "/products/booking-engine",
      },
      {
        label: "Channel Manager",
        href: "/products/channel-manager",
      },
      {
        label: "PMS",
        href: "/products/pms",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Privacy",
        href: "/privacy",
      },
      {
        label: "Terms",
        href: "/terms",
      },
    ],
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "Telegram",
    href: "#",
    icon: FaTelegramPlane,
  },
];

export function Footer() {
  return (
    <footer className="w-full">
      <SectionDivider />
      <div className="container mx-auto px-8 py-12 lg:py-14">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.8fr_repeat(4,1fr)] lg:gap-16">

          {/* Brand */}
          <div className="max-w-sm py-4">
            <Link
              href="/"
              className="inline-flex items-center"
            >
              <Image
                src={Orangelogo}
                alt="Bookingjini"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="mt-4 max-w-sm text-base leading-7 text-muted-foreground opacity-60 font-bold font-heading">
              The leading direct booking platform engineered to reduce hotel
              dependence on high commission OTAs.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 text-muted-foreground hover:bg-primary hover:text-white"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-heading font-bold text-2xl text-muted-foreground">
                {section.title}
              </h3>

              <ul className="mt-7 space-y-5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-subheading text-base font-bold text-muted-foreground opacity-60 transition-colors duration-300 hover:opacity-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-16 bg-white rounded-xl text-base px-6 py-6 font-bold text-muted-foreground opacity-60 md:px-7">
          © 2026 Bookingjini. All rights reserved. Registered trademark of
          Bookingjini technologies.
        </div>
      </div>
    </footer>
  );
}