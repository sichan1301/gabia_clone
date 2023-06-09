import styled,{css} from "styled-components"
import { products } from "../dummyData/data"

type AboutPropsType = {
  productIdx:number
}
const About = ({productIdx}:AboutPropsType) => {
  return (
    <AboutArticle>
      <Title>{products[productIdx].title}</Title>
      <Explain>{products[productIdx].explain}</Explain>
      <a href={products[productIdx].serviceLink}><Service>서비스 알아보기</Service></a>
      {products[productIdx].marketPlaceLink && <a href = {products[productIdx].marketPlaceLink}><MarketService>마켓 플레이스</MarketService></a>}
    </AboutArticle>
  )
}

export default About

const AboutArticle = styled.article`
  display: flex;
  flex-direction:column;
  width:200px;
  padding: 0 50px;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin-bottom:10px;
`

const Explain = styled.p`
  font-size: 14px;
  color:Grey;
`

const Service = styled.button`
  background-color:#59a9c9; 
  color:#fff; 
  border:none; 
  border-radius: 5px;
  cursor:pointer;
  width:100%;
  height:40px;
  margin-bottom:10px;
`

const MarketService = styled(Service)`
  background-color: #fff;
  color:black;
  border:1px solid black
`