import React from 'react';
import styled from 'styled-components'

const CardWrapper = styled.div`
  position: relative;
  background: linear-gradient(to right, #1778D0, #003B70);
  padding: 1px;
`


const Content = styled.div`
  background: white;
  margin: 2px;
  padding: 2px;
  overflow: hidden;
  font-family: 'Grandstander', cursive;
  &:hover {
    background: transparent;
    color: white;
  }
`

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
`

const Date = styled.p`
  font-size: 14px;
`

const Description = styled.p`
  font-size: 16px;
`



const Card = ({copyright, date, descrip, title}) =>  {
return(
    <CardWrapper>
        <Content>
            {title && <Title>{title}</Title>}
            {date && <Date>{date}</Date>}
            {copyright && <Date>{copyright}</Date>}
            {descrip && <Description>{descrip}</Description>} 
        </Content>
    </CardWrapper>

)
  

}

  




export default Card;
