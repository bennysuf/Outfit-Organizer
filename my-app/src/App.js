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
    <Header /> 
    <Switch>
      <Route exact path="/">
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
