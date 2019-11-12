import React from 'react';

// je veux afficher un Boutton profil
class ProfilButton extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        value: 0,
      }
    }
    render(){
        const name = this.props.name;
      return( 
        <div>  {name} </div>
      );
    }
  }
  export default ProfilButton; // obligé