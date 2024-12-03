import { Box, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { ContentSection } from "@/app/components/ContentSection/ContentSection";

const Datenschutz = () => {
  return (
    <ContentSection>
      <Box style={{ maxWidth: "800px" }}>
        <Flex direction="column" gap="4">
          <Text as="p" size="7" weight="bold" style={{ marginBottom: "16px" }}>
            Datenschutzerklärung
          </Text>

          <Box as="div">
            <Text as="p" size="4" weight="medium">
              <strong>Allgemeine Informationen</strong>
            </Text>
            <Text as="p" size="4">
              Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. In
              dieser Datenschutzerklärung informieren wir Sie darüber, wie wir
              Ihre Daten erheben, verarbeiten und schützen, wenn Sie unsere
              Website nutzen.
            </Text>
          </Box>

          <Box as="div">
            <Text as="p" size="4" weight="medium">
              <strong>Verantwortlicher für die Datenverarbeitung</strong>
            </Text>
            <Text as="p" size="4">
              SmartRepair Geesthacht
              <br />
              Leibnizstraße 8 <br />
              21502 Geesthacht <br />
              Schleswig-Holstein <br />
              E-Mail: info@smartrepair-geesthacht.de
            </Text>
          </Box>

          <Box as="div">
            <Text as="p" size="4" weight="medium">
              <strong>Verwendung von Google-Diensten</strong>
            </Text>
            <Text as="p" size="4">
              Zur Anzeige von Kartenmaterial verwenden wir Google Maps. Bei der
              Nutzung von Google Maps werden durch Google auch Daten über die
              Nutzung der Kartenfunktionen erhoben, verarbeitet und genutzt. Zu
              diesen Daten gehören insbesondere IP-Adressen und Standortdaten,
              die von Google verarbeitet werden. Diese Daten können von Google
              auch in Verbindung mit anderen Google-Diensten genutzt werden.
            </Text>
            <Text as="p" size="4">
              Weitere Informationen zu den von Google erhobenen Daten und deren
              Nutzung finden Sie in der
              <Link
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenschutzerklärung von Google
              </Link>
              .
            </Text>
          </Box>

          <Box as="div">
            <Text as="p" size="4" weight="medium">
              <strong>Google Reviews</strong>
            </Text>
            <Text as="p" size="4">
              Wir binden Google Reviews in unsere Website ein, um Ihnen
              Bewertungen und Rezensionen über unser Unternehmen anzuzeigen.
              Beim Aufrufen von Google Reviews kann Google ebenfalls Daten
              erheben, insbesondere zur Anzeige von Bewertungen und zur
              Verarbeitung von Nutzerdaten.
            </Text>
            <Text as="p" size="4">
              Weitere Informationen zu den von Google erhobenen Daten und deren
              Nutzung finden Sie in der
              <Link
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenschutzerklärung von Google
              </Link>
              .
            </Text>
          </Box>

          <Box as="div">
            <Text as="p" size="4" weight="medium">
              <strong>Rechtsgrundlage der Datenverarbeitung</strong>
            </Text>
            <Text as="p" size="4">
              Die Nutzung der Google-Dienste erfolgt auf Grundlage Ihrer
              Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Wenn Sie der
              Verwendung von Google Maps und Google Reviews zustimmen, erteilen
              Sie uns die Erlaubnis zur Datenverarbeitung durch Google. Sie
              können Ihre Einwilligung jederzeit widerrufen, indem Sie die
              entsprechenden Funktionen in Ihrem Browser oder Gerät
              deaktivieren.
            </Text>
          </Box>

          <Box as="div">
            <Text as="p" size="4" weight="medium">
              <strong>Datenübermittlung an Dritte</strong>
            </Text>
            <Text as="p" size="4">
              Google ist ein US-amerikanisches Unternehmen und kann Daten in die
              USA übermitteln. Die Europäische Kommission hat für die USA keinen
              Angemessenheitsbeschluss erlassen. Daher erfolgt die Übermittlung
              der Daten auf Grundlage der Standardvertragsklauseln der
              EU-Kommission, die einen angemessenen Datenschutz gewährleisten.
            </Text>
          </Box>

          <Box as="div">
            <Text as="p" size="4" weight="medium">
              <strong>Ihre Rechte</strong>
            </Text>
            <Text as="p" size="4">
              Sie haben das Recht, Auskunft über die von uns verarbeiteten
              personenbezogenen Daten zu verlangen. Ebenso können Sie jederzeit
              die Berichtigung, Löschung oder Einschränkung der Verarbeitung
              Ihrer Daten verlangen. Wenn Sie der Verarbeitung Ihrer Daten
              widersprechen möchten, können Sie dies jederzeit tun.
            </Text>
            <Text as="p" size="4">
              Für Fragen oder zur Ausübung Ihrer Rechte können Sie uns unter den
              oben angegebenen Kontaktinformationen erreichen.
            </Text>
          </Box>

          <Box as="div">
            <Text as="p" size="4" weight="medium">
              <strong>Widerruf der Einwilligung</strong>
            </Text>
            <Text as="p" size="4">
              Sie können Ihre Einwilligung zur Nutzung von Google-Diensten
              jederzeit widerrufen. Wenn Sie die Nutzung von Google Maps oder
              Google Reviews auf unserer Website deaktivieren möchten, können
              Sie dies tun, indem Sie die entsprechenden Dienste in den
              Einstellungen Ihres Browsers oder Geräts blockieren.
            </Text>
          </Box>

          <Box as="div">
            <Text as="p" size="4" weight="medium">
              <strong>Änderungen der Datenschutzerklärung</strong>
            </Text>
            <Text as="p" size="4">
              Wir behalten uns vor, diese Datenschutzerklärung zu ändern, um sie
              an geänderte rechtliche oder technische Bedingungen anzupassen.
              Die jeweils aktuelle Version finden Sie auf dieser Seite.
            </Text>
          </Box>
        </Flex>
      </Box>
    </ContentSection>
  );
};

export default Datenschutz;
