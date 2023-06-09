import styled from "styled-components"
import { products } from "../dummyData/data"
import { textLink, textType } from "../dummyData/dataType"

type TextMenuProps = {
  productIdx:number
}

const TextMenu = ({productIdx}:TextMenuProps) => {

  return (
    <Section>
      {products[productIdx].menus.map(menus => (
      <MenuUl>
        <Title>{menus.title}</Title>
        {(menus.menu as textLink[]).map(menu => (
          <MenuDiv>
            <MenuLi><a href={menu.link}>{menu.text}</a></MenuLi>
            <TextType textType={menu.type}>{menu.type && menu.type}</TextType>
          </MenuDiv>
          )
        )}
      </MenuUl>
      ))}

    </Section>
  )
}

export default TextMenu


const Section = styled.section`
  width:100%;
  display: flex;
  justify-content: space-around;
`

const MenuUl = styled.ul`
  display: flex;
  flex-direction: column;
`

const MenuLi = styled.li`
  margin-right:15px;  
`

const Title = styled.p`
  font-size: 20px;
  color:grey;
`

const MenuDiv = styled.div`
  display: flex;
  align-items:center;
  margin-bottom:20px;
`

type TextTypeProps = {
  textType:textType | undefined
}

const TextType = styled.span<TextTypeProps>`
  color:#fff;
  border-radius:20px;
  padding:1px 5px;
  background-color:${props => {
    switch(props.textType) {
      case "Update":
        return `rgb(46, 52, 132)`;
      case "Event":
        return `rgb(121, 190, 243)`;
      case "New":
        return `orange`;
    }
  }}
`