import React from 'react'
import { Card } from "react-bootstrap";
import { cardInfo } from '../Data/Cards';

export default function Cards() {

    const renderCard = (card, index) => {

      return(
      <>
      <div className='card'>
        <Card style={{ width: '10rem', height: '10rem' }} key={index} className="box">
        <Card.Img variant='top' src={card.image} />
        <Card.Body style={{ height: '1rem' }} > 
        <Card.Title>{card.title}</Card.Title>
        </Card.Body>
        <Card.Footer>
        <a>More Info</a>
        </Card.Footer>
        </Card>
      </div>
      </>
      );
    };  

    return cardInfo.map(renderCard)
};






    
