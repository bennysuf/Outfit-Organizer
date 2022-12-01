

function Wardrobe({ clothes, setClothes }) {

    function handleRemoval(item) {
        console.log("ward", item)
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
                    const check = clothe.id !== item.id
                    return check, item
                })
                return setClothes(returns)
            })

    }

    const ward = clothes.filter(item => {
        return item.date !== "All"
    })

    const maps = ward.map(item => {
        return (
            <li key={item.id} style={{ border: "10px" }}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button onClick={() => handleRemoval(item)}>Remove</button>
            </li>
        )
    })

    // console.log("ward update", ward)

    return (
        <ul>
            {maps}
        </ul>
    )
}



export default Wardrobe;

//this will have multiple sections, one for each day of the week and filter based off the object value it will be rendered to that dates card
//might need to make another child component to pass the cards into and to render on the DOM.
// maybe have when card is clicked, it should take you to the cards page or open just that card to show the image and click again to close it (like a learn more btn)


//when item is removed from wardrobe, just patch the date to "All"

//switch if date === sunday add state? then render state into a card? 
