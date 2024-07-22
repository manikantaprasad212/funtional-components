import logo from './logo.svg';
import './App.css';
import Playerr from './components/Playerr.jS';



function App() {
  return (
    <div className="App">
      <div className="playerDiv">
        <img className="playerPic" src="./images/MS Dhoni.png"></img>
        <h2>Name:Ms.Dhoni</h2>
        <h3>Role:Wicketkeeper</h3>
        <h3>Team:Chennai Super kings</h3>
      </div>
      <div className="playerDiv">
        <img className="playerPic" src="./images/Ruthuraj Gaikwad.png"></img>
        <h2>Name:Ruthuraj Gaikwad</h2>
        <h3>Role:Batter</h3>
        <h3>Team:Chennai Super kings</h3>
      </div>
      <div className="playerDiv">
        <img className="playerPic" src="./images/Rivndra Jadeja.png"></img>
        <h2>Name:Rivndra Jadeja</h2>
        <h3>Role:All Rounder</h3>
        <h3>Team:Chennai Super kings</h3>
      </div>
      <Playerr></Playerr>
    </div>
  );
}

export default App;
