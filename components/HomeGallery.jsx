import Image from "next/image";

const HomeGallery = () => {
  return (
    <section className="gap-5 grid grid-cols-4 grid-rows-2 h-auto md:h-[40vh] xl:h-[60vh]">
      <Image
        className="col-span-4 md:col-span-3 lg:col-span-2 row-span-2 rounded-lg md:rounded-3xl w-auto h-full object-cover"
        src="/images/benjamin-child-GWe0dlVD9e0-unsplash.jpg"
        alt="image gallery 1"
        priority
      />
      <Image
        className="hidden lg:block col-span-1 row-span-2 rounded-3xl w-auto h-full object-cover"
        src="/images/kyle-nieber-8z805WwAZyA-unsplash.jpg"
        alt="image gallery 2"
        priority
      />
      <Image
        className="hidden md:block col-span-1 row-span-1 rounded-3xl w-auto h-full object-cover"
        src="/images/mars-plex-Dbl5UilMGIQ-unsplash.jpg"
        alt="image gallery 3"
        priority
      />
      <Image
        className="hidden md:block col-span-1 row-span-1 rounded-3xl w-auto h-full object-cover"
        src="/images/michael-fousert-RNsKphkdBTk-unsplash.jpg"
        alt="image gallery 4"
        priority
      />
    </section>
  );
};

export default HomeGallery;
