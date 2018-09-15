import React from 'react'
import { Card, Button, Form, TextArea} from 'semantic-ui-react'

class CardEditLog extends React.Component{
    render(){
        return(
            <Card centered>
                <Card.Content header="Edit Log"/>
                <Card.Content>
                    <Form>
                        <Form.Field control={TextArea} label='Log' placeholder='Put text here...' />
                        <Form.Field control={Button} color='vk'> Save </Form.Field>
                    </Form>
                </Card.Content>
            </Card>
        )
    }
}

export default CardEditLog