import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from 'react-icons/fi';
import { uuid } from 'uuidv4'
import { storage } from '../../firebase/firebase_config';
import { uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage'

const Uploader = ({ setImageUrl, imageUrl }) => {
  const [files, setFiles] = useState();

  useEffect(() => {
    if (files) {
      // setLoading(true)
      const storageRef = ref(storage, `products/${uuid()}`);
      const uploadTask = uploadBytesResumable(storageRef, files);
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          alert(error.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUrl(downloadURL)
            // setLoading(false)
          });
        }
      );
    }
  }, [files])


  return (
    <div className="w-full text-center">
      <div
        className="px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer">
        <input type={"file"} onChange={(e) => { setFiles(e.target.files[0]) }} />
        <span className="mx-auto flex justify-center">
          <FiUploadCloud className="text-3xl text-green-500" />
        </span>
        <p className="text-sm mt-2">Drag your image here</p>
        <em className="text-xs text-gray-400">
          (Only *.jpeg and *.png images will be accepted)
        </em>
      </div>
      <aside className="flex flex-row flex-wrap mt-4">
        {imageUrl && (
          <img
            className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
            src={imageUrl}
            alt="product"
          />
        )}
      </aside>
    </div>
  );
};

export default Uploader;
