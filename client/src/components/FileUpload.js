import React from 'react';
import axios from 'axios';

const FileUpload = () => {

  const onChange = async e => {
    const formData = new FormData(); 
    formData.append('file', e.target.files[0]);

    try {
      await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <input type='file' onChange={onChange} />
    </div>
  );
};

export default FileUpload;