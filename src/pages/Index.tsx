import { useState } from "react";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Portfolio";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Hero onContactClick={() => setContactModalOpen(true)} />
      <Benefits />
      <Pricing />
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </div>
  );
};

export default Index;
