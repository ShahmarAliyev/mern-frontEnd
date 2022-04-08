import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding-top: 50px;
  margin-top: 2px;
  display: grid;
  row-gap: 2px;
  column-gap: 2px;
  grid-template-columns: repeat(4, 1fr);
  background-color: #fff6ea;
  width: 100%;
  height: 100vh;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </Container>
  );
};
export default Products;