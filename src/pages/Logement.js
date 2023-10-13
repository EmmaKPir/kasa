import React, { useState, useEffect } from "react";
import Collapse from "../Components/Collapse";
import Slideshow from "../Components/Slideshow";
import StarRating from "../Components/Rating";
import { useNavigate, useParams} from "react-router-dom"

const Logement = () => {
   const params = useParams();
   const navigate = useNavigate();
   const id = params.id;
   const [logementActif, setLogementActif] = useState(undefined);
 
   useEffect(() => {
     try {
       fetch(`../../data.json`, {
         headers: {
           "Content-type": "Application/json",
           Accept: "Application/json",
         },
       })
         .then((response) => {
           return response.json();
         })
         .then((data) => {
           const dataLogement = data.find((logement) => logement.id === id);
           if (dataLogement === undefined) {
             navigate("*");
           } else {
             setLogementActif(dataLogement);
           }
         });
     } catch (error) {
       console.error(error);
     }
   }, [navigate, id]);

   if (logementActif) {
      const {title, location, tags, description, equipments, host, rating} =
        logementActif;

   const listEquipments = equipments.map((equipment) => (
      <li key={equipment}>{equipment}</li>
   ))

   return (
      <div className="kasa-container-logement">
        {logementActif != null ? ( 
        <div> 
          <Slideshow currentLogement={logementActif} />
          <h2 className="kasa-slider-title">{title}</h2>
          <p className="kasa-slider-location">{location}</p>
          <p className="kasa-slider-tags">{tags.map((tag) =>(
            <li key={tag}>{tag}</li>
          ))}</p>
          <div className="kasa-host-rating">
            <div className="kasa-host">
              <p className="host-name">{host.name}</p>
              <img src={host.picture} alt="face-host" className="host-picture"/>
            </div>
            <StarRating rating={rating}/>
          </div>  
        </div>
         ): null}
          <div className="kasa-container-equipments">
            <Collapse title="Description">
              <p>{description}</p> 
            </Collapse>
            <Collapse title="Équipements">
              <ul> {listEquipments} </ul> 
            </Collapse>
          </div>
      </div>
   )
}

}
export default Logement;
