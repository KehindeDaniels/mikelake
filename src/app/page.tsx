import ExampleComponent from "@/components/example/ExampleComponent";
import Header from "@/components/header";
import Hero from "@/components/hero";

const Page: React.FC = () => {
  return (
    <div className=" bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <Hero />
    </div>
  );
};

export default Page;
