import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import About from './components/About';
import ImgMenu from './components/ImgMenu';
import TextMenu from './components/TextMenu';

import { products } from './dummyData/data';

function App() {
  const [productIdx, setProductIdx] = useState<number>(0);
  const handleMouseEnter = (productIdx:number) => {
    setProductIdx(productIdx)
  }
  
  return (
    <>
      <ProductNav>
        {products.map((product,productIdx:number) => <ProductLi onMouseEnter={() => handleMouseEnter(productIdx)}><a href={product.serviceLink}>{product.title}</a></ProductLi>)}
      </ProductNav>
      
      <Container>
        <About productIdx = {productIdx}/> 
        {products[productIdx].type==="TextMenu"?<TextMenu productIdx = {productIdx}/>:<ImgMenu productIdx = {productIdx}/>}
      </Container>
    </>
  );
}

export default App;

const ProductNav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding:0 200px;
`

const ProductLi = styled.p`
  font-size:20px;
`

const Container = styled.section`
  display: flex;
`