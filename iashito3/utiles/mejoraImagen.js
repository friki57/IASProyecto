// FLUENTFFMPEG_COV=0
// import waifu2x from "waifu2x"
// import Upscaler from 'upscaler';
import fetch from "./fetch.js"


var objeto =
{
  mejorar:async(img,thi)=>
  {
    fetch('/api/hello',(resp)=>{
      console.log(resp)
      thi.setState({enlaceNasaM:resp.url})
    },{img},"POST")
    // console.log(img);
    // fetch(img,(resp)=>{console.log(resp);})
  }
}

module.exports = objeto;
