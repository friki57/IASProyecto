var ret = (img, ruta, callback)=>{
  var fs = require('fs');
  var https = require('https');
  //Node.js Function to save image from External URL.
  function saveImageToDisk(url, localPath) {
    var fullUrl = url;
    var file = fs.createWriteStream(localPath);
    var request = https.get(url, function(response) {
      // console.log(response.pipe())
      response.pipe(file);
    });
  }
  var nombre = Date.now()+'.png';
  var nombreM = Date.now()+'2x.png';
  let image_path=ruta+nombre;
  saveImageToDisk(img, image_path)
  return {ruta:image_path,url:"/mejoras/"+nombreM};
}

module.exports = ret;
