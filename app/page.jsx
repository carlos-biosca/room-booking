import HomeGallery from "@/components/HomeGallery";
import HomeText from "@/components/HomeText";

export default async function Home() {
  return (
    <>
      <h1 className="mb-6 text-4xl font-semibold">
        Meeting Rooms <span className="text-xl">for</span>{" "}
        <span className="text-2xl">Booking</span>
      </h1>
      <HomeGallery />
      <HomeText />
    </>
  );
}
