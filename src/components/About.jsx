import React from "react";
import { useState } from "react";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";

const About = () => {
  return (
    <div>
      <div>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
          aliquam purus, ut posuere nisl blandit vitae. Integer euismod ultrices
          massa, at ultricies mauris consequat ut. Vivamus non malesuada nisi.
          Suspendisse potenti. Proin nec justo sit amet eros suscipit aliquam.
          Aliquam erat volutpat. Fusce feugiat, ipsum vel tincidunt eleifend,
          nunc arcu ultrices lectus, a congue neque leo eget justo. Quisque non
          turpis est. Proin consectetur massa vitae mauris sodales, ut tristique
          urna ultrices. Nam sed odio at libero tempus hendrerit.
        </p>
        <p>
          Nullam hendrerit, odio eu luctus malesuada, eros velit vestibulum
          justo, nec facilisis nisi tortor non metus. Pellentesque tincidunt,
          tortor nec rutrum placerat, metus mauris sollicitudin purus, non
          ullamcorper quam eros in libero. Nam id purus ac sapien faucibus
          interdum. In hac habitasse platea dictumst. Sed vestibulum, purus ut
          vulputate dignissim, libero metus tincidunt justo, ut tristique ipsum
          sem id eros. Vivamus ultrices libero in justo bibendum blandit.
        </p>
      </div>
      {/* <FileInput /> */}
      <FileUploadButton />
    </div>
  );
};

export default About;

const FileInput = () => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    // Do whatever you want with the selected file
  };

  return (
    <div>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput">
        <button>Choose File</button>
      </label>
    </div>
  );
};

const FileUploadButton = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleButtonClick = () => {
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const fileRef = ref(storage, `images/${selectedFile.name + uuidv4()}`);
    uploadBytes(fileRef, selectedFile)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log("File uploaded:", url);
          // You can handle the URL as needed, like saving it in state or passing it to another component
        });
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        // Handle error if any
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button className="mx-auto block mb-10" onClick={handleButtonClick}>
        Upload
      </button>
    </div>
  );
};
