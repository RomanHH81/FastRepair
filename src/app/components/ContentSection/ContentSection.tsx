// ContentSection.tsx
import { Section } from "@radix-ui/themes";

interface ContentSectionProps {
  id?: string; // Optionale id
  children: React.ReactNode;
}

export const ContentSection = ({ id, children }: ContentSectionProps) => {
  return (
    <Section
      id={id} // ID hier übergeben
      size={"1"}
      style={{
        backgroundColor: "var(--section)",
        borderRadius: "8px",
        margin: "16px 0",
        padding: "16px 16px",
      }}
    >
      {children}
    </Section>
  );
};
