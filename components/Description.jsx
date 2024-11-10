const Description = ({ room }) => {
  const { description, sqmt, availability, capacity, location } = room;
  return (
    <>
      <h2 className="text-xl font-bold mb-1">Description</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-0.5 mb-4">
        <li>
          <span className="font-semibold text-gray-800">Location:</span>{" "}
          {location}
        </li>
        <li>
          <span className="font-semibold text-gray-800">Availability:</span>{" "}
          {availability}
        </li>
        {sqmt ? (
          <li>
            <span className="font-semibold text-gray-800">Size:</span> {sqmt} m
            <sup>2</sup>
          </li>
        ) : null}
        {capacity ? (
          <li>
            <span className="font-semibold text-gray-800">Capacity:</span>{" "}
            {capacity}
          </li>
        ) : null}
      </ul>
    </>
  );
};

export default Description;
