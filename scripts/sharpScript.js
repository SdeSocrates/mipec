const sharp = require ('sharp');
const path = require('path');

// Seleccionamos las imágenes--------------------------------------------------------------------------------------------------------------
//------Página CATEGORIA----
const inputPathCatMadrid = path.join(__dirname, '../src/categoria/img/madrid.png');
const inputPathCatParis = path.join(__dirname, '../src/categoria/img/paris.png');
const inputPathCatLocked = path.join(__dirname, '../src/categoria/img/locked.png');
//------Página DET1----------
const inputPathDet1Madrid = path.join(__dirname, '../src/det1/img/madrid.jpg');
const inputPathDet1Madrid01Thumb = path.join(__dirname, '../src/det1/img/madrid01-thumb.jpg');
const inputPathDet1Madrid02Thumb = path.join(__dirname, '../src/det1/img/madrid02-thumb.jpg');
const inputPathDet1Madrid03Thumb = path.join(__dirname, '../src/det1/img/madrid03-thumb.jpg');
const inputPathDet1Madrid04Thumb = path.join(__dirname, '../src/det1/img/madrid04-thumb.jpg');
const inputPathDet1Madrid05Thumb = path.join(__dirname, '../src/det1/img/madrid05-thumb.jpg');
//------Página DET2----------
const inputPathDet2Paris = path.join(__dirname, '../src/det2/img/paris.jpg');
const inputPathDet2Paris01Thumb = path.join(__dirname, '../src/det2/img/paris01-thumb.jpg');
const inputPathDet2Paris02Thumb = path.join(__dirname, '../src/det2/img/paris02-thumb.jpg');
const inputPathDet2Paris03Thumb = path.join(__dirname, '../src/det2/img/paris03-thumb.jpg');
const inputPathDet2Paris04Thumb = path.join(__dirname, '../src/det2/img/paris04-thumb.jpg');
const inputPathDet2Paris05Thumb = path.join(__dirname, '../src/det2/img/paris05-thumb.jpg');


// Escogemos la ruta de guardado y el nombre de la imagen----------------------------------------------------------------------------------
//------Página CATEGORIA----
const outputPathCatMadrid250 = path.join(__dirname, '../src/categoria/img/madrid-250.webp');
const outputPathCatMadrid500 = path.join(__dirname, '../src/categoria/img/madrid-500.webp');
const outputPathCatParis250 = path.join(__dirname, '../src/categoria/img/paris-250.webp');
const outputPathCatParis500 = path.join(__dirname, '../src/categoria/img/paris-500.webp');
const outputPathCatLocked250 = path.join(__dirname, '../src/categoria/img/locked-250.webp');
const outputPathCatLocked500 = path.join(__dirname, '../src/categoria/img/locked-500.webp');
//------Página DET1----------
const outputPathDet1Madrid480 = path.join(__dirname, '../src/det1/img/madrid-480.webp');
const outputPathDet1Madrid960 = path.join(__dirname, '../src/det1/img/madrid-960.webp');
const outputPathDet1Madrid1140 = path.join(__dirname, '../src/det1/img/madrid-1140.webp');
const outputPathDet1Madrid2280 = path.join(__dirname, '../src/det1/img/madrid-2280.webp');
const outputPathDet1Madrid01Thumb200 = path.join(__dirname, '../src/det1/img/madrid01-thumb-200.webp');
const outputPathDet1Madrid01Thumb400 = path.join(__dirname, '../src/det1/img/madrid01-thumb-400.webp');
const outputPathDet1Madrid02Thumb200 = path.join(__dirname, '../src/det1/img/madrid02-thumb-200.webp');
const outputPathDet1Madrid02Thumb400 = path.join(__dirname, '../src/det1/img/madrid02-thumb-400.webp');
const outputPathDet1Madrid03Thumb200 = path.join(__dirname, '../src/det1/img/madrid03-thumb-200.webp');
const outputPathDet1Madrid03Thumb400 = path.join(__dirname, '../src/det1/img/madrid03-thumb-400.webp');
const outputPathDet1Madrid04Thumb200 = path.join(__dirname, '../src/det1/img/madrid04-thumb-200.webp');
const outputPathDet1Madrid04Thumb400 = path.join(__dirname, '../src/det1/img/madrid04-thumb-400.webp');
const outputPathDet1Madrid05Thumb200 = path.join(__dirname, '../src/det1/img/madrid05-thumb-200.webp');
const outputPathDet1Madrid05Thumb400 = path.join(__dirname, '../src/det1/img/madrid05-thumb-400.webp');
//------Página DET2----------
const outputPathDet2Paris480 = path.join(__dirname, '../src/det2/img/paris-480.webp');
const outputPathDet2Paris960 = path.join(__dirname, '../src/det2/img/paris-960.webp');
const outputPathDet2Paris1140 = path.join(__dirname, '../src/det2/img/paris-1140.webp');
const outputPathDet2Paris2280 = path.join(__dirname, '../src/det2/img/paris-2280.webp');
const outputPathDet2Paris01Thumb200 = path.join(__dirname, '../src/det2/img/paris01-thumb-200.webp');
const outputPathDet2Paris01Thumb400 = path.join(__dirname, '../src/det2/img/paris01-thumb-400.webp');
const outputPathDet2Paris02Thumb200 = path.join(__dirname, '../src/det2/img/paris02-thumb-200.webp');
const outputPathDet2Paris02Thumb400 = path.join(__dirname, '../src/det2/img/paris02-thumb-400.webp');
const outputPathDet2Paris03Thumb200 = path.join(__dirname, '../src/det2/img/paris03-thumb-200.webp');
const outputPathDet2Paris03Thumb400 = path.join(__dirname, '../src/det2/img/paris03-thumb-400.webp');
const outputPathDet2Paris04Thumb200 = path.join(__dirname, '../src/det2/img/paris04-thumb-200.webp');
const outputPathDet2Paris04Thumb400 = path.join(__dirname, '../src/det2/img/paris04-thumb-400.webp');
const outputPathDet2Paris05Thumb200 = path.join(__dirname, '../src/det2/img/paris05-thumb-200.webp');
const outputPathDet2Paris05Thumb400 = path.join(__dirname, '../src/det2/img/paris05-thumb-400.webp');


