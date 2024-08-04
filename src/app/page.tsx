import Header from "@/components/header";

const Page: React.FC = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <h1>Hello, World!</h1>
      {/* Your content here */}
    </div>
  );
};

export default Page;
