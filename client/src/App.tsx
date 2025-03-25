import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";
import { fetchImages } from "./api/images";

function App() {
  const [images, setImages] = useState<
    Array<{ id: number; src: { medium: string }; alt: string }>
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getImages = async () => {
      setLoading(true);
      try {
        const photos = await fetchImages("art");
        setImages(photos);
        setError("");
      } catch (error) {
        console.error("Error fetching images:", error);
        setError(" images could not be loaded. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    getImages();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <main className="flex-1 pt-16 px-4">
        {loading ? (
          <div className="flex justify-center">
            <p className="text-center text-lg text-secundary pr-4">Loading images</p>
            <span className="loading loading-spinner text-accent"></span>
          </div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <ImageGallery images={images} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
