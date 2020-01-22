import RestaurantList from "../components/RestaurantList";
import React from "react";
import Query from "../components/query";  
import securePage from "../hocs/securePage";
import RESTAURANTS_QUERY from "../apollo/queries/restaurant/restaurants";

import {
  Col,
  Row
} from "reactstrap";

const Home = () => {  
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <Query query={RESTAURANTS_QUERY}>
            {({ data: { restaurants } }) => {
              return <RestaurantList restaurants={restaurants} />;
            }}
          </Query>
        </Col>
      </Row>
    </div>
  );
}

export default securePage(Home);