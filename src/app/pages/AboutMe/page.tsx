import { ContentSection } from "@/app/components/ContentSection/ContentSection";
import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";

const AboutMe = () => {
  return (
    <ContentSection id="about-me">
      <Box as="div" style={{ width: "100%" }}>
        <Flex
          direction={{
            initial: "column", // Auf kleineren Bildschirmen untereinander
            sm: "row", // Ab "sm" horizontal nebeneinander
          }}
          align={{
            initial: "center", // Inhalte zentrieren bei kleineren Bildschirmen
            sm: "start", // Auf größeren Bildschirmen oben ausrichten
          }}
          gap="3"
          wrap="wrap" // Inhalte umbrechen, wenn nötig
        >
          <Image
            src={"/aboutme.jpg"}
            width={150}
            height={150}
            alt="logo"
            style={{
              borderRadius: "8px",
              width: "100%",
              maxWidth: "150px", // Maximalbreite für das Bild
              height: "auto",
            }}
          />
          <Box as="div" style={{ flex: 1 }}>
            {/* Box passt sich flexibel an */}
            <Flex direction="column" gap="3">
              <Text
                size={{
                  initial: "2", // Kleinere Schriftgröße für schmale Bildschirme
                  sm: "3", // Größere Schrift ab "sm"
                }}
                as="p"
                style={{ lineHeight: "1.8em" }}
              >
                Mit über [Anzahl] Jahren Erfahrung als Lackierer stehe ich für
                höchste Qualität, Präzision und Verlässlichkeit. Lackieren ist
                für mich weit mehr als ein Handwerk – es ist meine Leidenschaft.
                Jeder Auftrag stellt für mich eine neue Herausforderung dar, bei
                der Ihre Zufriedenheit stets an erster Stelle steht.
              </Text>
              <Text
                size={{
                  initial: "2", // Kleinere Schriftgröße für schmale Bildschirme
                  sm: "3", // Größere Schrift ab "sm"
                }}
                as="p"
                style={{ lineHeight: "1.8em" }}
              >
                Ich arbeite nicht nur schnell und effizient, sondern auch mit
                einem unermüdlichen Anspruch an Perfektion. Durch mein
                umfangreiches Netzwerk an Partnern und Lieferanten garantiere
                ich Ihnen stets erstklassige Materialien und maßgeschneiderte
                Lösungen, die Ihre Erwartungen übertreffen.
              </Text>
              <Text
                size={{
                  initial: "2", // Kleinere Schriftgröße für schmale Bildschirme
                  sm: "3", // Größere Schrift ab "sm"
                }}
                as="p"
                style={{ lineHeight: "1.8em" }}
              >
                Ob es sich um Fahrzeuglackierungen, Reparaturen oder
                individuelle Sonderwünsche handelt – bei mir können Sie sich
                darauf verlassen, dass Ihr Projekt in besten Händen ist. Ich
                nehme mir Zeit für Ihre Anliegen, berate Sie individuell und
                finde stets die perfekte Lösung für Ihre Wünsche.
              </Text>
              <Text
                size={{
                  initial: "2", // Kleinere Schriftgröße für schmale Bildschirme
                  sm: "3", // Größere Schrift ab "sm"
                }}
                as="p"
                style={{ lineHeight: "1.8em" }}
              >
                <strong style={{ fontWeight: "bold", marginRight: "0.5rem" }}>
                  [Name des Lackierers]
                </strong>
                – Qualität, die überzeugt und Ihr Projekt zum Glänzen bringt.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </ContentSection>
  );
};

export default AboutMe;
