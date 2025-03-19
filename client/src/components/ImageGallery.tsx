import React from "react";
import ImageCard from "./ImageCard";

interface ImageGalleryProps {
  images: Array<{ id: number; src: { medium: string }; alt: string }>;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ml-8">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageGallery;
