// pages/api/classify.js
import { db } from '@/lib/firebase';
import { ref, update } from 'firebase/database';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, result } = req.body;

    if (!id || !result) {
      return res.status(400).json({ message: 'Missing id or result.' });
    }

    const imageRef = ref(db, 'images/' + id);

    // Actualizar solo el estado y el resultado
    await update(imageRef, {
      status: 'classified',
      result: result,
    });

    return res.status(200).json({ message: 'Classification saved.' });
  }

  return res.status(405).json({ message: 'Method not allowed.' });
}
