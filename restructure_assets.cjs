const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const assetsDir = path.join(srcDir, 'assets');
const videosDir = path.join(assetsDir, 'videos');
const imagesDir = path.join(assetsDir, 'images');

if (!fs.existsSync(videosDir)) fs.mkdirSync(videosDir);
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir);

const videos = ['IMG_7182.MOV', 'placement 5.MP4', 'placement1.MP4', 'placement2.MP4', 'placement3.MP4', 'placement4.MP4', 'responsive.MOV', 'uae responsive.MP4'];
const images = ['Golden_Wings_Logo_Vecter_File-removebg-preview.png', 'sharafu.png', 'slider1 copy.jpeg', 'slider2.jpeg', 'slider3.jpeg', 'tech_meeting.png', 'react.svg', 'vite.svg'];

videos.forEach(file => {
  const oldPath = path.join(assetsDir, file);
  if (fs.existsSync(oldPath)) fs.renameSync(oldPath, path.join(videosDir, file));
});

images.forEach(file => {
  const oldPath = path.join(assetsDir, file);
  if (fs.existsSync(oldPath)) fs.renameSync(oldPath, path.join(imagesDir, file));
});

function walkSync(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(file => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    } else if (file.endsWith('.jsx') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.ts')) {
      filelist.push(path.join(dir, file));
    }
  });
  return filelist;
}

const allFiles = walkSync(srcDir);
allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  videos.forEach(v => {
    const regex = new RegExp('assets/' + v.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'), 'g');
    if (regex.test(content)) {
      content = content.replace(regex, 'assets/videos/' + v);
      changed = true;
    }
  });
  
  images.forEach(i => {
    const regex = new RegExp('assets/' + i.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'), 'g');
    if (regex.test(content)) {
      content = content.replace(regex, 'assets/images/' + i);
      changed = true;
    }
  });
  
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  }
});
