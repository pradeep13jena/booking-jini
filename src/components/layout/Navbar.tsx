"use client";

import Link from "next/link";
import Image from "next/image";

import { AnimatedButton } from "@/components/AnimatedButton";
import { SectionDivider } from "@/components/layout/SectionDivider";
import { Orangelogo } from "@/components/assets/image";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navigationItems = [
  {
    label: "Products",
    href: "/products",
    productItems: [
      {
        label: "Booking Engine",
        href: "/products/booking-engine",
        description: "",
      },
      {
        label: "Channel Manager",
        href: "/products/channel-manager",
        description: "",
      },
      {
        label: "PMS",
        href: "/products/pms",
        description: "",
      },
    ],
  },
  {
    label: "Solution",
    href: "/solution",
  },
  {
    label: "Customer",
    href: "/customer",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About us",
    href: "/about",
  },
];

const navItemClass =
  "text-sm font-semibold hover:text-primary transition-colors duration-300 cursor-pointer hover:bg-transparent focus:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent data-open:bg-transparent data-open:hover:bg-transparent data-open:focus:bg-transparent data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent";

export function Navbar() {
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

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.productItems ? (
                  <>
                    <NavigationMenuTrigger className={navItemClass}>
                      {item.label}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <ul className="grid w-content gap-2 p-2">
                        {item.productItems.map((product) => (
                          <li key={product.label}>
                            <NavigationMenuLink
                              render={({ className }) => (
                                <Link
                                  href={product.href}
                                  className={cn(className, navItemClass)}
                                >
                                  {product.label}
                                </Link>
                              )}
                            />
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    render={({ className }) => (
                      <Link
                        href={item.href}
                        className={cn(className, navItemClass)}
                      >
                        {item.label}
                      </Link>
                    )}
                    className={navigationMenuTriggerStyle()}
                  />
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA */}
        <AnimatedButton text="Get Started" href="/contact" />
      </div>
      <SectionDivider />
    </header>
  );
}
