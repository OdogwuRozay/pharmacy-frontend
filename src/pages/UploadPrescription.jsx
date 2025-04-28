import { useState } from 'react';

function UploadPrescription() {
  const [file, setFile] = useState(null);

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!file) {
      alert('Please select a prescription file first!');
      return;
    }

    alert(`✅ Prescription "${file.name}" uploaded successfully!`);
    setFile(null); // Clear the file after upload
  }

  return (
    <div style={{ padding: '40px 20px' }}>
      <h1>Upload Your Prescription</h1>

      <form onSubmit={handleSubmit} style={{
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        <input 
          type="file" 
          accept="image/*,application/pdf" 
          onChange={handleFileChange}
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: '300px'
          }}
        />

        <button 
          type="submit"
          style={{
            backgroundColor: '#0a74da',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Submit Prescription
        </button>
      </form>
    </div>
  );
}

export default UploadPrescription;
