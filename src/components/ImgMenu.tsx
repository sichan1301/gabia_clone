import styled from "styled-components"
import { products } from "../dummyData/data"
import { imgLink, subMenuImageType, subMenuType } from "../dummyData/dataType"

type ImgMenuProps = {
  productIdx:number
}

const ImgMenu = ({productIdx}:ImgMenuProps) => {
  return (
    <Section>
      {products[productIdx].menus.map((menus : subMenuType) => {
        const title = menus.title;
        const menu = menus as subMenuImageType;
        return <ImgMenuDiv>
        <Title>{title}</Title> 
        <ImgDiv>
          <a href={menu.menu[0].link}><Img src = {require(`../img/${menu.menu[0].imgSrc}`)} /></a>
        </ImgDiv> 
      </ImgMenuDiv>
      }
      )}
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

const ImgMenuDiv = styled.div`
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