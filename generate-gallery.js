const fs = require('fs');
const path = require('path');

const galleryPath = path.join(__dirname, 'gallery');

const images = fs.readdirSync(galleryPath)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map(file => `gallery/${file}`);

fs.writeFileSync(
    'gallery-images.json',
    JSON.stringify(images, null, 2)
);

console.log('✅ gallery-images.json generated');
