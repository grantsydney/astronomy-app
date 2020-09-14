import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Heading from '../Heading'
import Card from '../Card/Card'
import ReactPlayer from "react-player"

const CardContainer = styled.div`
  width: 80%;
  margin: auto;
`

const Image = styled.img`
  max-height: 700px;
  display: block;
  margin: auto;
  margin-bottom: 20px;
`

const Video = styled.div`
  margin: auto;
  width: fit-content;

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
      return  <Image src={img} alt='APOD'/>
    }

    const renderVideo = (url) => {
      return (
        <Video>
          <ReactPlayer url={url} controls={true} width={'920px'} height={'620px'}/>
        </Video>
      )
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Heading header={header}/>
          {item.media_type === 'image' && renderImg(item.url)}
          {item.media_type === 'video' && renderVideo(item.url)}
          <CardContainer>
            <Card title={item?.title} date={item?.date} descrip={item?.explanation} copyright={item?.copyright}/>
          </CardContainer>
      </div>
      );
    }
  }


export default Container;
