
import { Suspense } from "react";
import AboutSection from "@/components/aboutus"
import CollectionSection from "@/components/collection"

export const metadata = {
  title: "SNTLY",
  description: "yeh",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      

      <AboutSection />
      <CollectionSection />

      

      

      

     
      
    </main>
  );
}
