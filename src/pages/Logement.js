import React, {useState, useEffect} from "react"
import Collapse from "../Components/Collapse"
import Slideshow from "../Components/Slideshow"

function Logement () {
  const [dataLoc, setData]=useState([])
  const getData= ()=> {
     fetch('./data.json'
     ,{
        headers : {
           'Content-Type' : 'application/json',
           'Accept' : 'application/json'
        }
     }
     )
        .then(function(response){
           console.log(response)
           return response.json()
        })
        .then (function(myJson){
           console.log(myJson)
           setData(myJson)
        })
  }
  useEffect(() => {
     getData()
  }, [])
   return (
   <div>
      <div className="kasa-container-logement">
         { dataLoc && dataLoc.length>0 && dataLoc.map (({id, title, pictures, description, host, location, rating, equipments, tags}) => 
            <div>
              <Slideshow
                key={id}
                pictures={pictures}
              />
              <div className="kasa-log-title">
                <h1>{title}</h1>
                <p>{location}</p>
              </div>
              <div className="kasa-log-host">{host}</div>
              <div>
                <p>{tags}</p>
                <p>{rating} </p>
              </div>
              <Collapse 
                description={description}
                equipments={equipments}
              />
           </div> 
         )}
      </div>
   </div>
   )
  }

  export default Logement