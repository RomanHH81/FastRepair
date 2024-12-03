import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Container, Theme } from "@radix-ui/themes";
import { Navigation } from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Fast Repair ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme appearance="dark" accentColor="indigo">
          <Container>
            <Navigation />
            {children}
            <Footer />
          </Container>
        </Theme>
      </body>
    </html>
  );
}
