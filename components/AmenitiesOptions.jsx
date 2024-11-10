import { useState } from "react";

import icons from "@/data/icons";

const baseClasses =
  "flex items-center gap-2 border px-3 py-1 rounded-lg child:pointer-events-none cursor-pointer";
const activeClasses = "bg-black text-white";

const iconsArray = Object.entries(icons).map(([key, value]) => ({
  name: key,
  icon: value
}));

const AmenitiesOptions = () => {
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const handleSelected = e => {
    const item = e.target.textContent;
    setSelectedAmenities(prev => {
      if (prev.includes(item)) return prev.filter(i => i !== item);
      return [...prev, item];
    });
  };

  return (
    <div className="mb-8">
      <label htmlFor="amenities" className="block text-gray-700 font-bold mb-2">
        Amenities
      </label>
      <ul className="flex flex-wrap gap-4">
        {iconsArray.length > 0
          ? iconsArray.map(item => {
              return (
                <li
                  key={item.name}
                  className={`${baseClasses} ${
                    selectedAmenities.some(name => name === item.name)
                      ? activeClasses
                      : null
                  }`}
                  onClick={handleSelected}
                >
                  {item.name}
                  {item.icon}
                </li>
              );
            })
          : null}
      </ul>
      <input
        type="text"
        id="amenities"
        name="amenities"
        className="hidden"
        value={selectedAmenities.join(", ")}
        readOnly
      />
    </div>
  );
};

export default AmenitiesOptions;
