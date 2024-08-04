import ExampleComponent from "@/components/example/ExampleComponent";
import Header from "@/components/header";

const Page: React.FC = () => {
  return (
    <div className=" bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <h1>Hello, World!</h1>
      {/* Your content here */}
      <ExampleComponent />
    </div>
  );
};

export default Page;
