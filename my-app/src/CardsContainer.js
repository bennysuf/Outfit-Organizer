import Cards from "./Cards"
import {useState} from "react"

function CardsContainer({ clothes }) {
 const [date, setDate] = useState("")

    function handleDateChange(e) {
        setDate(e.target.value)
    }

    function handleDateClick(){
        if (date !== "Add to wardrobe"){
            console.log(date)
        }
    }

    const clotheCards = clothes.map((item) => {
        const { id, name, description, image } = item
        return (
            <li key={id} style={{ border: "10px" }}>
                <h1>{name}</h1>
                <p>{description}</p>
                <img src={image} alt="" />
                <select onChange={handleDateChange}>
                    <option>Add to wardrobe</option>
                    <option>Sunday</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                </select>
                <button onClick={handleDateClick}>Add</button>
            </li>
        )
    })

    return <Cards clothes={clotheCards} />

}

export default CardsContainer;

// will get the initial info for each card before passing it down to the card container to create each card