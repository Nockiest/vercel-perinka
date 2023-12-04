import React, { useState } from "react";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { auth, fanArticleColRef, opinionColRef } from "../../firebase"; // Replace with your actual Firebase config
import LoginButton from "./LoginButton"; // Import your LoginButton component here
// import { FaTimes } from 'react-icons/fa'; // Import the red cross icon from react-icons/fa
import Image from "next/image";

interface RatingFormProps {
  onClose: () => void;
}

interface FormObject {
  name: string;
  className: string;
  ratingType: 'article' | 'magazine';
  articleRead?: string;
  overallOpinion?: string;
  opinion?: string;
}

const RatingForm: React.FC<RatingFormProps> = ({ onClose }) => {
  const [form, setForm] = useState<FormObject>({
    name: "",
    className: "",
    ratingType: 'article',
    articleRead: "",
    overallOpinion: '',
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

    // Check if mandatory fields are filled out based on the rating type
    if (!form.name || !form.className) {
      alert("Please fill out the mandatory fields (Jméno a Příjmení, Třída).");
      return;
    } else if (!user) {
      alert("Přihlaš se pro zaslání formuláře");
      return;
    } else if (form.ratingType === 'article' && !form.articleRead) {
      alert("Please fill out the mandatory field (Názor Na peřinku?).");
      return;
    } else if (form.ratingType === 'magazine' && !form.overallOpinion) {
      alert("Please fill out the mandatory field (Celkový názor na magazín?).");
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
      ratingType: 'article',
      articleRead: "",
      opinion: "",
      overallOpinion: ''
    });

    // Close the form after submission
    onClose();
  };

  return (
    <div className="rating-form-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-primary-color-80 via-background-start-rgb to-background-end-rgb">
      <div className="rating-form-container p-8 rounded-md shadow-lg bg-white">
        <span className="absolute top-16 right-16 cursor-pointer text-red-500" onClick={onClose}>
          {/* Red cross icon */}
          <Image className='select-none' src="/svg/cross.svg" alt="Cross" height={64} width={64} />
        </span>
        <h2 className="text-2xl font-bold text-text-color mb-4">Rate the Article</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-text-color mb-1">
              Jméno a Příjmení<span className="text-red-500">*</span>:
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
              Třída<span className="text-red-500">*</span>:
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
            <label className="text-text-color mb-1">Typ hodnocení<span className="text-red-500">*</span>:</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="ratingType"
                  value="article"
                  checked={form.ratingType === 'article'}
                  onChange={handleChange}
                />
                {' '}
                Článek
              </label>
              <label>
                <input
                  type="radio"
                  name="ratingType"
                  value="magazine"
                  checked={form.ratingType === 'magazine'}
                  onChange={handleChange}
                />
                {' '}
                Magazín
              </label>
            </div>
          </div>

          {form.ratingType === 'article' && (
            <div className="flex flex-col">
              <label htmlFor="article" className="text-text-color mb-1">
                Názor Na peřinku<span className="text-red-500">*</span>:
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
          )}

          {form.ratingType === 'magazine' && (
            <div className="flex flex-col">
              <label htmlFor="overallOpinion" className="text-text-color mb-1">
                Celkový názor na časopis<span className="text-red-500">*</span>:
              </label>
              <input
                type="text"
                id="overallOpinion"
                name="overallOpinion"
                value={form.overallOpinion}
                onChange={handleChange}
                className="border border-text-color p-2 rounded-md"
                required
              />
            </div>
          )}

          <div className="flex flex-col">
            <label htmlFor="opinion" className="text-text-color mb-1">
              Tvůj názor na článek<span className="text-red-500">*</span>:
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

          <button
            type="submit"
            className="bg-primary-color text-white py-2 mx-auto rounded-md transition duration-300 hover:bg-primary-color-80"
          >
            Odeslat
          </button>
        </form>
      </div>
    </div>
  );
};

export default RatingForm;
