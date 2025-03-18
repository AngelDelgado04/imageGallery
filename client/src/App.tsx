import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/images?query=art`)
      .then((res) => setImages(res.data.photos))
      .catch((error) => console.error("Error al obtener imágenes", error));
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
