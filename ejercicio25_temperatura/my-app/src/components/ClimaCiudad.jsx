import { useEffect, useState } from "react";
import Preloader from "./Preloader";




function ClimaCiudad({ciudad,reiniciar}) {

    const [temperatura,setTemperatura] = useState('')
    const [mensaje,setMensaje] = useState('')
    const [data,setData] = useState('');



    useEffect(()=>{
        if (!data){
            function obtenerGeolocation(ciudad){
                fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&limit=1&appid=047406faf0ddd1c74cb67394b8decf95`)
                .then(res => res.json())
                .then(res => {
                    setData(res)
                })
                .catch(err => console.log(err))
            }
        
            obtenerGeolocation(ciudad);
        }else{
            
            if (data[0]){
                let lat = data[0].lat;
                let lon = data[0].lon;

                
                function obtenerTemperatura() {
                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=047406faf0ddd1c74cb67394b8decf95`)
                    .then(res => res.json())
                    .then(res => {
                        // console.log(res)
                        // console.log(res.main.temp)
                        let toC = Math.trunc((res.main.temp- 273.15))
                        setTemperatura(toC);
                        setMensaje(`La temperatura actual de ${ciudad} es de ${temperatura} grados Celsius`)
                    })
                    .catch(err=>console.log(err))
                }
                obtenerTemperatura()
            }else{
                setMensaje("Error al encontrar la ciudad solicitada")
            }
            
            
        }
    })


  return <div className="ClimaCiudad">

        {mensaje ? <div className="ClimaCiudad-mensaje">{mensaje}</div> : null}
        {temperatura ? 
            <>
                {temperatura < 10 ? 
                    <><div className="ClimaCiudad-temp">Hace mucho frio</div>
                    <img className="ClimaCiudad-img" src="./frio.png"></img></>
                : null}
                {temperatura > 30 ? 
                    <><div className="ClimaCiudad-temp">Hace mucho calor</div>
                    <img className="ClimaCiudad-img" src="./calor.png"></img></>
                : null}


            
            </>
       : null}
            
       {!mensaje && !temperatura ? <Preloader ></Preloader> : <>
            <button className="App-button" onClick={(e) => reiniciar()}>
            Reiniciar
          </button>
       </>}
        
       
     </div>    
  ;
}

export default ClimaCiudad;
