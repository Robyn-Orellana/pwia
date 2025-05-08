// pages/api/upload.js

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '5mb', // Permitir imágenes grandes
      },
    },
  };
  
  let imageQueue = []; // En memoria (para pruebas iniciales)
  
  export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { imageBase64 } = req.body;
  
      if (!imageBase64) {
        return res.status(400).json({ message: 'No image data provided.' });
      }
  
      const id = Date.now().toString();
      const imageData = {
        id,
        imageBase64,
        status: 'pending',
        result: null,
      };
  
      imageQueue.push(imageData);
  
      return res.status(200).json({ message: 'Image received.', id });
    }
  
    if (req.method === 'GET') {
      return res.status(200).json({ images: imageQueue });
    }
  
    return res.status(405).json({ message: 'Method not allowed.' });
  }
  