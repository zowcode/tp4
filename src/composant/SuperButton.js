import React from 'react';

// je veux afficher un Boutton profil
class SuperButton extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          value: props,
            nb_super_bob: 0,
            nb_super_martine: 0,
            nb_super_leon: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const value = this.props;
        console.log(value);
        if(value == "0")
        {
          console.log("je suis bob ! ");
          this.setState({
           
          })
          console.log(this.state.nb_super_bob);
        }
        if(value == 1)
        {
          this.setState({
          
          })
          console.log(this.state.nb_super_martine);
        }
        if(value==2)
        {
          this.setState({
          
          })
          console.log(this.state.nb_super_leon);
        }

      };

    render(){
    
      return(
        <div>
          <button onClick={this.handleClick} id= "buttonStyle" >   C'est Super !  </button>
          <div id ="text">  fghjk  </div>

        </div>
           
        );
    }
  }
  export default SuperButton; // obligé

