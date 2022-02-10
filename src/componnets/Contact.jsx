
import React from 'react'
import {Button,Card} from 'react-bootstrap'




const Contact = ({contact}) => {
  return (
   <>
   <Card className='my-3 p-3 rounded h-90'>
     <Card.Img style= {{objectFit:'contain'}} variant='top' src={contact.picture.large}/>
      <Card.Body>
        <Card.Title>
          {`${contact.name.first +''+contact.name.last}`}
        </Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          Adrees
        </Card.Subtitle>
        <Card.Text>
          <div>
            <stong>Number:</stong>v{contact.location.street.number}
          </div>
          <div>
            <stong>Street:</stong>v{contact.location.street.name}
          </div>
        </Card.Text>
        <Card.Subtitle className='mb-2 text-muted'> Email</Card.Subtitle>
        <Card.Text>
          <div>{contact.email}</div>
        </Card.Text>
        <a href={`mailto:${contact.email}`}>
        <Button 
        style={{ borderRadius:'20px'}}
        className='w-100'
        variant='primary'
        >Contact</Button></a>
      </Card.Body>
   
   </Card>
   
   </>
)
}


export default Contact;