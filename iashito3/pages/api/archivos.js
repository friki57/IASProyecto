export default async(req, res) => {
  var path = require('path');
  global.appRoot = path.resolve(__dirname);
  var base = process.env.PWD
  console.log("00000000000000000",base);
  var fs = require('fs');
  var originales = fs.readdirSync(base+"/public/originales/");
  var mejoras = fs.readdirSync(base+"/public/mejoras/");
  console.log(originales,mejoras)


  console.log(originales,mejoras)
  res.json({originales,mejoras})
}
