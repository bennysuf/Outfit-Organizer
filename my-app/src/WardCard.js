
function WardCard({item, handleRemoval}) {
    return (
        <div key={item.id} style={{ border: "10px" }}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button onClick={() => handleRemoval(item)}>Remove</button>
        </div>
    )
}

export default WardCard;