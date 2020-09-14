import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Title = styled.header`
@media screen and (max-width: 820px) {
   font-size: 24px
}
margin: 20px auto;
font-size: 36px;
font-weight: bold;
text-align: center;
font-family: 'Grandstander', cursive;
`
    
const Heading = ({header}) =>  {
    return (
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