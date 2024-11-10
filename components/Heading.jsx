import GoBackButton from "./GoBackButton";

const Heading = ({ title, goBack }) => {
  return (
    <section className="flex justify-between items-center bg-white mb-5 border-b px-1 md:px-4 pb-4">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h1>
      <GoBackButton show={goBack} />
    </section>
  );
};

export default Heading;
