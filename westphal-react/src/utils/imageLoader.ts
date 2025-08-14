import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase';

export const getImageUrl = async (imageName: string): Promise<string> => {
  try {
    // Try to get the image from Firebase Storage
    const imageRef = ref(storage, `images/${imageName}`);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.warn(`Failed to load ${imageName} from Firebase Storage, falling back to local:`, error);
    // Fallback to local images in the public folder
    return `/img/${imageName}`;
  }
};

export const preloadImages = async (imageNames: string[]): Promise<{ [key: string]: string }> => {
  const imageUrls: { [key: string]: string } = {};
  
  await Promise.all(
    imageNames.map(async (imageName) => {
      imageUrls[imageName] = await getImageUrl(imageName);
    })
  );
  
  return imageUrls;
};
