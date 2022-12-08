import { useState } from "react"
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";

function AddBar({ clothes, setClothes }) {
    const [onName, setOnName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const history = useHistory()

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
        
        fetch("http://localhost:3004/clothes", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem),
        })
        .then(r => r.json())
        .then(() => setClothes([...clothes, newItem]))
        history.push("/portfolio")
    }

    return (
        <form className="form">
            <h3>Add Outfits</h3>
            <label style={{ marginRight: "5px" }}>Outfit name:</label>
            <input type="text" placeholder="Name" value={onName} style={{ marginBottom: "10px" }} onChange={handleNameChange} />
            <br />
            <label style={{ marginRight: "7px" }}>Description:</label>
            <input type="text" placeholder="Description" value={description} style={{ marginBottom: "10px" }} onChange={handleDescriptionChange} />
            <br />
            <label style={{ marginRight: "13px" }}>Image link:</label>
            <input type="text" placeholder="Image" value={image} style={{ marginBottom: "10px" }} onChange={handleImageChange} />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )

}

export default AddBar;
