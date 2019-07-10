import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

const ItemCard = (props) => {
    return ( 
        <Card>
        <Card.Content>
          <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
          <Card.Header>{props.details.header}</Card.Header>
          <Card.Meta>{props.details.meta}</Card.Meta>
          <Card.Description>
            {props.details.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui one buttons'>
            <Button basic color='red'>
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
);
}
 
export default ItemCard;