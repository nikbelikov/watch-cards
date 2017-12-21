const fs = require('fs');
const gm = require('gm');

let images = [];

fs.readdir('./../dist', (error, folders) => {
  folders.forEach(folder => {
    if (folder.substring(0,1) !== '.') {
      fs.readdir(`./../dist/${folder}`, (error, files) => {
        files.forEach(file => {
          if (file.substring(0,1) !== '.') {
            const imagePath = `./../dist/${folder}/${file}`;
            const flagPath = `./../src/shared/flags/${file}`;
            const image = gm(imagePath)
              .composite(flagPath)
              .geometry('+0+42');

            images.push(image);
          }
        });

        let promice = Promise.resolve();

        const writeImage = image => new Promise(resolve => {
          image.write(`./../dist/flags/${'test'}.png`, resolve);
        });

        images.forEach(image => {
          promice = promice.then(() => writeImage(image));
        });
      })
    }
  })
});
