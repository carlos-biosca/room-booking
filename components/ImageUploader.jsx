"use client";

import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import Image from "next/image";

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      setImage({
        name: file.name,
        file: URL.createObjectURL(file)
      });
    }
  };

  const handleImageDelete = () => {
    setImage(null);
  };

  return (
    <div className="mb-4">
      <p className="block mb-2 font-bold text-gray-700">Image</p>
      <div className="flex justify-between items-center">
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          className="hidden px-3 py-2 border rounded w-full"
          onChange={handleImageChange}
        />
        <label
          className="inline-block bg-gray-700 hover:bg-gray-500 px-4 py-2 rounded w-auto text-white text-center"
          htmlFor="image"
        >
          Select Image
        </label>
        {image ? (
          <button
            className="flex items-center py-1 pr-2 border border-red-500 rounded text-red-500 cursor-pointer"
            type="button"
            onClick={handleImageDelete}
          >
            <TiDelete className="mx-1 w-8 h-8" />
            <span>Remove Image</span>
          </button>
        ) : null}
      </div>
      <>
        <div className="relative mt-4 w-auto h-32 md:h-96">
          <Image
            src={image ? image?.file : "/images/default-image.jpg"}
            fill
            className="object-cover"
            alt={image ? image?.name : "empty room image"}
          />
        </div>
        <p className="h-6 overflow-hidden truncate">
          {image ? image.name : null}
        </p>
      </>
    </div>
  );
};

export default ImageUploader;
