import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";
import ThemeLayout from "../components/ThemeLayout";
import axios from "axios";

function Home() {
  const { theme, updateTheme } = useContext(ThemeContext);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post("http://localhost:3000/file/upload", formData)
      .then((response) => {
        console.log(response.data); // Log success message
        // Optionally, you can do something after successful upload
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <ThemeLayout>
      <h3>Home</h3>
      <h2>Upload a File</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </ThemeLayout>
  );
}

export default Home;
