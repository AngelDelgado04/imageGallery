export const fetchImages = async (query = "art") => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/images?query=${query}`
      );
  
      if (!response.ok) {
        throw new Error("Error obtaining images.");
      }
  
      const data = await response.json();
      return data.photos; 
    } catch (error) {
      console.error("Error obtaining images:", error);
      return []; 
    }
  };
  