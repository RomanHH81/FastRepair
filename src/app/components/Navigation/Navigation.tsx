"use client";
import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ContentSection } from "@/app/components/ContentSection/ContentSection";

const navigationData = {
  links: [
    {
      name: "Über Mich",
      href: "/#about-me",
    },
    {
      name: "Bewertungen",
      href: "/#reviews",
    },
    {
      name: "Kontakt",
      href: "/#contact",
    },
  ],
};

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <ContentSection>
      <Flex
        display="flex"
        justify="between"
        align="center"
        wrap="wrap" // Inhalte umbrechen
      >
        <Box as="div">
          <Link href="/">
            <Image
              src="/logo.png"
              width={150}
              height={100}
              alt="logo"
              style={{ borderRadius: "50%" }}
            />
          </Link>
        </Box>
        {/* Menü für größere Bildschirme */}
        <Box as="div">
          <Flex
            direction={{
              initial: "column",
              xs: "row",
            }}
            align="center"
            justify="center"
            gap="2rem"
            wrap="wrap" // Flexibles Layout bei kleineren Bildschirmen
          >
            {navigationData.links.map((link) => (
              <Box as="div" key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: "18px",
                    textDecoration: "none",
                    color: "var(--font)",
                  }}
                >
                  {link.name}
                </Link>
              </Box>
            ))}
          </Flex>
        </Box>
        {/* Hamburger Menü für kleinere Bildschirme */}
        <Box as="div" style={{ display: "none" }}>
          <button onClick={toggleMenu}>☰</button>
          {isMenuOpen && (
            <Box as="div">
              <Flex direction="column" gap="1rem">
                {navigationData.links.map((link) => (
                  <Box as="div" key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: "18px",
                        textDecoration: "none",
                        color: "var(--font)",
                      }}
                    >
                      {link.name}
                    </Link>
                  </Box>
                ))}
              </Flex>
            </Box>
          )}
        </Box>
      </Flex>
    </ContentSection>
  );
};
