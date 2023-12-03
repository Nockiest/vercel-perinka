'use client'
import React, { useState } from 'react';
import { Magazine,ArticleImage, Oppinion, Article } from '../../type/types';

import GOClassSelector from '../../components/global/ClassSelector';
import UniversalForm from '../../components/global/UniversalForm';


const emptyMagazine: Magazine = {
    date: '2023-12-01',
    komiksSrc: 'komiks/1',
    articles: [],
    title: '',
  };

  type ArticleForm = {
    author: {
      email: 'user@example.com'
      name: 'Honza Novak'
      class: '0.X'
    }
    title: '',
    textContent: 'Article content goes here',
    image: {
      src: 'path-to-image1.jpg',
      alt: 'Image 1',
      position: 'left',
    },
    oppinions: 'array',
    test: 'file'
  }
  const emptyArticle: ArticleForm = {
    author: {
      email: 'user@example.com',
      name: 'Honza Novak',
      class: '0.X'
    },
    title: '',
    textContent: 'Article content goes here',
    image: {
      src: 'path-to-image1.jpg',
      alt: 'Image 1',
      position: 'left',
    },
    oppinions: 'array',
    test: 'file'
  };


  const Page = () => {
    const [magazineData, setMagazineData] = useState<Magazine>({ ...emptyMagazine });
    const [currentArticle, setCurrentArticle] = useState<Article | null>(null);

    const addArticle = () => {
      const newArticle: Article = { ...emptyArticle };
      setMagazineData((prevMagazineData) => ({
        ...prevMagazineData,
        articles: [...prevMagazineData.articles, newArticle],
      }));
      setCurrentArticle(newArticle);
    };

    const handleArticleChange = (field: string, value: any) => {
        if (currentArticle) {
          setCurrentArticle((prevArticle) => {
            // Create a deep copy of the article
            const newArticle = { ...prevArticle };

            // Use a helper function to set the nested property
            const setNestedProperty = (obj: any, path: string[], newValue: any) => {
              let currentObj = obj;
              for (let i = 0; i < path.length - 1; i++) {
                currentObj = currentObj[path[i]];
              }
              currentObj[path[path.length - 1]] = newValue;
            };

            // Split the field into an array of keys
            const keys = field.split('.');

            // Update the nested property in the new article
            setNestedProperty(newArticle, keys, value);

            return newArticle;
          });
        }
      };

    const handleAddToMagazine = (data) => {
      console.log(data)
      // if (currentArticle) {
      //   setMagazineData((prevMagazineData) => ({
      //     ...prevMagazineData,
      //     articles: prevMagazineData.articles.map((article) =>
      //       article === currentArticle ? currentArticle : article
      //     ),
      //   }));
      //   setCurrentArticle(null);
      // }
    };

    const handleSubmit = async () => {
      // Send data to the API route

      const response = await fetch('/api/submitMagazine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(magazineData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Magazine submitted successfully. ID:', data.id);
      } else {
        console.error('Failed to submit magazine. Error:', response.statusText);
      }
    };

    return (
      <div className='h-full'>
        <h1>Your Next.js Page</h1>
        <form className='h-full'>
            <UniversalForm resetFormData={handleAddToMagazine} inputData={emptyArticle}  onSubmit={(res) => {console.log('form submitted', res)}}></UniversalForm>
          {currentArticle && (
            <div>
              <label>
                Header:
                <input
                  type="text"
                  value={currentArticle.title}
                  onChange={(e) => handleArticleChange('title', e.target.value)}
                />
              </label>
              <label>
                Text Content:
                <textarea
                  value={currentArticle.textContent}
                  onChange={(e) => handleArticleChange('textContent', e.target.value)}
                />
              </label>
              <label>
                Author Name:
                <input
                  type="text"
                  value={currentArticle.author.name}
                  onChange={(e) => handleArticleChange('author.name', e.target.value)}
                />
                 Author Email:
                 <input
                  type="text"
                  value={currentArticle.author.name}
                  onChange={(e) => handleArticleChange('author.email', e.target.value)}
                />
                 Author Class:
                 <GOClassSelector onSelection={(value) => handleArticleChange('author.class', value)}/>
              </label>

              <button type="button" className='action-button'onClick={handleAddToMagazine}>
                Add to Magazine
              </button>
            </div>
          )}
        </form>
        <button className='action-button'onClick={addArticle}>Add Article</button>
        <button className='action-button'onClick={handleSubmit}>Submit Magazine</button>
      </div>
    );
  };

  export default Page;