const fs = require('fs');
const path = require('path');

const galleryPath = path.join(__dirname, 'gallery');
const jsonPath = path.join(__dirname, 'gallery-images.json');

// 1️⃣ Read existing JSON (if present)
let existingImages = [];

if (fs.existsSync(jsonPath)) {
    existingImages = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
}

// Convert to Set for no-duplicates
const imageSet = new Set(existingImages);

// 2️⃣ Read gallery folder
const files = fs.readdirSync(galleryPath)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map(file => `gallery/${file}`);

// 3️⃣ Append only new images
files.forEach(file => imageSet.add(file));

// 4️⃣ Save updated JSON
fs.writeFileSync(
    jsonPath,
    JSON.stringify([...imageSet], null, 2)
);

console.log('✅ gallery-images.json updated (no duplicates)');
