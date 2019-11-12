import React from 'react';
import ProfilPhoto from "./ProfilPhoto";
import ProfilInfo from "./ProfilInfo";
import ProfilChangeButton from "./ProfilChangeButton";

// je veux afficher Container avec dedans ProfilPhoto / ProfilInfo / ProfilChangeButton
class ProfilContainer extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        value: null,
      }
    }
    render(){
      const prenom = this.props.profil;
      const nom = this.props.profil;
      return( 
        <div> 
          {prenom} 
          {nom} 

          <ProfilPhoto/>
          <ProfilInfo/>
          <ProfilChangeButton/>
        </div>
        
      );
    }
  }
  export default ProfilContainer; // obligé