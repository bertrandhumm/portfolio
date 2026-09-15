import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const TEMP_DIR = path.resolve('temp');
const OUTPUT_DIR = path.resolve('public/assets/projects');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function processImages() {
  const files = fs.readdirSync(TEMP_DIR).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.png', '.jpg', '.jpeg', '.webp', '.avif', '.webm', '.mp4'].includes(ext);
  });

  if (files.length === 0) {
    console.log('Aucun nouveau média dans temp/');
    return;
  }

  console.log(`Traitement de ${files.length} fichier(s)...`);

  for (const file of files) {
    const inputPath = path.join(TEMP_DIR, file);
    const ext = path.extname(file).toLowerCase();
    const filenameWithoutExt = path.basename(file, ext)
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

    // Video files: directly copy them
    if (['.webm', '.mp4'].includes(ext)) {
      const outputPath = path.join(OUTPUT_DIR, `${filenameWithoutExt}${ext}`);
      fs.copyFileSync(inputPath, outputPath);
      console.log(`✓ Vidéo copiée : ${file} -> public/assets/projects/${filenameWithoutExt}${ext}`);
      continue;
    }

    const outputPath = path.join(OUTPUT_DIR, `${filenameWithoutExt}.webp`);

    await sharp(inputPath, { animated: true })
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 82, loop: 0 })
      .toFile(outputPath);

    console.log(`✓ Converti & Optimisé : ${file} -> public/assets/projects/${filenameWithoutExt}.webp`);
  }
}

processImages().catch(err => console.error(err));
