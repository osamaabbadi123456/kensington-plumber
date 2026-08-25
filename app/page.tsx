import Header from "./_components/Header";
import Hero from "./_components/Hero";
import ProblemSelector from "./_components/ProblemSelector";
import ServicesPreview from "./_components/ServicesPreview";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ProblemSelector />
        <ServicesPreview />
      </main>
    </>
  );
}
