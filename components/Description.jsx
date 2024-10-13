const Description = ({ room }) => {
  return (
    <>
      <h2 className="text-xl font-bold">Description</h2>
      <p className="text-gray-600 mb-4">{room.description}</p>
      <ul className="space-y-0.5 mb-4">
        <li>
          <span className="font-semibold text-gray-800">Size:</span> {room.sqft}{" "}
          square feet
        </li>
        <li>
          <span className="font-semibold text-gray-800">Availability:</span>{" "}
          {room.availability}
        </li>
        <li>
          <span className="font-semibold text-gray-800">Capacity:</span>{" "}
          {room.capacity}
        </li>
        <li>
          <span className="font-semibold text-gray-800">Price:</span> $
          {room.price_per_hour}/hour
        </li>
        <li>
          <span className="font-semibold text-gray-800">Address:</span>{" "}
          {room.address}
        </li>
        <li>
          <span className="font-semibold text-gray-800">Location:</span>{" "}
          {room.location}
        </li>
      </ul>
    </>
  );
};

export default Description;
