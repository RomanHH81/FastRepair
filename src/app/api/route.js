// src/app/api/data/route.js
export async function GET() {
  const apiKey = "AIzaSyCIw1kLaRxelEshUMfw0ivkwT8aLVwQHh0"; // Dein Google API-Schlüssel
  const placeId = "ChIJH6xNIznvsUcRbOgv_VagIUI"; // Die richtige Place ID von Fast Repair

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&language=de&key=${apiKey}`;

  try {
    // Abrufen der Daten von der Google Places API
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Fehler beim Abrufen der Daten");
    }

    const data = await response.json();

    // Füge hier ein console.log() hinzu, um die Daten zu prüfen
    console.log("Daten von Google Places:", data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Fehlerbehandlung
    console.error("Fehler bei der Anfrage:", error);
    return new Response(
      JSON.stringify({
        error: "Fehler beim Abrufen der Daten von Google Places",
      }),
      { status: 500 }
    );
  }
}
