import HomeGallery from "@/components/HomeGallery";
import HomeText from "@/components/HomeText";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <h1 className="mb-3 text-2xl md:text-4xl font-semibold">
        Meeting Rooms App
      </h1>
      <HomeGallery />
      <Link
        href="/register"
        className="block bg-gray-700 text-white px-4 py-3 sm:py-2 mt-4 rounded w-full sm:w-auto text-center hover:bg-gray-500"
      >
        Create a FREE account!
      </Link>
      <HomeText />
    </>
  );
}
