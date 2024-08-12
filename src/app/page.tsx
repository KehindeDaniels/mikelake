import ExampleComponent from "@/components/example/ExampleComponent";
import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedProjects from "@/components/featuredProjects";
import SelectedProjects from "@/components/selectedProjects";

const Page: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <Hero />
      <div className="max-w-7xl mx-auto p-8">
        <FeaturedProjects />
        <SelectedProjects /> // Add the SelectedProjects component here
      </div>
    </div>
  );
};

export default Page;
