import Header from "@/components/header";
import SelectedProjects from "@/components/selectedProjects";
import AboutMe from "@/components/aboutMe";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import Hero from "@/components/heroComponent/hero";
import WorkProcess from "@/components/workProcess";
import ProjectCTA from "@/components/projectCTA";
import FeaturedProjectsGrid from "@/components/featuredProjectsGrid";
import ContactSection from "@/components/contact";
import ProcessSection from "@/components/process";

const Page: React.FC = () => {
  return (
    <div className="  mx-auto">
      <Header />

      {/* New Hero Section - Split into two components */}
      <Hero />

      {/* Rest of your existing components */}
      <AboutMe />

      <WorkProcess />
      {/* In your parent layout */}
      {/* <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <ProcessSection />
      </div> */}

      <SelectedProjects />
      <ProjectCTA />
      <FeaturedProjectsGrid />
      <Skills />
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Page;
