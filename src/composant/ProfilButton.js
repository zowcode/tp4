import React from 'react';

// je veux afficher un Boutton profil
class ProfilButton extends React.Component{
  
    render(){
        const name = this.props.name;
      return( 
        <div>  {name} </div>
      );
    }
  }
  export default ProfilButton; // obligé