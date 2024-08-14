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
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white max-w-[1500px]">
      <Header />
      <Hero />
      <div className=" mx-auto px-4 md:px-8">
        <div id="work" className="">
          <FeaturedProjects />
          <SelectedProjects />
        </div>
        <AboutMe />
        <Skills />
      </div>
      <div id="contact" className="max-w-[1500px]  mx-auto px-4 md:px-8">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
