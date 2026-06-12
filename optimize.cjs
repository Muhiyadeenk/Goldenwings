const fs = require('fs');
const path = require('path');

function walk(dir, done) {
  let results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
}

walk(path.join(__dirname, 'src'), (err, files) => {
  if (err) throw err;
  
  const targetFiles = files.filter(f => f.endsWith('.jsx') || f.endsWith('.tsx'));
  let modifiedCount = 0;

  targetFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // 1. Replace transition-all with transition
    content = content.replace(/\btransition-all\b/g, 'transition');

    // 2. Add will-change-transform to hover:scale or hover:-translate if missing
    // We match className="...", then check if it has hover:scale or hover:-translate
    content = content.replace(/className=(["'])(.*?)\1/g, (match, quote, classes) => {
      if ((classes.includes('hover:scale') || classes.includes('hover:-translate')) && !classes.includes('will-change-transform')) {
        return `className=${quote}${classes} will-change-transform${quote}`;
      }
      return match;
    });
    
    content = content.replace(/className=\{`([^`]+)`\}/g, (match, classes) => {
      if ((classes.includes('hover:scale') || classes.includes('hover:-translate')) && !classes.includes('will-change-transform')) {
        return `className={\`${classes} will-change-transform\`}`;
      }
      return match;
    });

    // 3. Add loading="lazy" to <img> tags if missing
    content = content.replace(/<img([^>]+)>/g, (match, attributes) => {
      if (!attributes.includes('loading=')) {
        // Find closing bracket/slash to insert before it
        if (attributes.endsWith('/')) {
            return `<img${attributes.slice(0, -1)} loading="lazy" />`;
        }
        return `<img${attributes} loading="lazy">`;
      }
      return match;
    });

    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      modifiedCount++;
      console.log(`Optimized: ${file}`);
    }
  });

  console.log(`\nDone! Optimized ${modifiedCount} files.`);
});
