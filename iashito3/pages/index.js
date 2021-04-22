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
      lon: "-66.18",
      lat: "-17.38",
      dim: "0.15",
      fecha: fechaActual,
      enlaceNasa: "https://api.nasa.gov/planetary/earth/imagery?lon=-66.18&lat=-17.38&date=2015-09-12&dim=0.15&api_key=nDBbhVtkbXC25ZCvI8kpPnXFrhHd8fQBTrdLWSsP",
      enlaceNasaM: "/iconoFoto.png"
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
    setTimeout(() => { console.log(this.state, event.target.name, event.target.value) }, 500);
  }
  actualizar() {
    this.setState({ enlaceNasa: formatoEnlace.formato(this.state.lon, this.state.lat, fecha(this.state.fecha), this.state.dim) })
    setTimeout(() => { console.log(this.state) }, 500);
  }
  mejorar() {
    mejoraImagen.mejorar(this.state.enlaceNasa, this)
  }
  render() {
    return (
      <>
        <div className="fondo">
          <div className="title">
            <div className="titulo">
              <h1>Reconocimiento de Imágenes Satelitales con CNN</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="Form">
            <h2 className="titleh2">
              Ingresa los datos
            </h2>
            <div className="ColumLeft">
              <label className="TitleTexBox" target="lon">Longitud</label>
              <input className="TexBox" type="number" step=".01" name="lon" defaultValue={this.state.lon} placeholder="longitud" onChange={this.cambio} min="2010-01-01" max={fecha(fechaActual)} />
              <br />
              <label className="TitleTexBox" target="dim">Zoom (Menor es el número, mayor cercanía)</label>
              <input className="TexBox" type="number" step=".01" name="dim" defaultValue={this.state.dim} placeholder="latitud" onChange={this.cambio} min="2010-01-01" max={fecha(fechaActual)} />
              <br />
            </div>
            <div className="ComlunRigt">
              <label className="TitleTexBox" target="lat">Latitud</label>
              <input className="TexBox" type="number" step=".01" name="lat" defaultValue={this.state.lat} placeholder="latitud" onChange={this.cambio} min="2010-01-01" max={fecha(fechaActual)} />
              <br />
              <label className="TitleTexBox" target="date">Fecha</label>
              <input className="TexBox" type="date" defaultValue={fecha(fechaActual)} onChange={this.cambio} name="fecha" min="2010-01-01" max={fecha(fechaActual)} />
              <br />
            </div>
            <div className="FormButton">
              <button className="Button" onClick={this.actualizar}>Actualizar</button>
              <br />
            </div>
          </div>




          <br/>
          <h2 className="Message">(La carga de la imagen puede tardar alrededor de 15 segundos)</h2>
          <br />
          <img src={this.state.enlaceNasa} alt="" width="50%" height="50%" />
          <a target="blank" href={this.state.enlaceNasa}>Ver en más detalle</a>
          <br />
          <h2 className="Message">(La mejora de la imagen puede tardar alrededor de 30 segundos)</h2>
          <br/>
          <button className="Button" onClick={this.mejorar}>Mejorar calidad de imagen</button>
          <img src={this.state.enlaceNasaM} alt="" width="50%" height="50%" />
          <a target="blank" href={this.state.enlaceNasaM}>Ver en más detalle</a>

        </div>
      </>
    )
  }
}
