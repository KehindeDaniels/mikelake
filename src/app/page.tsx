import ExampleComponent from "@/components/example/ExampleComponent";
import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedProjects from "@/components/featuredProjects";
import SelectedProjects from "@/components/selectedProjects";
import AboutMe from "@/components/aboutMe";
import Skills from "@/components/skills";
import Footer from "@/components/footer";

const Page: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <Hero />
      <div className="max-w-7xl mx-auto px-8">
        <FeaturedProjects />
        <SelectedProjects />
        <AboutMe />
        <Skills />
      </div>
      <div className="max-w-7xl  mx-auto px-8">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
