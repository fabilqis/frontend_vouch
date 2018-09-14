import React from 'react'
import { Card, Button, Form, TextArea, Input, Select} from 'semantic-ui-react'

const options = [
    { key: 'Open', text: 'Open', value: 'Open' },
]

const CardAddTicket = () => (
    <Card centered>
        <Card.Content header="Add Ticket"/>
        <Card.Content>
            <Form>
                <Form.Field control={Input} label='Name' placeholder='Ticket Name' />
                <Form.Field control={Select} label='Status' options={options} placeholder='Status' />
                <Form.Field control={TextArea} label='Log' placeholder='Put text here...' />
                <Form.Field control={Button} color='vk'> Save </Form.Field>
            </Form>
        </Card.Content>
    </Card>
)

export default CardAddTicket