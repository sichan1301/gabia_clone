import styled from "styled-components"
import { products } from "../dummyData/data"
import { menuType, product } from "../dummyData/dataType"

type ImgMenuProps = {
  productIdx:number
}

const ImgMenu = ({productIdx}:ImgMenuProps) => {
  return (
    <Section>
      {products[productIdx].menus.map(menus => <ImgMenuUl>
        <p>{menus.title}</p> 
        <ImgDiv>
          <Img src = {require(`../img/${menus.menu as string}`)} />
        </ImgDiv> 
      </ImgMenuUl>)}
    </Section>
  )
}

export default ImgMenu

const Section = styled.section`
  width:60%;
  display: flex;
  justify-content: space-around;
`

const ImgMenuUl = styled.ul`
  display:flex;
  flex-direction: column;
`

const ImgDiv = styled.div`
  width:300px;
  height:150px;
`

const Img = styled.img`
  width:100%;
  height:100%;
`