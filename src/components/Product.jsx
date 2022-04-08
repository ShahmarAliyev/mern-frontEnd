import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";

const Icon = styled.div`
  opacity: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    /* background-color: #e9f5f5; */
    /* transform: scale(1.1); */
    /* opacity: 1; */
  }
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  /* &:hover ${Icon} {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.1);
  } */
`;

const Container = styled.div`
  flex: 1;
  /* min-width: 280px; */
  /* width: 380px;
  height: 380px; */
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff6ea;
  position: relative;

  &:hover ${Icon} {
    opacity: 1;
  }
  &:hover ${Info} {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 2;
`;
// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;

const Product = ({ product }) => {
  return (
    <Container>
      {/* <Circle /> */}
      <Image src={product.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;