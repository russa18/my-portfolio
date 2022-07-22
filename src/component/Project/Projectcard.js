import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Projectcard.css";
import codingImg from "./coding.png" ;

function Projectcard(props) {
  let {title,description,gitLink}=props;
  return (
    <Card >
      <img className='cd-img' variant="top" src={codingImg} alt='' />
      <hr/>
      <Card.Body >
        <Card.Title className='cd-title' style={{fontSize: "2rem"}}>{title}</Card.Title>
        <Card.Text className='cd-desc'>
        {description}
        </Card.Text>
        <a href={gitLink} target="_blank" rel="noreferrer"><Button  variant="primary">Code</Button></a>
      </Card.Body>
    </Card>
  );
}

export default Projectcard;