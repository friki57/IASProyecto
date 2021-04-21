import React from 'react';
import ReactDOM from 'react-dom';

import Head from 'next/head'
import fecha from "../utiles/fecha"
import formatoEnlace from "../utiles/formatoEnlace"
import mejoraImagen from "../utiles/mejoraImagen"

var fechaActual = new Date();
const isBrowser = () => typeof window !== "undefined"

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lon : "-66.18",
      lat : "-17.38",
      dim : "0.15",
      fecha: fechaActual,
      enlaceNasa : "https://api.nasa.gov/planetary/earth/imagery?lon=-66.18&lat=-17.38&date=2015-09-12&dim=0.15&api_key=nDBbhVtkbXC25ZCvI8kpPnXFrhHd8fQBTrdLWSsP",
      enlaceNasaM : "/iconoFoto.png"
    };

    this.cambio = this.cambio.bind(this)
    this.actualizar = this.actualizar.bind(this)
    this.mejorar = this.mejorar.bind(this)
    console.log("------------------")
  }
  cambio(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    setTimeout(()=>{console.log(this.state,event.target.name,event.target.value)},500);
  }
  actualizar()
  {
    this.setState({enlaceNasa:formatoEnlace.formato(this.state.lon,this.state.lat,fecha(this.state.fecha),this.state.dim)})
    setTimeout(()=>{console.log(this.state)},500);
  }
  mejorar()
  {
    mejoraImagen.mejorar(this.state.enlaceNasa,this)
  }
 render()
 {
   return (
     <>
       <div className="container">
         <h1>Reconocimiento de imágenes satelitales con redes neuronales convolucionales</h1>

         <label target="lon">Longitud</label>
         <input type = "number" step=".01" name="lon" defaultValue={this.state.lon} placeholder="longitud" onChange={this.cambio}  min="2010-01-01" max={fecha(fechaActual)}/>
         <br/>
         <label target="lat">Latitud</label>
         <input type = "number" step=".01" name="lat" defaultValue={this.state.lat} placeholder="latitud" onChange={this.cambio}  min="2010-01-01" max={fecha(fechaActual)}/>
         <br/>
         <label target="dim">Zoom (Menor es el número, mayor cercanía)</label>
         <input type = "number" step=".01" name="dim" defaultValue={this.state.dim} placeholder="latitud" onChange={this.cambio}  min="2010-01-01" max={fecha(fechaActual)}/>
         <br/>
         <label target="date">Fecha</label>
         <input type="date"  defaultValue={fecha(fechaActual)} onChange={this.cambio} name="fecha" min="2010-01-01" max={fecha(fechaActual)}/>
         <br/>
         <button onClick={this.actualizar}>Actualizar</button>
         <br/>
         <h3>(La carga de la imagen puede tardar alrededor de 15 segundos)</h3>
         <br/>
         <img src={this.state.enlaceNasa} alt="" width="50%" height="50%"/>
         <a target="blank" href={this.state.enlaceNasa}>Ver en más detalle</a>
         <br/>
         <h3>(La mejora de la imagen puede tardar alrededor de 30 segundos)</h3>
         <button onClick={this.mejorar}>Mejorar calidad de imagen</button>
         <img src={this.state.enlaceNasaM} alt="" width="50%" height="50%"/>
         <a target="blank" href={this.state.enlaceNasaM}>Ver en más detalle</a>

       </div>
     </>
   )
 }
}
