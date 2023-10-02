import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slideshow from "../Components/Slideshow";

function Logement() {
   const [logement, setDataLogement] = useState(null)
   const location = useLocation()

   useEffect(() => {
      if (location.state && location.state.logementId) {
         fetch('../../data.json', {
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json',
            },
         })
            .then((response) => {
               if (!response.ok) {
                  throw new Error("Réponse du serveur non valide");
               }
               return response.json();
            })
            .then((logements) => {
               const selectedLogement = logements.find((logement) => logement.id === location.state.logementId);
               setDataLogement(selectedLogement);
            })
            .catch((error) => {
               console.error("Erreur lors de la récupération des données:", error);
            });
      }
   }, [location.state]);

   //if (logement == null) return <p>Chargement en cours ...</p>;
   return (
      <div className="kasa-container-logement">
         <Slideshow 
            pictures={logement.pictures}
            id= {logement.id}   
         />
         <h1>{logement.title}</h1>
      </div>
   );
}

export default Logement;