// Conversion---------------------------------------------------------------------------------------------------------------------------------
//------Página CATEGORIA----
sharp(inputPathCatMadrid).resize(250).webp({quality: 80}).toFile(outputPathCatMadrid250);
sharp(inputPathCatMadrid).resize(500).webp({quality: 80}).toFile(outputPathCatMadrid500);
sharp(inputPathCatParis).resize(250).webp({quality: 80}).toFile(outputPathCatParis250);
sharp(inputPathCatParis).resize(500).webp({quality: 80}).toFile(outputPathCatParis500);
sharp(inputPathCatLocked).resize(250).webp({quality: 80}).toFile(outputPathCatLocked250);
sharp(inputPathCatLocked).resize(500).webp({quality: 80}).toFile(outputPathCatLocked500);
//------Página DET1----------
sharp(inputPathDet1Madrid).resize(480).webp({quality: 80}).toFile(outputPathDet1Madrid480);
sharp(inputPathDet1Madrid).resize(960).webp({quality: 80}).toFile(outputPathDet1Madrid960);
sharp(inputPathDet1Madrid).resize(1140).webp({quality: 80}).toFile(outputPathDet1Madrid1140);
sharp(inputPathDet1Madrid).resize(2280).webp({quality: 80}).toFile(outputPathDet1Madrid2280);
sharp(inputPathDet1Madrid01Thumb).resize(200).webp({quality: 80}).toFile(outputPathDet1Madrid01Thumb200);
sharp(inputPathDet1Madrid01Thumb).resize(400).webp({quality: 80}).toFile(outputPathDet1Madrid01Thumb400);
sharp(inputPathDet1Madrid02Thumb).resize(200).webp({quality: 80}).toFile(outputPathDet1Madrid02Thumb200);
sharp(inputPathDet1Madrid02Thumb).resize(400).webp({quality: 80}).toFile(outputPathDet1Madrid02Thumb400);
sharp(inputPathDet1Madrid03Thumb).resize(200).webp({quality: 80}).toFile(outputPathDet1Madrid03Thumb200);
sharp(inputPathDet1Madrid03Thumb).resize(400).webp({quality: 80}).toFile(outputPathDet1Madrid03Thumb400);
sharp(inputPathDet1Madrid04Thumb).resize(200).webp({quality: 80}).toFile(outputPathDet1Madrid04Thumb200);
sharp(inputPathDet1Madrid04Thumb).resize(400).webp({quality: 80}).toFile(outputPathDet1Madrid04Thumb400);
sharp(inputPathDet1Madrid05Thumb).resize(200).webp({quality: 80}).toFile(outputPathDet1Madrid05Thumb200);
sharp(inputPathDet1Madrid05Thumb).resize(400).webp({quality: 80}).toFile(outputPathDet1Madrid05Thumb400);
//------Página DET2----------
sharp(inputPathDet2Paris).resize(480).webp({quality: 80}).toFile(outputPathDet2Paris480);
sharp(inputPathDet2Paris).resize(960).webp({quality: 80}).toFile(outputPathDet2Paris960);
sharp(inputPathDet2Paris).resize(1140).webp({quality: 80}).toFile(outputPathDet2Paris1140);
sharp(inputPathDet2Paris).resize(2280).webp({quality: 80}).toFile(outputPathDet2Paris2280);
sharp(inputPathDet2Paris01Thumb).resize(200).webp({quality: 80}).toFile(outputPathDet2Paris01Thumb200);
sharp(inputPathDet2Paris01Thumb).resize(400).webp({quality: 80}).toFile(outputPathDet2Paris01Thumb400);
sharp(inputPathDet2Paris02Thumb).resize(200).webp({quality: 80}).toFile(outputPathDet2Paris02Thumb200);
sharp(inputPathDet2Paris02Thumb).resize(400).webp({quality: 80}).toFile(outputPathDet2Paris02Thumb400);
sharp(inputPathDet2Paris03Thumb).resize(200).webp({quality: 80}).toFile(outputPathDet2Paris03Thumb200);
sharp(inputPathDet2Paris03Thumb).resize(400).webp({quality: 80}).toFile(outputPathDet2Paris03Thumb400);
sharp(inputPathDet2Paris04Thumb).resize(200).webp({quality: 80}).toFile(outputPathDet2Paris04Thumb200);
sharp(inputPathDet2Paris04Thumb).resize(400).webp({quality: 80}).toFile(outputPathDet2Paris04Thumb400);
sharp(inputPathDet2Paris05Thumb).resize(200).webp({quality: 80}).toFile(outputPathDet2Paris05Thumb200);
sharp(inputPathDet2Paris05Thumb).resize(400).webp({quality: 80}).toFile(outputPathDet2Paris05Thumb400);