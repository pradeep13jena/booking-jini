"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { AnimatedButton } from "@/components/AnimatedButton";
import { SectionDivider } from "@/components/layout/SectionDivider";
import { Orangelogo } from "../../lib/image";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navigationItems = [
  { label: "Products", href: "/product" },
  { label: "Pricing", href: "/pricing-page" },
  // { label: "Solutions", href: "/solutions-by-segment" },
  { label: "Customers", href: "/customer-case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/about" },
];

const navItemClass =
  "text-sm font-medium text-[#1E0D01]/80 hover:text-primary transition-colors duration-300 cursor-pointer hover:bg-transparent focus:bg-transparent data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      {/* Own rails — the header's solid bg covers the global overlay in layout.tsx */}
      <div className="container flex items-center justify-between py-6 px-7.5 border-x border-dashed border-frame">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Orangelogo}
            alt="BookingJini Logo"
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-3">
          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navigationItems.map((item) => {
                // Highlight the current section, including its nested routes
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink
                      render={({ className }) => (
                        <Link
                          href={item.href}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(className, navItemClass, isActive && "text-primary")}
                        >
                          {item.label}
                        </Link>
                      )}
                      className={navigationMenuTriggerStyle()}
                    />
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTAs */}
          <Link
            href="/#commission-calculator"
            className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-[#1E0D01] transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            Commission calculator
          </Link>
          <AnimatedButton
            text="Get Free Revenue Check"
            href="/contact"
            colorDirection="left"
            className="font-semibold shadow-[0_10px_28px_rgba(249,115,22,0.3)]"
          />
        </div>
      </div>
      <SectionDivider />
    </header>
  );
}
