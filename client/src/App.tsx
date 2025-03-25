import { useEffect, useState } from "react";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import axios from "axios";
=======
=======
>>>>>>> Stashed changes
import Navbar from "./components/Navbar";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";
import { fetchImages } from "./api/images";
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/images?query=art`)
      .then((res) => setImages(res.data.photos))
      .catch((error) => console.error("Error al obtener imágenes", error));
=======
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((img) => (
        <img key={img.id} src={img.src.medium} alt={img.photographer} className="rounded-lg shadow-lg" />
      ))}
    </div>
  );
}

export default App;
