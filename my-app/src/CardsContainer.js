import Cards from "./Cards"
import {useState} from "react"

function CardsContainer({ clothes }) {
 const [date, setDate] = useState("")

    function handleDateChange(e) {
        setDate(e.target.value)
    }

    function handleDateClick(e){
        console.log(e.target)
        if (date !== "All"){
            console.log(date)
        } // how to get value of target? 
    } //needs to take date and add it to clothes 

    const clotheCards = clothes.map((item) => {
        const { id, name, description, image } = item
        return (
            <li key={id} style={{ border: "10px" }}>
                <h3>{name}</h3>
                <p>{description}</p>
                <img src={image} alt="" />
                <select onChange={handleDateChange}>
                    <option value="All">Add to wardrobe</option>
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                </select>
                <button onClick={handleDateClick}>Add</button>
            </li>
        )
    })

    return <Cards clothes={clotheCards} />

}

export default CardsContainer;

// will get the initial info for each card before passing it down to the card container to create each card