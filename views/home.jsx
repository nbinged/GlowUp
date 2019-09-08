const React = require('react');
var Default = require('./layouts/default');
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';

class home extends React.Component {
  render() {

    let addItemURL = `/add`;
    // let addOutfitURL = `outift/add`;
    let editItemURL = `/edit`;
    let deleteItemURL = `/delete`;
    let itemUrl = `/item/`
    // let clothesListing;

    // let clothes = this.props.allclothes;
    let username = this.props.cookieUser;
    // console.log(this.props)
    // let username = this.props[0].username;



//     if (clothes !== null ) {
//         clothesListing = clothes.map(oneItem =>

//             (<Col>

// <a href={'/item/'+oneItem.id}>
//     <div className="clothing-card">
//       <Card style={{ cursor: "pointer" }}>
//         <CardImg top width="100%" src={oneItem.image_file} alt="Card image cap"/>

//         <CardBody>
//           <CardTitle><strong>{oneItem.item_brand}</strong></CardTitle>
//           <CardText>{oneItem.item_name}</CardText>
//         </CardBody>

//       </Card>
//     </div>
// </a>

//         </Col>));

//     } else {
//         clothesListing = '';
//     }

    return (

    <Default>
         <body>

         <Row>
            <Col className="home-bg">
            </Col>
         </Row>

         <Row className="welcome-text">
            <h2><strong>Welcome to your wardrobe, <font color="#11607E">{username}</font>.</strong></h2>
        </Row>

        <Form action="" className="welcome-buttons">

                <Button className="clothes" formaction={addItemURL} type={"submit"} color="success" size="lg">Add new Clothes</Button>

        </Form>

        <Row className="cardHolder">

        </Row>

        <br/>

        </body>

    </Default>

  )};
}

module.exports = home;

// <Button className="outfit" formaction={addOutfitURL} type={"submit"} color="success" size="lg">Create a new Outfit</Button>