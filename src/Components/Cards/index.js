import React from 'react'
import { Button, Card } from 'semantic-ui-react'

class Cards extends React.Component{
    render(){
        return (
            <Card centered>
                <Card.Content textAlign='center'>
                    <Card.Header> {this.props.name} </Card.Header>
                    <Card.Meta> {this.props.status} </Card.Meta>
                </Card.Content>
                <Card.Content>
                    <Card.Description>{this.props.logs} </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className="ui two buttons">
                        <Button color='teal'> Detail </Button>
                        <Button color='red'> Delete </Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }
}

export default Cards