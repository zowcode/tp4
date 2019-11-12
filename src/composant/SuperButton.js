import React from 'react';

// je veux afficher un Boutton profil
class SuperButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nb_super:0,
            nb_super_bob: 1,
            nb_super_martine: 1,
            nb_super_leon: 1,

        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
    

      if(this.props.id ==0){
        console.log("je suis bob ! ");
        this.setState({
          nb_super: this.state.nb_super_bob,
          nb_super_bob: this.state.nb_super_bob + 1,
          nb_super: this.state.nb_super_bob,
          
        });

        console.log(this.state.nb_super_bob);
        console.log(this.state.nb_super);

      }
      if(this.props.id ==1){
        
        console.log("je suis martine ! ");
        this.setState({
          nb_super: this.state.nb_super_martine,
          nb_super_martine: this.state.nb_super_martine + 1,
        });
      }
      if(this.props.id ==2){
        console.log("je suis léon ! ");
       
        this.setState({
          nb_super: this.state.nb_super_leon,
          nb_super_leon: this.state.nb_super_leon + 1,
        });
      }
    };

    render(){
    
      return(
        <div className =" row ">
          <button onClick={this.handleClick} id= "buttonStyle" >   C'est Super !  </button>
          <div id ="nbSuper">  {this.state.nb_super} </div>

        </div>
           
        );
    }
  }
  export default SuperButton; // obligé

