import gql from "graphql-tag";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardColumns,
  CardImg,
  CardSubtitle
} from "reactstrap";
import { CardText, CardTitle, Col, Row } from "reactstrap";

const RestaurantList = ({restaurants}) => {
  return (
    <div>
      <div className="h-100">
        {restaurants.map(res => (
          <Card
            style={{ width: "30%", margin: "0 10px" }}
            className="h-100"
            key={res.id}
          >
            <CardImg
              top={true}
              style={{ height: 250 }}
              src={process.env.API_URL + res.image.url}
            />
            <CardBody>
              <CardTitle>{res.name}</CardTitle>
              <CardText>{res.description}</CardText>
            </CardBody>
            <div className="card-footer">
              <Link
                href={{
                  pathname: "restaurant",
                  query: { id: res.id }
                }}
              >
                <a className="btn btn-primary">View</a>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <style jsx global>
        {`
          a {
            color: white;
          }
          a:link {
            text-decoration: none;
            color: white;
          }
          a:hover {
            color: white;
          }
          .card-columns {
            column-count: 3;
          }
        `}
      </style>
    </div>
  );
};


export default RestaurantList;