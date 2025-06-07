import { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [uploadUrl, setUploadUrl] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setUploadUrl('');
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.url) {
        setUploadUrl(data.url);
      } else {
        setError(data.error || 'Upload failed');
      }
    } catch (err) {
      setError('Upload failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} />
      <button type="submit">Upload</button>
      {uploadUrl && (
        <div>
          <p>File uploaded! <a href={uploadUrl} target="_blank" rel="noopener noreferrer">View file</a></p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default FileUpload;