import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import FitnessProduct from "../components/FitnessProduct";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const Fitness = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Fitness & Sports</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Brand
            </Option>
            <Option></Option>
            <Option>Adidas</Option>
            <Option>Puma</Option>
            <Option>Nike</Option>
            
          </Select>
          <Select>
            <Option disabled selected>
              Category
            </Option>
            <Option>Cricket Bat</Option>
            <Option>Cricket Ball</Option>
            <Option>Trademill</Option>
            <Option>Football</Option>
            <Option>Basketball</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <FitnessProduct />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Fitness;