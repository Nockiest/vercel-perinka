"use client";
import { useState, ChangeEvent } from 'react';
import  Link  from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { serverTimestamp, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { fanArticleColRef, storage } from '../../firebase'; // Replace with your actual Firebase config
import { useRouter } from "next/navigation";

interface CreatePostProps {
  isAuth: boolean;
}

const CreatePost: React.FC<CreatePostProps> = ({ isAuth }) => {
  const router = useRouter()
  const [title, setTitle] = useState<string>("");
  const [postText, setPostText] = useState<string>("");
  const [author, setAuthor] = useState<string>('');
  const [imageUpload, setImageUpload] = useState<File | null>(null);

  const createPost = async (): Promise<void> => {
    const postId = uuidv4();
    const timeStamp = serverTimestamp();
    console.log('creating post');

    try {
      // Validate required fields
      if (!title || !postText || !imageUpload) {
        alert('Vyplň prosím všechna pole');
        return;
      }

      // Create the blog post document
      const docRef = await addDoc(fanArticleColRef, {
        title,
        postText,
        postId,
        timeStamp,
      });

      uploadFile(postId);
      setTitle("");
      setPostText("");
      setAuthor('');

      // Show alert with post contents
      const alertMessage = `Titulek: ${title}\n Obsah: ${postText}\n`;
      alert(`Článek úspěšně zaslán do databáze! S trochou štěstí se objeví v následujícím čísle :-)\n\n${alertMessage}`);
      // Redirect to the home page
      router.push('/');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };


  const uploadFile = (postId: string): void => {
    if (!imageUpload) return;
    const imageRef = ref(storage, `images/${postId}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
      });
    });
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      setImageUpload(event.target.files[0]);
    }
  };

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Napsat Článek</h1>
        <div className="inputGp">
          <label>Titulek:</label>
          <input
            placeholder="Title..."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="inputGp">
          <label>Obsah:</label>
          <textarea
            placeholder="Post..."
            value={postText}
            onChange={(event) => setPostText(event.target.value)}
          />
        </div>

        <div className="inputGp">
          <label>Obrázek ke článku:</label>
          <input
            type="file"
            onChange={handleImageChange}
          />
        </div>
        <button className='action-button' onClick={createPost}>Odeslat Článek</button>

      </div>
    </div>
  );
}


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
