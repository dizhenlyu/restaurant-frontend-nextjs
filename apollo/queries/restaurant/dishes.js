import gql from 'graphql-tag';

const GET_RESTAURANT_DISHES = gql`
query Restaurant($id: ID!) {
  restaurant(id: $id) {
    id
    name
    dishes {
      id
      name
      description
      price
      image {
        url
      }
    }
  }
}
`;
export default GET_RESTAURANT_DISHES;  