import {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import CardsContainer from "./CardsContainer"
import AddBar from "./AddBar"
import Header from "./Header"
import Wardrobe from "./Wardrobe"

function App() {
  const [clothes, setClothes] = useState([])
  
useEffect(()=> {
  fetch("http://localhost:3000/clothes")
  .then(r => r.json())
  .then(data => setClothes(data))

}, [])

console.log("clothes", clothes)

return (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Header /> 
        <CardsContainer /> 
        <AddBar />
      </Route>
      <Route path="/wardrobe">
        <Wardrobe />
      </Route>
    </Switch>
  </div>
)

}

export default App;

//add image, clothe name, description in home
//portfolio renders all cards
// can i create button for each day of the week which can update data obj,
//wardrobe renders a card for each week and shows card name only?
// add are you a bot button to open /home
//add dropdown for each card with the days of the week and do an onChange to update the object value;