// pages/api/checkPassword.js
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const userPassword = req.body.password; // Assuming the password is sent in the request body

  // Check if the entered password is correct
  if (userPassword === process.env.ARTICLE_EDIT_PASSWORD) {
    res.status(200).json({ message: 'Password is correct' });
  } else {
    res.status(401).json({ message: 'Incorrect password' });
  }
};