
import React, { useCallback } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';


export default function DropComponent() {
const onDrop = useCallback(acceptedFiles => {
  alert(acceptedFiles[0].name)
  console.log("Now you can do anything with"+
              " this file as per your requirement")
}, [])

const { getInputProps, getRootProps } = useDropzone({ onDrop })

return (
  <div className="border-dashed p-28 mt-20 border-2 w-1/8 h-32 rounded flex justify-center items-center" style={{ display: 'block', width: 290, padding: 30 }}>
  
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>drag-and-drop the file here!!</p>
    </div>
  </div>
);

}