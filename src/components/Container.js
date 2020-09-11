import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Heading from '../components/Heading'
import Card from '../components/Card'


const Box = styled.div`
width: 60%;
margin: auto;
`



const Container = ({ header }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItems] = useState([]);

    const url =  `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_APOD_API_KEY}`;
   



    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },

          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
        }, [])

        const renderImg = (img) => {
        return  <img src={img} alt='APOD'/>
        }

        

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (

          <div>
{console.log(item)}


  <Heading header={header}/>
  {renderImg(item.url)}
  <Box><Card title={item.title} date={item.date} descrip={item.explanation}/></Box>

   
   
        </div>
      );
    }
  }


Container.propTypes = {
  header: PropTypes.string
};
 


export default Container;
