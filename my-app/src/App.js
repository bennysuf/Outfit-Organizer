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
  const [reload, setReload] = useState("") // this is used to rerender components
  
  useEffect(() => {
    fetch("http://localhost:3004/clothes")
    .then(r => r.json())
    .then(data => {
      setClothes(data)
      })
      .catch(error => {
        console.log(error)
        alert("Uh oh! Seems like there was an error, please try again")
      })

  }, [reload])

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <BotCheck />
        </Route>
        <Route exact path="/home">
          <Header />
        </Route>
        <Route path="/home/new" >
          <AddBar clothes={clothes} setClothes={setClothes} />
        </Route>
        <Route path="/portfolio">
          <CardsContainer clothes={clothes} setClothes={setClothes} />
        </Route>
        <Route path="/wardrobe">
          <Wardrobe clothes={clothes} setClothes={setClothes} setReload={setReload} reload={reload}/>
        </Route>
        <Route path="*">
          <h1>404 Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  )

}

export default App;

