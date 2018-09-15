import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'
import SweetAlert from 'sweetalert-react'
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
                </Card.Content>
                <Card.Content>
                    <Card.Description>{this.props.logs} </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className="ui two buttons">
                        <Button color='teal' primary><Link style={{ color:'white' }}to='/detail:id'>Detail </Link></Button>
                        <Button color='red' onClick={() => this.setState({ show: true })}>
                         Delete
                        </Button>
                        <SweetAlert
                            show={this.state.show}
                            title="Are You Sure?"
                            text="Delete your ticket?"
                            showCancelButton
                            onConfirm={() => {
                                console.log('confirm')
                                this.setState({ 
                                    show: false,
                                })
                            }}
                            onCancel={() => {
                                console.log('cancel')
                                this.setState({ show: false })
                            }}
                            onEscapeKey={() => this.setState({ show: false })}
                            onOutsideClick={() => this.setState({ show: false })}
                        />
                    </div>
                </Card.Content>
            </Card>
        )
    }
}

export default Cards