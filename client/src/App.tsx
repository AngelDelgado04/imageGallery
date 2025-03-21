import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-500">{message}</h1>
    </div>
  );
}

export default App;
