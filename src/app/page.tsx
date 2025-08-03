import Header from "@/components/header";
import FeaturedProjects from "@/components/featuredProjects";
import SelectedProjects from "@/components/selectedProjects";
import AboutMe from "@/components/aboutMe";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

const Page: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white max-w-[1500px] mx-auto">
      <Header />

      {/* New Hero Section - Split into two components */}
      <Hero />

      {/* Rest of your existing components */}
      <div className="mx-auto px-4 md:px-8">
        <div id="work" className="">
          <FeaturedProjects />
          <SelectedProjects />
        </div>
        <AboutMe />
        <Skills />
      </div>

      <div id="contact" className="max-w-[1500px] mx-auto px-4 md:px-8">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
