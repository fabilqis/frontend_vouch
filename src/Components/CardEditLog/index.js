import React from 'react'
import { Card, Button, Form, TextArea, Dropdown} from 'semantic-ui-react'

const options = [
    { key: 'Open', text: 'Open', value: 'Open' },
    { key: 'Active', text: 'Active', value: 'Active' },
    { key: 'Failed', text: 'Failed', value: 'Failed' },
    { key: 'Closed', text: 'Closed', value: 'Closed' },
]

class CardEditLog extends React.Component{
    render(){
        return(
            <Card centered>
                <Card.Content header="Edit Log"/>
                <Card.Content>
                    <Form>
                        <Form.Field control={TextArea} label='Log' placeholder='Put text here...' />
                        <Dropdown fluid placeholder='Status' search selection options={options}/>
                        <Form.Field control={Button} color='vk'> Save </Form.Field>
                    </Form>
                </Card.Content>
            </Card>
        )
    }
}

export default CardEditLog