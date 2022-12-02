import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import CardsContainer from "./CardsContainer"
import AddBar from "./AddBar"
import Header from "./Header"
import Wardrobe from "./Wardrobe"
import BotCheck from "./BotCheck";

function App() {
  const [clothes, setClothes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/clothes")
      .then(r => r.json())
      .then(data => {
        setClothes(data)
      })
      .catch(error => {
        console.log(error)
        alert("Uh oh! Seems like there was an error, please try again")
      })

  }, [])

  // console.log("clothes", clothes)

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <BotCheck />
        </Route>
        <Route path="/home">
          <Header />
          <AddBar clothes={clothes} setClothes={setClothes} />
        </Route>
        <Route path="/portfolio">
          <CardsContainer clothes={clothes} setClothes={setClothes} />
        </Route>
        <Route path="/wardrobe">
          <Wardrobe clothes={clothes} setClothes={setClothes} />
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
