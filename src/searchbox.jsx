import react, { useState } from "react"
import ApiCall from "./Api"
function SearchBox(){
  const [city,setcity]=useState("")
  const [finalcity,setfinalcity]=useState("New Delhi")
  function inputchange(e){
    setcity(e.target.value)
  }
  function finalInput(e){
    e.preventDefault()
    setfinalcity(city)
    console.log(finalcity)
    setcity("")
  }
    return(
      <>
        {/* <nav className="navbar navbar-light bg-light">
            <div className="container-fluid container">
              <form className="d-flex">
                <input className="form-control me-2 font-weight-bold" type="search" placeholder="Search" aria-label="Search" onChange={inputchange} value={city}/>
                <button className="btn btn-outline-success font-weight-bold" type="submit" onClick={finalInput}>Search</button>
              </form>
              </div>
          </nav> */}
          <div className="container">
          <input className="" type="text" placeholder="Type city name..." aria-label="Search" onChange={inputchange} value={city}/>
          <button className="" type="submit" onClick={finalInput}>Search</button>
          </div>
          <ApiCall cityName={finalcity}/>
          </>
    )
    
}
export default SearchBox