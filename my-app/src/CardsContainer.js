import { useState } from "react"
import { NavLink } from "react-router-dom"

function CardsContainer({ clothes, setClothes }) {
    const [onDate, setDate] = useState("All")


    function handleDateChange(e) {
        setDate(e.target.value)
    }

    function handleDateClick(item) {

        item.date = onDate

        fetch(`http://localhost:3004/clothes/${item.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                date: onDate
            })
        })
            .then(r => r.json())
            .then(() => {
                const returns = clothes.filter(clothe => {
                    const check = clothe.id !== item.id
                    return check, item
                })
                return setClothes(returns)
            })
    }

    function onDelete(item) {
        fetch(`http://localhost:3004/clothes/${item.id}`, {
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
            <li className="li-card" key={id}>
                <h3 className="trial">{name}</h3>
                <p>{description}</p>
                <img className="li-image" src={image} alt="" />
                <br />
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

    return (
        <>
            <NavLink to="/portfolio/wardrobe" style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>Wardrobe</NavLink>
            <ul>
                {clotheCards}
            </ul>
        </>
    )

}

export default CardsContainer;
