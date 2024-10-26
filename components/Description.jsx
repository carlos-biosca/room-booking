const Description = ({ room }) => {
  const {
    description,
    sqmt,
    availability,
    capacity,
    price_per_hour,
    address,
    location
  } = room;
  return (
    <>
      <h2 className="text-xl font-bold mb-1">Description</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-0.5 mb-4">
        {sqmt ? (
          <li>
            <span className="font-semibold text-gray-800">Size:</span> {sqmt} m
            <sup>2</sup>
          </li>
        ) : null}
        <li>
          <span className="font-semibold text-gray-800">Availability:</span>{" "}
          {availability}
        </li>
        {capacity ? (
          <li>
            <span className="font-semibold text-gray-800">Capacity:</span>{" "}
            {capacity}
          </li>
        ) : null}
        <li>
          <span className="font-semibold text-gray-800">Price:</span> $
          {price_per_hour}/hour
        </li>
        <li>
          <span className="font-semibold text-gray-800">Address:</span>{" "}
          {address}
        </li>
        {location ? (
          <li>
            <span className="font-semibold text-gray-800">Location:</span>{" "}
            {location}
          </li>
        ) : null}
      </ul>
    </>
  );
};

export default Description;
