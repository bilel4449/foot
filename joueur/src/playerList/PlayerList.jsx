import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const PlayerList = (Player,alertFunction) => {
  return (
    <div>
        <Card style={{ width: '18rem',backgroundColor:'aqua',marginBottom:'15px' }}>
      <Card.Img variant="top" src={Player.element.image} />
      <Card.Body>
        <Card.Title>
            Name: {Player.element.name}<br />
        </Card.Title>
        <Card.Text>
       
          Equipe: {Player.element.equipe} <br />
        Nationalité: {Player.element.nationalite} <br />
          Age: {Player.element.age}<br />
         
        </Card.Text>
        <Button variant="primary" onClick={e=>alertFunction(Player)} >Info</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default PlayerList