'use client'
import React, { useState } from 'react';
import { Magazine,ArticleImage, Oppinion, Article } from '../../type/types';


const emptyMagazine: Magazine = {
    date: '2023-12-01',
    komiksSrc: 'path-to-komiks',
    articles: [],
    title: '',
  };

  const emptyArticle: Article = {
    author: {
      email: 'user@example.com',
      name: 'Honza Novak',
    },
    title: '',
    textContent: 'Article content goes here',
    image: {
      src: 'path-to-image1.jpg',
      alt: 'Image 1',
      position: 'left',
    },
    oppinions: [],
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
        setCurrentArticle((prevArticle) => ({
          ...prevArticle,
          [field]: value,
        }));
      }
    };

    const handleAddToMagazine = () => {
      if (currentArticle) {
        setMagazineData((prevMagazineData) => ({
          ...prevMagazineData,
          articles: prevMagazineData.articles.map((article) =>
            article === currentArticle ? currentArticle : article
          ),
        }));
        setCurrentArticle(null);
      }
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
              {/* Add more input fields for other properties */}
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