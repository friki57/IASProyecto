import React from 'react';
import ReactDOM from 'react-dom';

import Head from 'next/head'
import fecha from "../utiles/fecha"
import fetch from "../utiles/fetch.js"

import formatoEnlace from "../utiles/formatoEnlace"

var fechaActual = new Date();
const isBrowser = () => typeof window !== "undefined"

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      originales: ["originales","originales"],
      mejoras: ["mejoras","mejoras"]
    }
    fetch('/api/archivos',(resp)=>{
      console.log(resp)
      this.setState({originales:resp.originales,mejoras: resp.mejoras})
      console.log(this.state.originales,this.state.mejoras)
      //thi.setState({enlaceNasaM:resp.url})
    },{},"POST")
    console.log("------------------")
  }
  render() {
    return (
      <>
        <div className="fondo">
          <div className="title">
            <div className="titulo">
              <h1>Galería de mejoramiento de imágenes</h1>
            </div>
          </div>
        </div>
        <div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Original</th>
                  <th>Mejora</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.mejoras.map((a,i)=>{
                    console.log(a);

                    return(
                      <tr>
                        <td><img src={"/originales/"+this.state.originales[i]} alt="" width="500px" height="500px" /></td>
                        <td><img src={"/mejoras/"+this.state.mejoras[i]} alt="" width="500px" height="500px" /></td>
                      </tr>
                    )

                  })
                }

              </tbody>
            </table>
          </div>
        </div>
      </>
    )
  }
}
