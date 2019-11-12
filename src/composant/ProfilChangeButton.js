import React from 'react';

// je veux afficher Profil Info
class ProfilChangeButton extends React.Component{
    render(){
      return( 
        <button id="buttonStyle" onClick={function() { 
            
          // on récupère l'élément
          var elmt = document.getElementById("carte_profil");

          // on modifie son style
          elmt.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);}}>
            
          Change Style 
        </button>

      );
    }
  }
  export default ProfilChangeButton; // obligé