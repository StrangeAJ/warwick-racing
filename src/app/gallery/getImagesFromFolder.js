import fs from 'fs';
import path from 'path';

export function getImagesFromFolder(folder) {
    const directoryPath = path.join(process.cwd(), 'public', folder);
    const imagesByYear = {};

    function readDirectory(directory, year) {
        const files = fs.readdirSync(directory);
        files.forEach(file => {
            const filePath = path.join(directory, file);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                readDirectory(filePath, file); // Pass the folder name as the year
            } else if (/\.(png|jpeg|jpg|gif|svg)$/.test(file)) {
                if (!imagesByYear[year]) {
                    imagesByYear[year] = [];
                }
                const relativePath = path.relative(path.join(process.cwd(), 'public'), filePath);
                imagesByYear[year].push(relativePath);
            }
        });
    }

    readDirectory(directoryPath, '');
    console.log('Fetched images by year:', imagesByYear); // Debugging line
    return imagesByYear;
}