import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";

function App() {
  const [images, setImages] = useState<
    Array<{ id: number; src: { medium: string }; alt: string }>
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/images?query=fascism`)
      .then((res) => {
        setImages(res.data.photos);
        setError("");
      })
      .catch((error) => {
        console.error("Error obtaining images.", error);
        setError("The images could not be loaded. Please try again later.");
      })
      .finally(() => setLoading(false));
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
