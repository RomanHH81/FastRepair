"use client";

import { useState, useEffect } from "react";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
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
      } catch (fetchError: unknown) {
        console.error("Fehler beim Laden der Bewertungen:", fetchError);
        setError("Fehler beim Laden der Bewertungen");
      }
    };

    fetchReviews();
  }, []);

  if (error) {
    return <div>{error}</div>; // Zeigt die Fehlermeldung an
  }

  return (
    <div>
      <h1>Google Reviews</h1>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li> // Hier sollten die Bewertungen korrekt angezeigt werden
        ))}
      </ul>
    </div>
  );
};

export default GoogleReviews;
