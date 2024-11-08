import GoBackButton from "./GoBackButton";

const Heading = ({ title }) => {
  return (
    <section className="flex justify-between items-center bg-white mb-5 border-b px-4 pb-4">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h1>
      <GoBackButton />
    </section>
  );
};

export default Heading;
