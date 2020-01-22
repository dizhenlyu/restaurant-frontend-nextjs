import gql from "graphql-tag";

const RESTAURANTS_QUERY = gql`  
  query Restaurants {  
    restaurants {
      id
      name
      description
      image {
        url
      }
    }
  }
`;

export default RESTAURANTS_QUERY;  