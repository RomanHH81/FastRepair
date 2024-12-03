"use client";

import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { Box, Text, Flex } from "@radix-ui/themes";
import { ContentSection } from "@/app/components/ContentSection/ContentSection";

interface Review {
  author_name: string;
  rating: number;
  text: string;
}

const GoogleReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();

        if (data?.result?.reviews && Array.isArray(data.result.reviews)) {
          setReviews(data.result.reviews);
        } else {
          setError("Keine Bewertungen gefunden.");
        }
      } catch (error) {
        setError("Fehler beim Laden der Bewertungen");
      }
    };

    fetchReviews();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ContentSection id="reviews">
      <Box as="div">
        <Text>
          <h3>Das sagen die Kunden</h3>
        </Text>
      </Box>
      <Flex
        direction={{
          initial: "column", // Für kleine Bildschirme (unter 768px): Elemente untereinander
          md: "row", // Ab 768px (md-Breakpoint): Elemente nebeneinander
        }}
        gap="4"
        style={{
          flexWrap: "wrap", // Umbruch bei Platzmangel
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {reviews.map((review, index) => (
          <Box
            as="div"
            key={index}
            style={{
              flex: "1 1 calc(33.33% - 16px)", // Ab md: drei Spalten nebeneinander
              listStyle: "none",
              padding: "8px",
              boxSizing: "border-box",
            }}
          >
            <Box
              as="div"
              style={{
                padding: "16px",
                borderRadius: "8px",
                background: "var(--imageframe)",
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <strong>{review.author_name}</strong>
              <Box as="div" style={{ margin: "8px 0" }}>
                <ReactStars
                  count={5}
                  value={review.rating}
                  size={24}
                  color2={"#ffd700"}
                  edit={false}
                />
              </Box>
              <p>{review.text}</p>
            </Box>
          </Box>
        ))}
      </Flex>
    </ContentSection>
  );
};

export default GoogleReviews;
