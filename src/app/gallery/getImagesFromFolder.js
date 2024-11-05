// src/app/gallery/getImagesFromFolder.js
import fs from 'fs';
import path from 'path';
import { getPlaiceholder } from 'plaiceholder';

export async function getImagesFromFolder(folder) {
  const directoryPath = path.join(process.cwd(), 'public', folder);
  const imagesByYear = {};

  async function readDirectory(directory, year) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        await readDirectory(filePath, file); // Pass the folder name as the year
      } else if (/\.(png|jpeg|jpg|gif|svg)$/.test(file)) {
        if (!imagesByYear[year]) {
          imagesByYear[year] = [];
        }
        const relativePath = path.relative(path.join(process.cwd(), 'public'), filePath);
        const imageSrc = '/' + relativePath.replace(/\\/g, '/');

        // Generate blurDataURL
        const { base64 } = await getPlaiceholder(filePath);

        imagesByYear[year].push({ src: imageSrc, blurDataURL: base64 });
      }
    }
  }

  await readDirectory(directoryPath, '');
  return imagesByYear;
}