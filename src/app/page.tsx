import AboutMe from "./pages/AboutMe/page";
import ContactMe from "./pages/Contact/page";
import GoogleReviews from "./pages/GoogleReviews/page";

export default function Home() {
  return (
    <div>
      <AboutMe />
      <GoogleReviews />
      <ContactMe />
    </div>
  );
}
