'use client'
import React, { useState } from 'react';
import { Magazine,ArticleImage, Oppinion, Article } from '../../type/types';
import { v4 as uuidv4 } from "uuid";
import GOClassSelector from '../../components/global/ClassSelector';
import UniversalForm from '../../components/global/universalForn/UniversalForm';
import { db, magazinesColRef, storage } from '../../firebase';
import { addDoc } from 'firebase/firestore';
import { getDownloadURL, uploadBytes } from 'firebase/storage';


const emptyMagazine:Magazine = {
    date: '2023-12-01',
    komiksSrc: 'komiks/1',
    articles: [],
    title: 'title',
  };

  const magazineForm:Omit<Magazine, 'articles'> = {
    date: '2023-12-01',
    komiksSrc: 'komiks/1',

    title: 'title',
  };

  type ArticleForm = {
    author: {
      email: 'text'
      name: 'text'
      class: 'text'
    }
    title: 'title',
    textContent: 'text',
    image: {
      src: 'text',
      alt: 'text',
      position: 'text',
    },
    oppinions: 'array',
    test: 'file'
  }
  const emptyArticle: ArticleForm = {
    author: {
      email: 'text',
      name: 'text',
      class: 'text'
    },
    title: 'title',
    textContent: 'text',
    image: {
      src: 'text',
      alt: 'text',
      position: 'text',
    },
    oppinions: 'array',
    test: 'file'
  };


  const Page = () => {
    const [magazineData, setMagazineData] = useState<Magazine>({ ...emptyMagazine });
    const [currentArticle, setCurrentArticle] = useState<ArticleForm | null>(null);

    const addArticle = (article) => {
      // const newArticle: Article = { ...emptyArticle };
      setMagazineData((prevMagazineData) => ({
        ...prevMagazineData,
        articles: [...prevMagazineData.articles, article],
      }));
      setCurrentArticle( null);
    };


    const handleSubmit = async () => {
      // try {
      //   const magazineCopy = { ...magazineData };

      //   for (const article of magazineCopy.articles) {
      //     if ('file' in article.image) {
      //        const fileId = uuidv4()
      //        const imageRef = ref(storage, `images/${fileId}`);
      //        await uploadBytes(imageRef, article.image);
      //        const downloadURL = await getDownloadURL(imageRef);
      //       article = {...article, fileId}




      //         setFormData((prevData) => ({
      //           ...prevData,
      //           image: {
      //             ...prevData.image,
      //             imgSource: downloadURL,
      //           },
      //         }));

      //     }
      //   }

      //   const docRef = await magazinesColRef.add(magazineCopy);
      //   console.log('Magazine submitted successfully. Document ID:', docRef.id);
      // } catch (error) {
      //   console.error('Failed to submit magazine. Error:', error.message);
      // }
    };



    const initializeArticle= () => {
      setCurrentArticle(emptyArticle)
    }
    return (
      <div className='h-full'>
        <h1>Your Next.js Page</h1>
       {currentArticle&& <form className='h-full'>
            <UniversalForm   inputData={emptyArticle} onDataChange={(x) => console.log(x)} onSubmit={(x) => addArticle(x)}></UniversalForm>

        </form>}
        <UniversalForm
        inputData={magazineForm}
        onDataChange={(data) => setMagazineData(prevData => ({ articles: prevData.articles, ...data }))}

        onSubmit={(data) => setMagazineData(prevData => ({ articles: prevData.articles, ...data }))}
      />

        {/* <UniversalForm inputData={emptyMagazine} ></UniversalForm> */}
        {magazineData.articles.map((article, index) => (
        <h6 key={index}>{article.title}</h6>
      ))}
        <button className='action-button'onClick={initializeArticle}>Add Article</button>
        <button className='action-button'onClick={handleSubmit}>Submit Magazine</button>
      </div>
    );
  };

  export default Page;


  const handleSubmit = async () => {
    // Send data to the API route

    // const response = await fetch('/api/submitMagazine', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(magazineData),
    // });

    // if (response.ok) {
    //   const data = await response.json();
    //   console.log('Magazine submitted successfully. ID:', data.id);
    // } else {
    //   console.error('Failed to submit magazine. Error:', response.statusText);
    // }
  };
     // const handleArticleChange = (field: string, value: any) => {
    //     if (currentArticle) {
    //       setCurrentArticle((prevArticle) => {
    //         // Create a deep copy of the article
    //         const newArticle = { ...prevArticle };

    //         // Use a helper function to set the nested property
    //         const setNestedProperty = (obj: any, path: string[], newValue: any) => {
    //           let currentObj = obj;
    //           for (let i = 0; i < path.length - 1; i++) {
    //             currentObj = currentObj[path[i]];
    //           }
    //           currentObj[path[path.length - 1]] = newValue;
    //         };

    //         // Split the field into an array of keys
    //         const keys = field.split('.');

    //         // Update the nested property in the new article
    //         setNestedProperty(newArticle, keys, value);

    //         return newArticle;
    //       });
    //     }
    //   };

    // const handleAddToMagazine = (data) => {
    //   console.log(data)
    //   // if (currentArticle) {
    //     setMagazineData((prevMagazineData) => ({
    //       ...prevMagazineData,
    //       articles: prevMagazineData.articles.map((article) =>
    //         article === currentArticle ? currentArticle : article
    //       ),
    //     // }));
    //     // setCurrentArticle(null);
    //   }
    // };

  // {currentArticle && (
  //   <div>
  //     <label>
  //       Header:
  //       <input
  //         type="text"
  //         value={currentArticle.title}
  //         onChange={(e) => handleArticleChange('title', e.target.value)}
  //       />
  //     </label>
  //     <label>
  //       Text Content:
  //       <textarea
  //         value={currentArticle.textContent}
  //         onChange={(e) => handleArticleChange('textContent', e.target.value)}
  //       />
  //     </label>
  //     <label>
  //       Author Name:
  //       <input
  //         type="text"
  //         value={currentArticle.author.name}
  //         onChange={(e) => handleArticleChange('author.name', e.target.value)}
  //       />
  //        Author Email:
  //        <input
  //         type="text"
  //         value={currentArticle.author.name}
  //         onChange={(e) => handleArticleChange('author.email', e.target.value)}
  //       />
  //        Author Class:
  //        <GOClassSelector onSelection={(value) => handleArticleChange('author.class', value)}/>
  //     </label>

  //     <button type="button" className='action-button'onClick={handleAddToMagazine}>
  //       Add to Magazine
  //     </button>
  //   </div>
  // )}