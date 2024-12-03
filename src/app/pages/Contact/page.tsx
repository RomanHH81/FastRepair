import React from "react";
import { ContentSection } from "@/app/components/ContentSection/ContentSection";
import { Box, Button, Flex, TextArea, TextField, Text } from "@radix-ui/themes";
import Link from "next/link";
import { MobileIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"; // Radix Icons

const ContactMe = () => {
  return (
    <ContentSection id="contact">
      <Flex
        direction={{
          initial: "column",
          xs: "column",
          sm: "row",
          md: "row",
          lg: "row",
          xl: "row",
        }} // Breakpoints für verschiedene Bildschirmgrößen
        gap="4"
        wrap="wrap"
        style={{ justifyContent: "space-between", width: "100%" }}
      >
        {/* Kontaktformular */}
        <Box
          style={{
            flex: "1 1 48%",
            padding: "1rem",
            minWidth: "300px", // Sicherstellen, dass der Inhalt lesbar bleibt
          }}
        >
          <form>
            <Flex direction="column" gap="4">
              <TextField.Root
                size="3"
                radius="medium"
                placeholder="dein Name"
              />
              <TextField.Root
                size="3"
                radius="medium"
                placeholder="deine Telefonnummer"
              />
              <TextField.Root
                size="3"
                radius="medium"
                placeholder="deine Email"
              />
              <TextArea
                size="3"
                style={{ height: "100px" }}
                placeholder="deine Nachricht an mich"
              />
              <Button size="3" variant="surface" style={{ marginTop: "1rem" }}>
                Anfrage abschicken
              </Button>
            </Flex>
          </form>
        </Box>

        {/* Kontakt & Anfahrt */}
        <Box
          style={{
            flex: "1 1 48%",
            padding: "1rem",
            minWidth: "300px", // Gleiche Mindestbreite wie das Formular
          }}
        >
          <Flex
            direction={{
              initial: "column",
              xs: "column",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            gap="4"
            style={{ alignItems: "flex-start" }}
          >
            {/* Adressinformationen */}
            <Box style={{ flex: "1", minWidth: "200px" }}>
              <Flex direction="column" gap="4">
                <Text size="3" as="p" style={{ fontWeight: "bold" }}>
                  Anfahrt & Kontakt
                </Text>
                <Text size="3" as="p">
                  Leibnizstraße 8
                </Text>
                <Text size="3" as="p">
                  21502 Geesthacht
                </Text>
                <Text size="3" as="p">
                  <Link
                    href="tel:+491629188650"
                    style={{
                      color: "#cad2c5",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <MobileIcon style={{ marginRight: "8px" }} />
                    0162 - 91 88 65 0
                  </Link>
                </Text>
                <Text size="3" as="p">
                  <Link
                    href="mailto:example@example.com"
                    style={{
                      color: "#cad2c5",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <EnvelopeClosedIcon style={{ marginRight: "8px" }} />
                    example@example.com
                  </Link>
                </Text>
                <Text size="3" as="p">
                  Öffnungszeiten:
                </Text>
                <Text size="3" as="p">
                  Mo - Fr 08:00 - 18:00
                </Text>
                <Text size="3" as="p">
                  Sa 08:00 - 14:00
                </Text>
              </Flex>
            </Box>

            {/* Google Maps */}
            <Box style={{ flex: "1", maxWidth: "300px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.5190122074755!2d10.364376577300284!3d53.453862172320534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1ef39234dac1f%3A0x4221a056fd2fe86c!2sFast%20Repair%20-%20Lackierung%20und%20Oberfl%C3%A4chentechnik!5e1!3m2!1sde!2sde!4v1732920453582!5m2!1sde!2sde"
                style={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "8px",
                  border: "none",
                }}
                loading="lazy"
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </ContentSection>
  );
};

export default ContactMe;
