// pages/api/upload.js
import { db } from '@/app/lib/firebase';
import { ref, set } from 'firebase/database';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '5mb',
    },
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { imageBase64 } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ message: 'No image data provided.' });
    }

    const id = Date.now().toString();
    const imageData = {
      imageBase64,
      status: 'pending',
      result: null,
    };

    await set(ref(db, 'images/' + id), imageData);

    return res.status(200).json({ message: 'Image saved to Firebase.', id });
  }

  return res.status(405).json({ message: 'Method not allowed.' });
}
