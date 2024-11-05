// utils/generateBlurDataURL.js
import { getPlaiceholder } from 'lqip-modern';

export async function generateBlurDataURL(imagePath) {
  const { base64 } = await getPlaiceholder(imagePath);
  return base64;
}