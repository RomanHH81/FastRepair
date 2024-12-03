import React from "react";
import { ContentSection } from "@/app/components/ContentSection/ContentSection";
import { Box, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { InstagramLogoIcon } from "@radix-ui/react-icons"; // Radix Icons

const Footer = () => {
  return (
    <ContentSection>
      <Flex direction="row" justify="between" gap="5" align="center">
        <Box as="div" style={{ display: "flex", alignItems: "center" }}>
          <Link href="https://www.instagram.com/officialfastrepair/" passHref>
            <InstagramLogoIcon style={{ width: "30px", height: "30px" }} />
          </Link>
          <Text
            as="span"
            style={{
              marginLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Besuche mich bei Instagram
          </Text>
        </Box>

        <Box as="div">
          <Flex direction="row" gap="5" justify="end" align="center">
            <Link href="/pages/impressum">Impressum</Link>
            <Link href="/pages/datenschutz">Datenschutz</Link>
          </Flex>
        </Box>
      </Flex>
    </ContentSection>
  );
};

export default Footer;
