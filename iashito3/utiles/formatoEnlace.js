var objeto =
{
  formato :(lon,lat,fecha,dim)=>
  {
    return "https://api.nasa.gov/planetary/earth/imagery?lon="+lon.toString()+"&lat="+lat.toString()+"&date="+fecha+"&dim="+dim+"&api_key=nDBbhVtkbXC25ZCvI8kpPnXFrhHd8fQBTrdLWSsP"
  }
}

module.exports = objeto;
