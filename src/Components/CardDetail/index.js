import React from 'react'
import { Card, Button, CardContent, Dropdown } from 'semantic-ui-react'

const options = [
    { key: 'Open', text: 'Open', value: 'Open' },
    { key: 'Active', text: 'Active', value: 'Active' },
    { key: 'Failed', text: 'Failed', value: 'Failed' },
    { key: 'Closed', text: 'Closed', value: 'Closed' },
]

const description = [
    'Lorem ipsum dolor sit amet,',
    'consectetur adipiscing elit. Morbi tempor tempor fermentum.',
    'Nulla facilisi. Morbi consectetur, augue non hendrerit euismod,',
    'justo sem feugiat sem, nec commodo libero augue at metus.'
].join(' ')

const CardDetail = () => (
    <Card centered>
        <Card.Content textAlign='center' header="Ticket 1"/>
        <Card.Content description={description}/>
        <Card.Content extra>
            <Button fluid color='blue'> Edit Log </Button>
            <Dropdown fluid placeholder='Status' search selection options={options}/>
            <Button fluid color='vk'> Save </Button>
        </Card.Content>
    </Card>
)

export default CardDetail