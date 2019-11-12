import React from 'react';
import bob from '../photos/bob.png';
import leon from '../photos/leon.png';
import mar from '../photos/mar.png';

// je veux afficher Photo
class ProfilPhoto extends React.Component{
    render(){
      this.photo = this.props.photo; 
      if(this.photo == "bob"){
        return( 
       
          <div  class="photo" > 
          <img src= {bob} alt='erreure'/>
          </div>
        );
      }
      if(this.photo == "mar")
      {
        return( 
       
          <div> 
          <img src= {mar} alt='erreure'/>
          </div>
        );
      }

      if(this.photo == "leon")
      {
        return( 
       
          <div> 
          <img src= {leon} alt='erreure'/>
          </div>
        );
      }
    }
  }
  export default ProfilPhoto; // obligé