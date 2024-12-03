import React from "react";
import { ContentSection } from "../../components/ContentSection/ContentSection";
import { Box, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

const page = () => {
  return (
    <ContentSection>
      <Box style={{ maxWidth: "800px" }}>
        <Flex direction="column" gap="4">
          <Text as="p" size="7" weight="bold" style={{ marginBottom: "16px" }}>
            Impressum
          </Text>
          <Box as="div">
            <Text as="p" size="4" weight="medium">
              <strong>Angaben gemäß § 5 TMG:</strong>
            </Text>
            <Text as="p" size="4">
              SmartRepair Geesthacht GmbH <br />
              Leibnizstraße 8 <br />
              21502 Geesthacht <br />
              Schleswig-Holstein
            </Text>
          </Box>
          <Box as="div">
            <Text as="p" size="4" weight="medium">
              <strong>Vertreten durch:</strong>
            </Text>
            <Text as="p" size="4">
              Geschäftsführer: Max Mustermann
            </Text>
          </Box>
          <Box as="div">
            <Text as="p" size="4" weight="medium">
              <strong>Kontakt:</strong>
            </Text>
            <Text as="p" size="4">
              Telefon: +49 (0)4152 123456 <br />
              E-Mail: info@smartrepair-geesthacht.de
            </Text>
          </Box>
          <Box as="div">
            <Text as="p" size="4" weight="medium">
              <strong>Registereintrag:</strong>
            </Text>
            <Text as="p" size="4">
              Eintragung im Handelsregister. <br />
              Registergericht: Amtsgericht Lübeck <br />
              Registernummer: HRB 12345
            </Text>
          </Box>
          <Box as="div">
            <Text as="p" size="4" weight="medium">
              <strong>Umsatzsteuer-ID:</strong>
            </Text>
            <Text as="p" size="4">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz: DE123456789
            </Text>
          </Box>
          <Box as="div">
            <Text as="p" size="4" weight="medium">
              <strong>
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
              </strong>
            </Text>
            <Text as="p" size="4">
              Max Mustermann <br />
              Leibnizstraße 8 <br />
              21502 Geesthacht
            </Text>
          </Box>
          <Box as="div">
            <Text as="p" size="4" weight="medium">
              <strong>Streitbeilegung:</strong>
            </Text>
            <Text as="p" size="4">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit: <br />
              <Link
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr
              </Link>
            </Text>
            <Text as="p" size="4">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </Text>
            <Text as="p" size="4">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </Text>
          </Box>
        </Flex>
      </Box>
    </ContentSection>
  );
};

export default page;
