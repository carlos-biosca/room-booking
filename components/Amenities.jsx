import icons from "@/data/icons";

const Amenities = ({ amenities }) => {
  return (
    <>
      <h2 className="text-xl font-bold mb-2">Amenities</h2>
      <ul className="flex flex-wrap gap-4">
        {amenities.length > 0
          ? amenities.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-2 border px-3 py-1 rounded-lg"
                >
                  {icons[item]}
                  {item}
                </li>
              );
            })
          : null}
      </ul>
    </>
  );
};

export default Amenities;
