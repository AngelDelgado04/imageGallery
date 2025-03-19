import React from "react";

interface ImageCardProps {
    image: { src: { medium: string }; alt: string };
  }
  
  const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
    return (
      <div className="card bg-base-200 shadow-lg rounded-lg overflow-hidden hover:translate-1 hover:shadow-accent">
        <img
          src={image.src.medium}
          alt={image.alt}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <p className="text-center font-semibold">{image.alt || "Sin título"}</p>
        </div>
      </div>
    );
  };
  
  export default ImageCard;
  
