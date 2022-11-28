import {useState, useEffect} from "react";

function App() {
  const [clothes, setClothes] = useState([])
  
useEffect(()=> {
  fetch("http://localhost:3000/clothes")
  .then(r => r.json())
  .then(data => setClothes(data))

}, [])

console.log("clothes", clothes)

}

export default App;
