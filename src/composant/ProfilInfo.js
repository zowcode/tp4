import React from 'react';

// je veux afficher Profil Info
class ProfilInfo extends React.Component{
    
    render(){
      this.info = this.props.info;
      return( 
        <div  id="text2"  class="prenom"> {this.info} </div>
        
      );
    }
  }
  export default ProfilInfo; // obligés