"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import React from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: "profile", label: "Profile" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "experiences", label: "Experiences" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id: string) => {
    const element = document.querySelector("#" + id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed w-full bg-background shadow-sm z-50 ">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div
            className="text-3xl font-bold text-primary cursor-pointer"
            onClick={() => scrollTo("profile")}
          >
            xjl__
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <div
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-foreground hover:text-primary text-xl px-3 py-2 rounded-md cursor-pointer hover:underline hover:scale-105 transition-all duration-200 ease-in-out transform origin-center"
              >
                {link.label}
              </div>
            ))}
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background shadow-lg">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-foreground hover:text-primary py-2"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Theme Toggle */}
              <Button
                variant="outline"
                className="w-full"
                onClick={toggleTheme}
              >
                {theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"}
                {theme === "dark" ? (
                  <Sun className="ml-2" />
                ) : (
                  <Moon className="ml-2" />
                )}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
