import styled from "styled-components"
import { products } from "../dummyData/data"
import { textLink } from "../dummyData/dataType"

type TextMenuProps = {
  productIdx:number
}

const TextMenu = ({productIdx}:TextMenuProps) => {

  return (
    <Section>
      {products[productIdx].menus.map(menus => (<MenuUl>
        <Title>{menus.title}</Title>
        {(menus.menu as textLink[]).map(menu => (<MenuItem>
          <MenuLi><a href={menu.link}>{menu.text}</a></MenuLi>
          <MenuSpan menuType="">
            {(() => {
              switch (menu.type) {
                case "Update":
                  return "update";
                case "New":
                  return "new";
                case "Event":
                  return "event";
                default:
                  return null;
              }
            })()}
          </MenuSpan>
        </MenuItem>
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

const Title = styled.p`
  font-size: 20px;
  color:grey;
`

const MenuItem = styled.div`
  display: flex;
`

const MenuLi = styled.li`
  margin: 0 5px 15px 0;
`

type MenuSpanProps = {
  menuType:string
}
const MenuSpan = styled.span<MenuSpanProps>`
  
`