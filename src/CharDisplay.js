const CharDisplay = ({char, addToFavs}) => {
    // console.log(char)
    return (
        <div>
            <p>{char.name}</p>
            <p>{char.house}</p>

            <button onClick={() => addToFavs(char)}>Add to favorites</button>
        </div>
    )
}

export default CharDisplay