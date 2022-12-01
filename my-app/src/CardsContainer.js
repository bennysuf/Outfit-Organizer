// import Cards from "./Cards"
import { useState } from "react"

function CardsContainer({ clothes, setClothes }) {
    const [onDate, setDate] = useState("")

    function handleDateChange(e) {
        setDate(e.target.value)
    }

    function handleDateClick(item) {
        // console.log(item)
        // if (onDate !== "All") {
            // console.log("data from fetch", item)
            item.date = onDate

            fetch(`http://localhost:3000/clothes/${item.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    date: onDate
                })
            })
                .then(r => r.json())
                .then(() => {
                    const returns = clothes.filter(cloth => {
                        const check = cloth.id !== item.id
                        return check, item
                    })
                    return setClothes(returns)
                }) 
            // .catch(e => console.log("patch", e))
        }
    // }

    function onDelete(item) {
        fetch(`http://localhost:3000/clothes/${item.id}`, {
                method: "DELETE"
            })
            .then(r => r.json())
            .then(() => {
                const newList = clothes.filter(clothe => clothe.id !== item.id)
                setClothes(newList)
        })
    }

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
                <button onClick={() => handleDateClick(item)}>Add</button>
                <br />
                <button onClick={() => onDelete(item)}>Delete item</button>
            </li>
        )
    })

    // return <Cards clothes={clotheCards} />
    return (
        <ul>
            {clotheCards}
        </ul>
    )

}

export default CardsContainer;

// will get the initial info for each card before passing it down to the card container to create each card

