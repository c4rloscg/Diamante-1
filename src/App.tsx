import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Vision } from "@/components/vision";
import { Amenities } from "@/components/amenities";
import { Clinics } from "@/components/clinics";
import { Location } from "@/components/location";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Vision />
      <Amenities />
      <Clinics />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}