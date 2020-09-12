import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';


const Box = styled.div`
background: #27A8E0;
height: 50px;

`

const Title = styled.p`
padding-top: 10px;
padding-left: 5px;
font-size: 36px;
font-weight: bold;
text-align: center;
font-family: 'Grandstander', cursive;
`



const Heading = ({header}) =>  {
return(

<Title>{header}</Title>



)
  

}

  
Heading.defaultProps = {
    header: "Astronomy Picture of the Day"
}

Heading.propTypes = {
  header: PropTypes.string
};




export default Heading;
