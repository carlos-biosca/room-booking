import Image from "next/image";

import gallery1 from "@/public/images/benjamin-child-GWe0dlVD9e0-unsplash.jpg";
import gallery2 from "@/public/images/kyle-nieber-8z805WwAZyA-unsplash.jpg";
import gallery3 from "@/public/images/mars-plex-Dbl5UilMGIQ-unsplash.jpg";
import gallery4 from "@/public/images/michael-fousert-RNsKphkdBTk-unsplash.jpg";

const HomeGallery = () => {
  return (
    <section className="h-auto md:h-[40vh] xl:h-[60vh] grid grid-cols-4 grid-rows-2 gap-5">
      <Image
        className="h-full w-auto col-span-4 md:col-span-3 lg:col-span-2 row-span-2 object-cover rounded-lg md:rounded-3xl"
        src={gallery1}
        alt="image gallery 1"
        priority
      />
      <Image
        className="h-full w-auto hidden lg:block col-span-1 row-span-2 object-cover rounded-3xl"
        src={gallery2}
        alt="image gallery 2"
        priority
      />
      <Image
        className="h-full w-auto hidden md:block col-span-1 row-span-1 object-cover rounded-3xl"
        src={gallery3}
        alt="image gallery 3"
        priority
      />
      <Image
        className="h-full w-auto hidden md:block col-span-1 row-span-1 object-cover rounded-3xl"
        src={gallery4}
        alt="image gallery 4"
        priority
      />
    </section>
  );
};

export default HomeGallery;
