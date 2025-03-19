import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";

function App() {
  const [images, setImages] = useState<
    Array<{ id: number; src: { medium: string }; alt: string }>
  >([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/images?query=fascism`)
      .then((res) => setImages(res.data.photos))
      .catch((error) => console.error("Error al obtener imágenes", error));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <ImageGallery images={images}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
