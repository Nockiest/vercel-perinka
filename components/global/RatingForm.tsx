import React, { useState } from "react";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { auth, fanArticleColRef, opinionColRef } from "../../firebase"; // Replace with your actual Firebase config
import LoginButton from "./LoginButton"; // Import your LoginButton component here

interface RatingFormProps {
  onClose: () => void;
}

interface FormObject {
  name: string;
  className: string;
  articleRead: string;
  opinion: string;
}

const RatingForm: React.FC<RatingFormProps> = ({ onClose }) => {
  const [form, setForm] = useState<FormObject>({
    name: "",
    className: "",
    articleRead: "",
    opinion: "",
  });

  const user = auth.currentUser; // Initial user state based on current authentication status

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;



    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if all fields are filled out
    if (!form.name || !form.className || !form.articleRead || !form.opinion) {
      alert("Please fill out all form fields");
      return;
    } else if (!user) {
      alert("Přihlaš se pro zaslání formuláře");
      return;
    }

    const postId = uuidv4();
    const timeStamp = serverTimestamp();
    const docRef = await addDoc(opinionColRef, {
      ...form,
      postId,
      timeStamp,
      userEmail: user.email, // Include the email of the authenticated user
    });

    // Alert the user that the form was sent
    alert("Formulář poslán redakci!");

    // Reset the form fields
    setForm({
      name: "",
      className: "",
      articleRead: "",
      opinion: "",
    });

    // Close the form after submission
    onClose();
  };

  return (
    <div className="rating-form-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-primary-color-80 via-background-start-rgb to-background-end-rgb">
      <div className="rating-form-container p-8 rounded-md shadow-lg bg-white">
        <h2 className="text-2xl font-bold text-text-color mb-4">Rate the Article</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-text-color mb-1">
              Jméno a Příjmení:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border border-text-color p-2 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="class" className="text-text-color mb-1">
              Třída:
            </label>
            <input
              type="text"
              id="class"
              name="className"
              value={form.className}
              onChange={handleChange}
              className="border border-text-color p-2 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="article" className="text-text-color mb-1">
              Article Read:
            </label>
            <input
              type="text"
              id="article"
              name="articleRead"
              value={form.articleRead}
              onChange={handleChange}
              className="border border-text-color p-2 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="opinion" className="text-text-color mb-1">
              Tvůj názor:
            </label>
            <textarea
              id="opinion"
              name="opinion"
              value={form.opinion}
              onChange={handleChange}
              className="border border-text-color p-2 rounded-md"
              required
            />
          </div>

          {user ? (
            <button
              type="submit"
              className="bg-primary-color text-white py-2 px-4 rounded-md transition duration-300 hover:bg-primary-color-80"
            >
              Odeslat
            </button>
          ) : (
            <LoginButton />
          )}
        </form>
      </div>
    </div>
  );
};



export default RatingForm;
