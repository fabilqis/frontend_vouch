import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'
import '../../../node_modules/sweetalert/dist/sweetalert.css'

class Cards extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }

    render(){
        return (
            <Card centered>
                <Card.Content textAlign='center'>
                    <Card.Header> {this.props.name} </Card.Header>
                    <Card.Meta> {this.props.status} </Card.Meta>
                    <Card.Meta> {this.props.id} </Card.Meta>
                </Card.Content>
                <Card.Content>
                    <Card.Description>{this.props.logs} </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className="ui two buttons">
                        <Button color='teal' primary><Link style={{ color:'white' }}to='/detail:id'>Detail </Link></Button>
                        <Link to='/delete'><Button color='red'>
                         Delete
                        </Button></Link>
                    </div>
                </Card.Content>
            </Card>
        )
    }
}

export default Cards