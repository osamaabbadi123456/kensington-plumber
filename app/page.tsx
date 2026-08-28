import Header from "./_components/Header";
import AreaCoverageSection from "./_components/AreaCoverageSection";
import Hero from "./_components/Hero";
import HomeEnquiryVisual from "./_components/HomeEnquiryVisual";
import HomeResourcePath from "./_components/HomeResourcePath";
import ProblemSelector from "./_components/ProblemSelector";
import RecentlyReviewedGuides from "./_components/RecentlyReviewedGuides";
import ServicesPreview from "./_components/ServicesPreview";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ProblemSelector />
        <ServicesPreview />
        <HomeEnquiryVisual />
        <AreaCoverageSection />
        <RecentlyReviewedGuides />
        <HomeResourcePath />
      </main>
    </>
  );
}
