import { useRouter } from "next/router";  
import Query from "../components/query";  
import GET_RESTAURANT_DISHES from "../apollo/queries/restaurant/dishes";
import {
  Button,
  Card,
  CardBody,
  CardColumns,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row
} from "reactstrap";
import Cart from "../components/Cart";
import { withContext } from "../components/Context/AppProvider";
import { compose } from "recompose";
import defaultPage from "../hocs/defaultPage";

const Restaurant = (props) => {  
  const router = useRouter();

  const {
    context,
    isAuthenticated
  } = props;

  const addItem = (item) => {
    context.addItem(item);
  }

  return (
    <Query query={GET_RESTAURANT_DISHES} id={router.query.id}>
      {({ data: { restaurant } }) => {
        return (
          <>
          <h1>{restaurant.name}</h1>
            <Row>
              <Col xs="9" style={{ padding: 0 }}>
                <div style={{ display: "inline-block" }} className="h-100">
                  {restaurant.dishes.map(res => (
                    <Card
                      style={{ width: "30%", margin: "0 10px" }}
                      key={res.id}
                    >
                      <CardImg
                        top={true}
                        style={{ height: 250 }}
                        src={`http://localhost:1337${res.image.url}`}
                      />
                      <CardBody>
                        <CardTitle>{res.name}</CardTitle>
                        <CardText>{res.description}</CardText>
                      </CardBody>
                      <div className="card-footer">
                        <Button
                          onClick={addItem.bind(this, res)}
                          outline
                          color="primary"
                        >
                          + Add To Cart
                        </Button>

                        <style jsx>
                          {`
                            a {
                              color: white;
                            }
                            a:link {
                              text-decoration: none;
                              color: white;
                            }
                            .container-fluid {
                              margin-bottom: 30px;
                            }
                            .btn-outline-primary {
                              color: #007bff !important;
                            }
                            a:hover {
                              color: white !important;
                            }
                          `}
                        </style>
                      </div>
                    </Card>
                  ))}
                </div>
              </Col>
              <Col xs="3" style={{ padding: 0 }}>
                <div>
                  <Cart isAuthenticated={props.isAuthenticated} />
                </div>
              </Col>
            </Row>
          </>
        );
      }}
    </Query>
  );
};

export default compose(
  defaultPage,
  withContext
)(Restaurant);