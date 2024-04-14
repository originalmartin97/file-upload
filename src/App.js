import './App.css';
import { useState } from 'react';
import { storage } from './firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';


function App() {
  const [fileUpload, setFileUpload] = useState(null);
const uploadFile = () => {
  if (fileUpload == null) return;
  const fileRef = ref (storage, `files/${fileUpload.name + v4()}`);
  uploadBytes(fileRef, fileUpload).then(() => {
    alert('File uploaded');
  });


};

  return (
    <div className="App">
      <input
        type='file' 
        onChange={ (event) => {
          setFileUpload(event.target.files[0])
        }}
      />
      <button onClick={uploadFile}>Upload file</button>
    </div>
  );
}

export default App;
