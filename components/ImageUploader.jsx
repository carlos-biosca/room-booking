"use client";

import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import Image from "next/image";
import defaultImage from "@/public/images/default-image.jpg";

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
      <p className="block text-gray-700 font-bold mb-2 ">Image</p>
      <div className="flex justify-between items-center">
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          className="border rounded w-full py-2 px-3 hidden"
          onChange={handleImageChange}
        />
        <label
          className="inline-block bg-gray-700 text-white px-4 py-2 rounded w-auto text-center hover:bg-gray-500"
          htmlFor="image"
        >
          Select Image
        </label>
        {image ? (
          <button
            className="flex items-center text-red-500 border border-red-500 py-1 pr-2 cursor-pointer rounded"
            type="button"
            onClick={handleImageDelete}
          >
            <TiDelete className="h-8 w-8 mx-1" />
            <span>Remove Image</span>
          </button>
        ) : null}
      </div>
      <>
        <div className="h-32 md:h-96 w-auto mt-4 relative">
          <Image
            src={image ? image?.file : defaultImage}
            fill
            className="object-cover"
            alt={image ? image?.name : "empty room image"}
          />
        </div>
        <p className="h-6 truncate overflow-hidden">
          {image ? image.name : null}
        </p>
      </>
    </div>
  );
};

export default ImageUploader;
