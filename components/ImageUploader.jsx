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
    <div className="mb-8">
      <p className="block text-gray-700 font-bold mb-2">Image</p>
      <div className="flex items-center gap-5">
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
          Choose Image
        </label>
        {image ? (
          <button
            className="flex items-center text-red-500 border border-red-500 py-1 pr-2 cursor-pointer rounded"
            type="button"
            onClick={handleImageDelete}
          >
            <TiDelete className="h-8 w-8 mx-1" />
            <span>Remove</span>
          </button>
        ) : (
          "No image selected"
        )}
      </div>
      {image ? (
        <>
          <div className="h-32 md:h-96 w-auto mt-4 relative">
            <Image
              src={image.file}
              fill
              className="object-cover"
              alt={image.name}
            />
          </div>
          <p className="truncate overflow-hidden">{image.name}</p>
        </>
      ) : null}
    </div>
  );
};

export default ImageUploader;
