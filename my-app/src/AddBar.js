import { useState } from "react"
import uuid from 'react-uuid';

function AddBar({ clothes, setClothes }) {
    const [onName, setOnName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    function handleNameChange(e) {
        setOnName(e.target.value)
    }
    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }
    function handleImageChange(e) {
        setImage(e.target.value)
    }

    function handleSubmit(e) {

        e.preventDefault()

        const newItem = {
            id: uuid(),
            name: onName,
            description: description,
            image: image,
            date: "All"
        }

        fetch("http://localhost:3000/clothes", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem),
        })
            .then(r => r.json())
            .then(() => setClothes([...clothes, newItem]))
            .then(alert("Item added!"))
            .catch(e => console.log(e))

        //take all states and post and add to clothes state with values as object values
    }

    return (
        <form style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "5px" }}>Clothe name:</label>
            <input name="name" type="text" value={onName} style={{ marginBottom: "10px" }} onChange={handleNameChange} />
            <br />
            <label style={{ marginRight: "5px" }}>Description:</label>
            <input type="text" name="description" value={description} style={{ marginBottom: "10px" }} onChange={handleDescriptionChange} />
            <br />
            <label style={{ marginRight: "5px" }}>Image link:</label>
            <input type="text" name="image" value={image} style={{ marginBottom: "10px" }} onChange={handleImageChange} />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )

}

export default AddBar;

// this is for adding new cards, in an onsubmit it should pass the info up to App to render into cards
//should be able to take an image link, description, and a name for the card