import React, { useState } from 'react';

const Documents = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Here, you would typically send the file to your backend API
      console.log('Uploading file:', selectedFile.name);
      // Reset the selected file after upload
      setSelectedFile(null);
    }
  };

  return (
    <div className="documents">
      <h2>Documents</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload Document
      </button>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div>
  );
};

export default Documents;
