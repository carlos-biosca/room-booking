import Link from "next/link";

const HomeText = () => {
  return (
    <article className="mt-4">
      <p className="text-lg mb-4">
        <span className="text-xl text-red-600 font-bold">Rooms</span> is the
        ultimate solution for efficient meeting room management. Our intuitive
        app simplifies the booking process, enhances productivity, and optimizes
        your workspace utilization.
      </p>

      <h2 className="text-xl font-semibold mb-2">Key Features</h2>
      <section className="mb-5">
        <div className="mb-4">
          <h3 className="text-md font-semibold">Add Rooms</h3>
          <p>
            Share your meeting spaces and their availability. Fill the form to
            provide the best information to all platform users.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-md font-semibold">Effortless Booking</h3>
          <p>
            Book rooms in seconds with our user-friendly interface. Check
            real-time availability and reserve spaces with just a few simple
            steps.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-md font-semibold">Room manage</h3>
          <p>
            Review your room list or remove the workspaces that are not
            available anymore.
          </p>
        </div>
        <div className="mb-4 ">
          <h3 className="text-md font-semibold">Cancel Bookings</h3>
          <p>
            Check your booking list at any time. View the room information or
            cancel bookings if you needed.
          </p>
        </div>
      </section>

      <h2 className="text-xl font-semibold mb-2">Benefits</h2>
      <ul className="list-disc pl-6 mb-5 space-y-2 child:text-gray-800">
        <li>
          <strong>Time-Saving</strong>: Eliminate back-and-forth emails and
          phone calls for room reservations.
        </li>
        <li>
          <strong>Increased Productivity</strong>: Find and book available rooms
          quickly, reducing meeting delays.
        </li>
        <li>
          <strong>Cost-Effective</strong>: Maximize room utilization and
          identify underused spaces.
        </li>
        <li>
          <strong>User-Friendly</strong>: Intuitive design ensures high adoption
          rates across your organization.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">
        Why Choose <span className="text-xl text-red-600 font-bold">Rooms</span>
        ?
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-2 child:text-gray-800">
        <li>
          <strong>Scalability</strong>: Grows with your business, from small
          offices to large enterprises.
        </li>
        <li>
          <strong>Customization</strong>: Tailor the app to fit your unique
          workspace needs.
        </li>
        <li>
          <strong>Reliable Support</strong>: Our dedicated team ensures smooth
          implementation and ongoing assistance.
        </li>
      </ul>

      <p className="mb-6">
        Transform your workplace with Rooms. Say goodbye to booking headaches
        and hello to a more organized, efficient future.
      </p>

      <Link
        href="/rooms/add"
        className="block sm:inline-block bg-gray-700 text-white px-4 py-3 sm:py-2 rounded w-full sm:w-auto text-center hover:bg-gray-500"
      >
        Get Started with Rooms
      </Link>
    </article>
  );
};

export default HomeText;
