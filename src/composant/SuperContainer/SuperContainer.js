import React from 'react';
import SuperButton from './SuperButton.js';

// je veux afficher du texte et un SuperButton
class SuperContainer extends React.Component{
    render(){
      return( 

        <div> 
            texte texte texte texte 
            <SuperButton/>
        </div>
        
      );
    }
  }
  export default SuperContainer; // obligé