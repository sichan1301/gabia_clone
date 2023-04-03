import styled from "styled-components"
import { products } from "../dummyData/data"

type ImgMenuProps = {
  productIdx:number
}

const ImgMenu = ({productIdx}:ImgMenuProps) => {
  return (
    <Section>
      {products[productIdx].menus.map(menus => <ImgMenuUl>
        <Title>{menus.title}</Title> 
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

const Title = styled.p`
  font-size: 20px;
  color:grey;
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