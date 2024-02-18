/* eslint-disable react/prop-types */
import React from "react";
import "./MoreArtWorks.css"; // Import your custom CSS file
import "firebase/firestore";
import { useState, useEffect } from "react";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import PropTypes from "prop-types";

const artworks = "artworks";

const findAll = async () => {
  const doc_refs = await getDocs(collection(db, artworks));

  const res = [];

  doc_refs.forEach((artwork) => {
    res.push({
      id: artwork.id,
      ...artwork.data(),
    });
  });

  return res;
};

function MoreArtWorks({ textLeave, textEnter }) {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [artworks, setArtworks] = useState([]);

  const fetchData = async () => {
    setLoading(true);

    const res = await findAll();

    setArtworks([...res]);
    setLoading(false);
    console.log(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleImageUrlChange = (url) => {
    setImageUrl(url);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let temp = artworks;

  return (
    <div
      className="pt-[10rem] mb-[12rem]"
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
    >
      <div
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="flex justify-center max-sm:text-3xl max- items-center text-5xl mb-10"
      >
        Artworks Collection
      </div>
      <div
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="flex flex-wrap justify-center p-5 "
      >
        {temp.map((item, index) => (
          <div
            key={index}
            className="card cursor-pointer overflow-visible my-3 min-w-[500px] max-sm:min-w-[360px]"
          >
            <div className="card-inner">
              <img
                src={item.img}
                alt={item.title}
                className="card-image scale-[90%] rounded-lg"
              />
              <div className="card-content rounded-lg flex flex-col justify-between items-center">
                <div
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className="flex gap-5 flex-col items-center"
                >
                  <h3 className="card-title text-4xl font-bold max-sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="card-description max-sm:text-sm">
                    {item.description}
                  </p>
                </div>
                <div
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className="text-lg gap-3 flex flex-col items-center "
                >
                  <div className="max-sm:text-sm">
                    <span>Created By - </span>
                    <span>{item.made_by}</span>
                  </div>
                  <div className="flex gap-3 ">
                    <a
                      href={item.linkedin}
                      className="text-white hover:text-white "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>
                    </a>
                    <a
                      href={item.instagram}
                      className="text-white hover:text-white "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                    </a>
                  </div>
                  <div>{item.date}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <FileUploadButton onImageUrlChange={handleImageUrlChange} />
        <FirestoreForm imageUrl={imageUrl} />
      </div>
    </div>
  );
}

const FileUploadButton = ({ onImageUrlChange }) => {
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
          alert("Image Uploaded !");
          const imageUrl = url;
          onImageUrlChange(imageUrl);
        });
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  return (
    <div className="file-upload-container">
      <h2>Submit Your Own Artwork !</h2>
      <br />
      <input type="file" onChange={handleFileChange} className="file-input" />
      <button className="upload-button" onClick={handleButtonClick}>
        Upload
      </button>
    </div>
  );
};

function FirestoreForm({ imageUrl }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [made_by, setMadeBy] = useState("");
  const [date, setDate] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!imageUrl) {
      alert("Please upload an image first.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "artworks"), {
        title,
        description,
        made_by,
        instagram,
        linkedin,
        date,
        img: imageUrl,
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Artwork added successfully!");

      setTitle("");
      setDate("");
      setDescription("");
      setMadeBy("");
      setInstagram("");
      setLinkedin("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error adding document: ", error);
    }
  };

  return (
    <div className="centered-container">
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Your Name:
            <input
              type="text"
              value={made_by}
              onChange={(e) => setMadeBy(e.target.value)}
            />
          </label>
          <label>
            Instagram:
            <input
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </label>
          <label>
            LinkedIn:
            <input
              type="text"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </label>
          <label>
            Date:
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

FirestoreForm.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default MoreArtWorks;
