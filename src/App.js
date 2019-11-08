import React from 'react';
import ProfilContainer from "./composant/ProfilContainer/ProfilContainer.js";
import SuperContainer from "./composant/SuperContainer/SuperContainer.js";
import ProfilButton from "./composant/ProfilButton";
import './App.css';

 
// React est un ensemble de composant (comme HTML )
// au lieu que ce soit des balises html juste c'est des class JS qui retourne du HTML

class App extends React.Component{
  constructor(props){
    super(props);
    const profils = [
      {
        prenom: "Bob",
        nom: "Razovsky",
        date: "14.03.98",
        photo: "bob.png"

      },
      {
        prenom: "Martine",
        nom: "Alaplage",
        date: "14.03.98",
        photo: "mar.png"
      },
      {
        nom: "Camille",
        nom: "Chocho",
        date: "14.03.98",
        photo: "cam.png"
      }
    ];
    this.profils = profils;

  }
  render(){
    return(
      <div>

        <ProfilButton profils={1}/>
        <ProfilButton profils={2}/>
        <ProfilButton profils={3}/>

        <ProfilContainer profils={1} /> 
        <SuperContainer/> 
    
      </div>
    );
  }
}
export default App; // obligé

// afficher maison dans app 

/*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
/*/