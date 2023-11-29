"use client";
import { useState, ChangeEvent, FC, useEffect } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { serverTimestamp, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, fanArticleColRef, storage } from "../../firebase"; // Replace with your actual Firebase config
import { useRouter } from "next/navigation";
import LoginButton from "../../components/global/LoginButton";
import { onAuthStateChanged, signInWithEmailAndPassword } from "@firebase/auth";
import LogOutBtn from "../../components/global/LogOutBtn";

const CreatePost = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [postText, setPostText] = useState<string>("");
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [user, setUser] = useState(auth.currentUser); // Initial user state based on current authentication status

  useEffect(() => {
    // Listen for changes in authentication status
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array to run the effect only once

  const createPost = async (): Promise<void> => {
    if (!user) {
      console.log("User not authenticated. Redirecting to login page.");
      router.push("/login");
      return;
    }

    const postId = uuidv4();
    const timeStamp = serverTimestamp();

    try {
      // Validate required fields
      if (!title || !postText || !imageUpload) {
        alert("Vyplň prosím všechna pole");
        return;
      }

      // Create the blog post document with user email
      const docRef = await addDoc(fanArticleColRef, {
        title,
        postText,
        postId,
        timeStamp,
        userEmail: user.email, // Include the email of the authenticated user
      });

      setTitle("");
      setPostText("");
      // setAuthor("");

      // Show alert with post contents
      const alertMessage = `Titulek: ${title}\n Obsah: ${postText}\n`;
      alert(
        `Článek úspěšně zaslán do databáze! S trochou štěstí se objeví v následujícím čísle :-)\n\n${alertMessage}`
      );

      // Redirect to the home page
      router.push("/");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      setImageUpload(event.target.files[0]);
    }
  };

  return (
    <div className="createPostPage flex flex-col items-center h-screen bg-gray-100">
      <div className="mt-16 cpContainer p-8 bg-white rounded-md shadow-md w-1/2">
        <h1 className="text-3xl mb-4">Napsat Článek</h1>
        <div className="inputGp mb-4">
          <label className="block text-gray-700">Titulek:</label>
          <input
            type="text"
            placeholder="Nadpis..."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
            maxLength={100}
          />
        </div>
        <div className="inputGp mb-4">
          <label className="block text-gray-700">Obsah:</label>
          <textarea
            placeholder="Obsah článku..."
            value={postText}
            onChange={(event) => setPostText(event.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
            maxLength={4000}
            rows={6}
          />
        </div>

        <div className="inputGp mb-4">
          <label className="block text-gray-700">Obrázek ke článku:</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        {user ? (
          <div>
            <button className="action-button" onClick={createPost}>
              Odeslat Článek
            </button>
            <LogOutBtn />
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
};

export default CreatePost;

{
  /* <div className="inputGp">
          <label>Tags:</label>
          <div className="tagsInput">
            {selectedTags.map((tag) => (
              <div key={tag} className="tagChip">
                {tag}
                <button
                  className="removeTagButton"
                  onClick={() => handleRemoveTag(tag)}
                >
                  &times;
                </button>
              </div>
            ))}
            <input
              placeholder="Add tags..."
              value={tags.join(", ")}
              onChange={handleTagChange}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleAddTag();
                }
              }}
            />
          </div>
        </div> */
}
{
  /* <div className="inputGp">
          <label>Category:</label>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            <option value="ChatGPT">ChatGPT</option>
            <option value="Life">Life</option>
            <option value="Coding">Coding</option>
          </select>
        </div> */
}
//   tags: selectedTags,
//   category: selectedCategory,
//   const [tags, setTags] = useState([]);
//   const [selectedTags, setSelectedTags] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");

//   const handleTagChange = (event) => {
//     const enteredTags = event.target.value.split(",").map((tag) => tag.trim());
//     setTags(enteredTags);
//   };

//   const handleAddTag = () => {
//     if (tags.length > 0 && !selectedTags.includes(tags[0])) {
//       setSelectedTags((prevTags) => [...prevTags, tags[0]]);
//       setTags([]);
//     }
//   };

//   const handleRemoveTag = (tag) => {
//     setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
//   };

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };
