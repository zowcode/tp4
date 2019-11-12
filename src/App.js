import React from 'react';
import ProfilInfo from "./composant/ProfilInfo.js";
import ProfilPhoto from "./composant/ProfilPhoto.js";
import ProfilChangeButton from "./composant/ProfilChangeButton";
import SuperButton from "./composant/SuperButton";
import './App.css';

 
// React est un ensemble de composant (comme HTML )
// au lieu que ce soit des balises html juste c'est des class JS qui retourne du HTML


class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      value: 0,

      profils : [
       {
         prenom: "Bob",
         nom: "Razovsky",
         date: "14.03.98",
         photo: "bob",
         publi: "Yo ! Je m'appel Bob, ceci est mon premier post blablablabla.",
         nb_super: 0
     
       },
       {
         prenom: "Martine",
         nom: "Alaplage",
         date: "20.08.98",
         photo: "mar",
         publi: "Salut ! Moi c'est Martine Alaplage, t'as capté le jeu de mot ;) .",
         nb_super: 0
       },
       {
         prenom: "Léon",
         nom: "Chocho",
         date: "09.12.98",
         photo: "leon",
         publi: "Bonsoir, Je me prénomme Léon, je suis encore très novice dans l'art des réseaux sociaux .",
         nb_super: 0
       }
     ]
       
    };
  }

  render(){
  
    return(
      
      <div className="container">

        <div className="row topButton offset-6">
            <button id="text" className = " col col-lg-3 col-md-3 col-sm-4 col-6" onClick={() => this.setState({value: 0})}> {this.state.profils[0].prenom} </button>
            <button id="text" className = " col col-lg-3 col-md-3 col-sm-4 col-6" onClick={() => this.setState({value: 1})}> {this.state.profils[1].prenom} </button>
            <button id="text" className = " col col-lg-3 col-md-3 col-sm-4 col-6" onClick={() => this.setState({value: 2})}> {this.state.profils[2].prenom} </button>
        </div>
      
        <div class="row profil">
          <div id="carte_profil" class="colonne offset-3 col-lg-6 col-md-3 col-sm-4 col-6">
            <div class="row_photo">
              <div class="col_photo offset-4 col-lg-4 col-md-3 col-sm-4 col-6">
            <ProfilPhoto  photo = {this.state.profils[this.state.value].photo}/>
              </div>
            </div>
            
            <div class="row">
              <div class="col_info offset-1 col-lg-4 col-md-3 col-sm-4 col-6">
                <ProfilInfo info= {this.state.profils[this.state.value].prenom}> </ProfilInfo> 
              </div>
              <div class="col_info offset-1 col-lg-4 col-md-3 col-sm-4 col-6">
                <ProfilInfo info= {this.state.profils[this.state.value].nom}> </ProfilInfo>
              </div>
            </div>

            <div class="row"> 
              <div class="col_info offset-1 col-lg-4 col-md-3 col-sm-4 col-6">
                  <ProfilInfo info= {this.state.profils[this.state.value].date}> </ProfilInfo> 
                </div>
            </div>

            <div class="row"> 
              <div class="col_photo offset-8 col-lg-4 col-md-3 col-sm-4 col-6">
                <ProfilChangeButton class="row">  </ProfilChangeButton>
                </div>
            </div>
          </div>
        </div>
        
        <div class="row profil">
         <div class="colonne2 offset-3 col-lg-6 col-md-3 col-sm-4 col-6">
           <text class="row offset-1"> {this.state.profils[this.state.value].publi} </text>
            <div class="row offset-1">
              <SuperButton id = {this.state.value}></SuperButton>
            </div>
          </div>
        </div>

      </div>
    );
  }
  
}
export default App; 
