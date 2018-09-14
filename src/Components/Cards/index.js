import React from 'react'
import { Button, Card } from 'semantic-ui-react'

const Cards = () => (
    <Card centered>
        <Card.Content textAlign='center'>
            <Card.Header> Ticket 1 </Card.Header>
            <Card.Meta> Open </Card.Meta>
        </Card.Content>
        <Card.Content>
            <Card.Description> Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Morbi tempor tempor fermentum.
            Nulla facilisi. Morbi consectetur, augue non hendrerit euismod,
            justo sem feugiat sem, nec commodo libero augue at metus. 
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div className="ui two buttons">
                <Button color='teal'> Detail </Button>
                <Button color='red'> Delete </Button>
            </div>
        </Card.Content>
    </Card>
)

export default Cards