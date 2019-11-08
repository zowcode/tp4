import React from 'react';
import ProfilPhoto from "./ProfilPhoto";
import ProfilInfo from "./ProfilInfo";
import ProfilChangeButton from "./ProfilChangeButton";

// je veux afficher Container avec dedans ProfilPhoto / ProfilInfo / ProfilChangeButton
class ProfilContainer extends React.Component{
    
    render(){
      return( 

        <div> 
        <ProfilPhoto/>
        <ProfilInfo/>
        <ProfilChangeButton/>
       
        </div>
        
      );
    }
  }
  export default ProfilContainer; // obligé