import React from 'react';
import styled from 'styled-components'

const CardWrapper = styled.div`

    padding: 1rem;
    position: relative;
    background: linear-gradient(to right, #E02770, #27A8E0);
    padding: 1px;

`


const Content = styled.div`
background: white;

    height: 150px;
    margin: 2px;
padding: 2px;
    overflow: hidden;
    &:hover {
        background: transparent;
        color: white;
      }
`

const Title = styled.p`
    font-size: 18px;
    font-weight: bold;
`

const Date = styled.p`
    font-size: 14px;
`

const Description = styled.p`
    font-size: 14px;
`



const Card = ({title, date, descrip}) =>  {
return(
    <CardWrapper><Content>
        
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Description>{descrip}</Description>

        
    </Content>
    </CardWrapper>

)
  

}

  




export default Card;
