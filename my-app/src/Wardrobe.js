import { useState, useEffect } from "react"
import WardCard from "./WardCard"

function Wardrobe({ clothes, setClothes, setReload, reload }) {
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

        fetch(`http://localhost:3004/clothes/${item.id}`, {
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
        return <WardCard key={item.id} item={item} handleRemoval={handleRemoval} />
    })

    const monMap = onMonday.map(item => {
        return <WardCard key={item.id} item={item} handleRemoval={handleRemoval} />
    })

    const tueMap = onTuesday.map(item => {
        return <WardCard key={item.id} item={item} handleRemoval={handleRemoval} />
    })

    const wedMap = onWednesday.map(item => {
        return <WardCard key={item.id} item={item} handleRemoval={handleRemoval} />
    })

    const thuMap = onThursday.map(item => {
        return <WardCard key={item.id} item={item} handleRemoval={handleRemoval} />
    })

    const friMap = onFriday.map(item => {
        return <WardCard key={item.id} item={item} handleRemoval={handleRemoval} />
    })

    const satMap = onSaturday.map(item => {
        return <WardCard key={item.id} item={item} handleRemoval={handleRemoval} />
    })

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const daysMap = daysOfWeek.map(date => <th>{date}</th>)

    const statesOfWeek = [sunMap, monMap, tueMap, wedMap, thuMap, friMap, satMap]

    const stateMap = statesOfWeek.map(date => <td className="days">{date}</td>)

    return (
        <>
            <table align="center" cellPadding="85">
                <thead>
                    <tr style={{ backgroundColor: "lightgrey" }} >
                        {daysMap}
                    </tr>
                </thead>
                <tbody>
                    <tr align="center" >
                        {stateMap}
                    </tr>
                </tbody>
            </table>
        </>

    )
}



export default Wardrobe;
