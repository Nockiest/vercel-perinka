import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { FirebaseInfoPostContent } from "../../type/types";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import InfoPost from "./InfoPost";
import UniversalForm from "../../components/global/UniversalForm";

const defaultFormData: FirebaseInfoPostContent = {
  title: "",
  textContent: "",
  author: "",
  image: {
    src: "",
    position: "left",
    alt: "",
    size: { x: 0, y: 0 },
  },
  imageUrlOrId: 'file',
  releaseDate: '2/2023'
};

const ArticleEditor = ({ onAddArticle }) => {
  const [formData, setFormData] = useState<FirebaseInfoPostContent>({
    ...defaultFormData,
  });
  const [imageUpload, setImageUpload] = useState<File | null>(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageInputChange = (e) => {
    const { name, files, value } = e.target;
    console.log("fired");
    if (name === "file" && files.length > 0) {
      console.log(1, name, value);
      const file = files[0];
      const fileId = uuidv4(); // Generate a unique ID for the image file
      setFormData((prevData) => ({
        ...prevData,
        image: {
          ...prevData.image,
          imgSource: fileId, // Set imgSource to the unique ID
        },
      }));
      setImageUpload(file); // Save the file and its unique ID
    } else if (name.includes(".")) {
      console.log(2, name, value);
      const imageProperty = name.split(".")[0];
      setFormData((prevData) => ({
        ...prevData,
        image: {
          ...prevData.image,
          [imageProperty]: {
            ...prevData.image[imageProperty],
            [name.split(".")[1]]: value,
          },
        },
      }));
    } else {
      console.log(3, name, value);
      setFormData((prevData) => ({
        ...prevData,
        image: {
          ...prevData.image,
          [name]: value,
        },
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the article data to Firestore
      const articlesCollection = collection(db, "articleSummaries");
      const newArticleRef = await addDoc(articlesCollection, formData);
      console.log(formData);
      console.log(newArticleRef.id);
      console.log(imageUpload);

      // Upload the image to Firebase Storage and update imgSource with the corresponding ID
      if (imageUpload) {
        const postId = newArticleRef.id;
        const imageRef = ref(storage, `images/${postId}`);
        await uploadBytes(imageRef, imageUpload);
        const downloadURL = await getDownloadURL(imageRef);

        setFormData((prevData) => ({
          ...prevData,
          image: {
            ...prevData.image,
            src: downloadURL,
          },
        }));
      }

      // Notify the parent component about the new article
      onAddArticle(newArticleRef.id);

      // Reset form data after successful submission
      setFormData({ ...defaultFormData });

      // Clear the file input
      setImageUpload(null);
    } catch (error) {
      console.error("Error adding article:", error);
    }
  };

  return (
    <div className="p-4 md:my-2 mx-0 md:mx-10 flex flex-col   items-center justify-center gap-8">
      {/* <UniversalForm inputData={defaultFormData} onSubmit={handleSubmit}/> */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-text-color mb-1">
            Nadpis:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="border border-text-color p-2 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="textContent" className="text-text-color mb-1">
            Shrnutí článku pro stránku aktuální číslo:
          </label>
          <textarea
            id="textContent"
            name="textContent"
            value={formData.textContent}
            onChange={handleInputChange}
            className="border border-text-color p-2 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="position" className="text-text-color mb-1">
            pozice obrázku na stránce aktuální číslo:
          </label>
          <select
            name="position"
            value={formData.image.position}
            onChange={handleImageInputChange}
            className="border border-text-color p-2 rounded-md"
          >
            <option value="left">Nalevo</option>
            <option value="right">Napravo</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="alt" className="text-text-color mb-1">
            Image Alt:
          </label>
          <input
            type="text"
            id="alt"
            name="alt"
            value={formData.image.alt}
            onChange={handleImageInputChange}
            className="border border-text-color p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="size.x" className="text-text-color mb-1">
            Image Size (X):
          </label>
          <input
            type="number"
            id="size.x"
            name="size.x"
            value={formData.image.size.x}
            onChange={handleImageInputChange}
            className="border border-text-color p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="size.y" className="text-text-color mb-1">
            Image Size (Y):
          </label>
          <input
            type="number"
            id="size.y"
            name="size.y"
            value={formData.image.size.y}
            onChange={handleImageInputChange}
            className="border border-text-color p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="author" className="text-text-color mb-1">
            Author:
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            className="border border-text-color p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="image" className="text-text-color mb-1">
            Image URL:
          </label>
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image" className="text-text-color mb-1">
            Vydání Článku:
          </label>
          <select name="releaseDate" onChange={handleInputChange}>
            <option value="2/2023">2/2023</option>
            <option value="4/2023">4/2023</option>
            <option value="6/2023">6/2023</option>
            <option value="6/2023">9/2023</option>
          </select>


        </div>

        <button
          type="submit"
          className="bg-primary-color text-white py-2 px-4 rounded-md transition duration-300 hover:bg-primary-color-80"
        >
          Add Article
        </button>
      </form>
      {/* <InfoPost
        image={formData.image}
        textContent={formData.textContent}
        title={formData.title}
        author={formData.author}
        imageUrlOrId={imageUpload|| ''}
      /> */}
    </div>
  );
};

export default ArticleEditor;
