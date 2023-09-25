import Banner from "../Components/Banner"
import Card from "../Components/Card"
import Falaise from "../assets/falaise.png"
import React, {useState, useEffect} from "react"

function Home () {
   const [data, setData]=useState([])
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
      <Banner imageSource={Falaise} showText />
      <div className="kasa-container-card">
         { data && data.length>0 && data.map (({id, title, cover}) => 
            <Card
               key={id}
               title={title}
               cover={cover}
            />
         )}
      </div>
   </div>
   )
  }

  export default Home