const CharDisplay = ({char}) => {
    // console.log(char)
    return (
        <div>
            <p>{char.name}</p>
            <p>{char.house}</p>
        </div>
    )
}

export default CharDisplay