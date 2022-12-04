import { useState, useEffect } from "react"
import WardCard from "./WardCard"

function Wardrobe({ clothes, setClothes, setReload, reload}) {
    const [onSunday, setOnSunday] = useState([])
    const [onMonday, setOnMonday] = useState([])
    const [onTuesday, setOnTuesday] = useState([])
    const [onWednesday, setOnWednesday] = useState([])
    const [onThursday, setOnThursday] = useState([])
    const [onFriday, setOnFriday] = useState([])
    const [onSaturday, setOnSaturday] = useState([])

    useEffect(() => {
        const sundayCheck = clothes.filter(item => item.date === "Sunday")
        setOnSunday(sundayCheck)
        const mondayCheck = clothes.filter(item => item.date === "Monday")
        setOnMonday(mondayCheck)
        const tuesdayCheck = clothes.filter(item => item.date === "Tuesday")
        setOnTuesday(tuesdayCheck)
        const wednesdayCheck = clothes.filter(item => item.date === "Wednesday")
        setOnWednesday(wednesdayCheck)
        const thursdayCheck = clothes.filter(item => item.date === "Thursday")
        setOnThursday(thursdayCheck)
        const fridayCheck = clothes.filter(item => item.date === "Friday")
        setOnFriday(fridayCheck)
        const saturdayCheck = clothes.filter(item => item.date === "Saturday")
        setOnSaturday(saturdayCheck)
    }, [reload])
    
    function handleRemoval(item) {
        item.date = "All"
        
        fetch(`http://localhost:3000/clothes/${item.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                date: "All"
            })
        })
        .then(r => r.json())
        .then(() => {
            const returns = clothes.filter(clothe => {
                const check = clothe.id !== item.id && item
                return check
            })
                setReload(item)
                return setClothes(returns)
            })
    }

    const sunMap = onSunday.map(item => {
        return <WardCard item={item} handleRemoval={handleRemoval} />
    })

    const monMap = onMonday.map(item => {
        return <WardCard item={item} handleRemoval={handleRemoval} />
    })

    const tueMap = onTuesday.map(item => {
        return <WardCard item={item} handleRemoval={handleRemoval} />
    })

    const wedMap = onWednesday.map(item => {
        return <WardCard item={item} handleRemoval={handleRemoval} />
    })

    const thuMap = onThursday.map(item => {
        return <WardCard item={item} handleRemoval={handleRemoval} />
    })

    const friMap = onFriday.map(item => {
        return <WardCard item={item} handleRemoval={handleRemoval} />
    })

    const satMap = onSaturday.map(item => {
        return <WardCard item={item} handleRemoval={handleRemoval} />
    })

    return (
        <>
            <table align="center" cellPadding="85">
                <thead>
                    <tr bgcolor="lightgrey" >
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>sat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr align="center" >
                        <td className="days" value="sunday">{sunMap}</td>
                        <td className="days" value="monday">{monMap}</td>
                        <td className="days" value="tuesday">{tueMap}</td>
                        <td className="days" value="wednesday">{wedMap}</td>
                        <td className="days" value="thursday">{thuMap}</td>
                        <td className="days" value="friday">{friMap}</td>
                        <td className="days" value="saturday">{satMap}</td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}



export default Wardrobe;

// maybe have when card is clicked, it should take you to the cards page or open just that card to show the image and click again to close it (like a learn more btn)
