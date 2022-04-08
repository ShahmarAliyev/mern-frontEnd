import styled from "styled-components";
import { categories } from "../data.js";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  background-color: #fff6ea;
  margin-top: 1px;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => {
        return <CategoryItem key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default Categories;
