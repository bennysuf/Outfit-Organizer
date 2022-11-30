import Cards from "./Cards"

function CardsContainer({ clothes }) {

    const clotheCards = clothes.map((item) => {
        const { id, name, description, image } = item
        return (
            <li key={id} style={{ border: "10px" }}>
                <h1>{name}</h1>
                <p>{description}</p>
                <img src={image} alt="" />
            </li>
        )
    })

    return <Cards clothes={clotheCards} />

}

export default CardsContainer;

// will get the initial info for each card before passing it down to the card container to create each card