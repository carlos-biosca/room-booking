import Image from "next/image";

const HomeGallery = () => {
  return (
    <section className="h-auto md:h-[40vh] xl:h-[60vh] grid grid-cols-4 grid-rows-2 gap-5">
      <Image
        className="h-full w-auto col-span-4 md:col-span-3 lg:col-span-2 row-span-2 object-cover rounded md:rounded-3xl"
        src="/images/benjamin-child-GWe0dlVD9e0-unsplash.jpg"
        width={1200}
        height={500}
        alt="room view example"
        priority
      />
      <Image
        className="h-full w-auto hidden lg:block col-span-1 row-span-2 object-cover rounded-3xl"
        src="/images/kyle-nieber-8z805WwAZyA-unsplash.jpg"
        width={500}
        height={500}
        alt="room view example"
        priority
      />
      <Image
        className="h-full w-auto hidden md:block col-span-1 row-span-1 object-cover rounded-3xl"
        src="/images/mars-plex-Dbl5UilMGIQ-unsplash.jpg"
        width={500}
        height={500}
        alt="room view example"
        priority
      />
      <Image
        className="h-full w-auto hidden md:block col-span-1 row-span-1 object-cover rounded-3xl"
        src="/images/michael-fousert-RNsKphkdBTk-unsplash.jpg"
        width={500}
        height={500}
        alt="room view example"
        priority
      />
    </section>
  );
};

export default HomeGallery;
