import react, { useEffect, useState } from "react"
import CityError from "./cityerror"

function ApiCall(props){
    const [entry,setentry]=useState("")
    const [maxTemp ,setmaxTemp]=useState("")
    const [minTemp,setminTemp]=useState("")
    const [long,setLong]=useState("")
    const [lat,setLat]=useState("")
    const [weatherDescription,setweatherDescription]=useState("")
    const [errorhandling,seterrorhandling]=useState(false)
    const [country,setCountry]=useState("")
    useEffect(
    async function tempchange(){
    // let rawdata=fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=420ddd5f335ad29e7a6f3d9dd895656b`)
    // rawdata.then(
    //     function(res){
    //         return res.json()
    //     })
    // .then(function(data){
    //     setentry(Math.floor(data.main.temp-273))
    //     setmaxTemp(Math.floor(data.main.temp_max-273))
    //     setminTemp(Math.floor(data.main.temp_min-273))
    //     setLong(data.coord.lon)
    //     setLat(data.coord.lat)
    //     setweatherDescription(data.weather[0].main)
    //     })
        try{ 
        seterrorhandling(false)
        let response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=420ddd5f335ad29e7a6f3d9dd895656b`)
        let data=await response.json()
        setentry(Math.floor(data.main.temp-273))
        setmaxTemp(Math.floor(data.main.temp_max-273))
        setminTemp(Math.floor(data.main.temp_min-273))
        setLong(data.coord.lon)
        setLat(data.coord.lat)
        setweatherDescription(data.weather[0].main)
        setCountry(data.sys.country)
        }
        catch(err){
            seterrorhandling(true)
            console.log("got some error"+err)
        }
    },[props.cityName]
    )
   if(errorhandling){
        return <CityError/>
   }
    return(
        <>  
            
            <span className="heading" id="cityStyle"><i className="fa fa-street-view " aria-hidden="true"></i>{props.cityName.toLowerCase()}, {country} {entry}&#xb0; C</span>
            {/* <h1 className="Temp">{entry} C</h1> */}
            {/* < Thermometer className="Temp" id="tempIcon"/> */}
            {/* <button className="apibutton" onClick="apicall">button</button> */}
            <div className="MaxAndMin">
                <span>Max {maxTemp}&#xb0; C | Min {minTemp}&#xb0; C |  {weatherDescription}</span>
            </div>
            <span className="latLon">{long}&#xb0;N {lat}&#xb0;E</span>
        </>
    )
}
export default ApiCall
