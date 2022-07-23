import Alert from 'react-bootstrap/Alert';

function Alerts(props) {
  return (
    <>
   
      {props.alert && <Alert variant={props.alert.type}>
         {props.alert.msg}
      </Alert>}

</>
  );
}

export default Alerts;