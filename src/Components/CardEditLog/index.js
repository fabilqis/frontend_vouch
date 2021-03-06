import React from 'react'
import axios from 'axios'
import propTypes from 'prop-types'
import { BrowserRouter as Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { Card, Button, Form, TextArea, Input} from 'semantic-ui-react'

const request = axios.create({
    baseURL : 'https://backendvouch.herokuapp.com/' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: ''}
})

const mapStateToProps = state => {
    return {
        editCard : state.details.editCard
    }
}

const styles = {
    margins : {
        marginTop : '2rem'
    }
}

class CardEditLog extends React.Component{
    static get propTypes(){
        return{
            children : propTypes.any,
            dispatch : propTypes.any,
            editCard : propTypes.object
        }
    }

    state = {
        success : false,
        name: '',
        status : '',
        logs : '',
        redirectToReferrer : false
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()

        const payload = {
            name : this.state.name,
            status : this.state.status,
            logs : this.state.logs
        }
    
        this.props.dispatch({
            type: 'EDIT_CARD',
            payload : {
                name : this.state.name,
                status : this.state.status,
                logs : this.state.logs
            }
        })

        request
        .put('/tickets/update', payload)
        .then(response => {
            window.alert('Edit success')
            this.setState({success : true})
            console.log("Message :", response)
        })
        .catch(error => {
            window.alert("Error")
            console.log(error)
        })
    }

    render(){
        if (this.state.success){
            return (
                <Redirect to={'/ '}/>
            )
        } else {
            console.log('Isi card :', this.props.editCard)
        return(
            <Card centered style={styles.margins}>
                <Card.Content header="Edit Log"/>
                <Card.Content>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Field control={Input} 
                            label='Type Again Ticket Name'
                            name= 'name' 
                            placeholder='Type Again Ticket Name' 
                            id='name' 
                            onChange={this.handleChange.bind(this)}/>

                        <Form.Field control={TextArea} 
                            label='Logs' 
                            placeholder='Put text here...'
                            name = 'logs'
                            id= 'logs'
                            onChange={this.handleChange.bind(this)}/>

                        <Form.Field control={Input} 
                            label='Open / Active / Failed / Closed ? '
                            name= 'status' 
                            placeholder='Type Ticket Status...' 
                            id='status' 
                            onChange={this.handleChange.bind(this)}/>

                        <Form.Field control={Button} color='vk'
                        onSubmit={this.props.handleSubmit}> Save </Form.Field>
                    </Form>
                </Card.Content>
            </Card>
        )
    }
}
}

export default connect(mapStateToProps)(CardEditLog)