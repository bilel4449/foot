
const Player = (props) => {
    console.log(props)
  return (
    <div>
    <p>
        <strong>name :</strong> {props.pl.name}
    </p>
    </div>
  )
}

export default Player