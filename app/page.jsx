import rooms from "@/data/rooms.json";
import Heading from "@/components/Heading";
import RoomCard from "@/components/RoomCard";

export default function Home() {
  return (
    <>
      <Heading title="Available rooms" />
      {rooms.length > 0 ? (
        rooms.map(room => <RoomCard key={room.$id} room={room} />)
      ) : (
        <h1>no rooms</h1>
      )}
    </>
  );
}
