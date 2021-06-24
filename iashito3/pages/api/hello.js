// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import waifu2x from "waifu2x"
import descargarImagen from "../../utiles/descargarImagen.js"
export default async(req, res) => {
  // index.js
  var path = require('path');
  global.appRoot = path.resolve(__dirname);
  var base = process.env.PWD
  console.log("00000000000000000",base);
  // lib/moduleA/component1.js
  // require(appRoot + '/lib/moduleB/component2.js');

  var img = req.body.img;
  // console.log(img)
  var rutaM = descargarImagen(img, base+"/public/originales/", ()=>{})

  let progress = (current, total) => {
    console.log(`Current Image: ${current} Total Images: ${total}`)
    if (current === 5) return true
  }
  // await waifu2x.upscaleImage(img, "/mejora", {noise: 2, scale: 2.0},progress)
  setTimeout(async()=>{
    await waifu2x.upscaleImage(rutaM.ruta, base+"/public/mejoras/", {noise: 2, scale: 2.0, rename: "2x"},progress)
    console.log(rutaM.ruta)
    res.json({ ruta: rutaM.ruta, url: rutaM.url})
  },15000)
}
