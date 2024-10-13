const BookForm = () => {
  return (
    <form className="p-4 border-2 rounded-xl md:col-span-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="check_in_date"
            className="block text-sm font-medium text-gray-700"
          >
            Check-In Date
          </label>
          <input
            type="date"
            id="check_in_date"
            name="check_in_date"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="check_in_time"
            className="block text-sm font-medium text-gray-700"
          >
            Check-In Time
          </label>
          <input
            type="time"
            id="check_in_time"
            name="check_in_time"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="check_out_date"
            className="block text-sm font-medium text-gray-700"
          >
            Check-Out Date
          </label>
          <input
            type="date"
            id="check_out_date"
            name="check_out_date"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="check_out_time"
            className="block text-sm font-medium text-gray-700"
          >
            Check-Out Time
          </label>
          <input
            type="time"
            id="check_out_time"
            name="check_out_time"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            required
          />
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-700 focus:outline-none"
        >
          Book Room
        </button>
      </div>
    </form>
  );
};

export default BookForm;
