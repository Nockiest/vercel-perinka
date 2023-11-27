import { useState } from 'react';

const RatingForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [article, setArticle] = useState('');
  const [opinion, setOpinion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Process the form data, you can send it to your server or perform any necessary actions

    // Close the form after submission
    onClose();
  };

  return (
    <div className="rating-form-overlay">
      <div className="rating-form-container">
        <h2>Rate the Article</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Jméno a Příjmení:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="class">Třída:</label>
          <input
            type="text"
            id="class"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />

          <label htmlFor="article">Article Read:</label>
          <input
            type="text"
            id="article"
            value={article}
            onChange={(e) => setArticle(e.target.value)}
            required
          />

          <label htmlFor="opinion">Tvůj názor:</label>
          <textarea
            id="opinion"
            value={opinion}
            onChange={(e) => setOpinion(e.target.value)}
            required
          />

          <button type="submit">Odeslat</button>
        </form>
      </div>
    </div>
  );
};

export default RatingForm;
