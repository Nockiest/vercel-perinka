 "use client"
import  { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Email:', email);
    console.log('Name:', name);
    // Reset form fields
    setEmail('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col flex-grow gap-4 min-w-10 w-64   mx-16">
    <h3>Přihlaš se k odběru ať ti nic neuteče!</h3>
    <div className="flex flex-col">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-2"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border p-2"
      />
    </div>
    <button type="submit" className="w-1/2 mx-auto  bg-secondary-color hover:opacity-80 transition-shadow duration-300 shadow-lg  text-white font-bold py-2 px-4 rounded ">
      Submit
    </button>
  </form>
  
  );
};

export default NewsletterForm;
