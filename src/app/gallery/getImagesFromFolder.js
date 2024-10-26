import fs from 'fs';
import path from 'path';

export function getImagesFromFolder(folder) {
    const directoryPath = path.join(process.cwd(), 'public', folder);
    const files = fs.readdirSync(directoryPath);
    const images = files.filter(file => /\.(png|jpe?g|gif|svg)$/.test(file)).map(file => `/${folder}/${file}`);
    console.log('Fetched images:', images); // Debugging line
    return images;
}