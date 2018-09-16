import React from 'react'
import axios from 'axios'
import propTypes from 'prop-types'
import { BrowserRouter as Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { Card, Button, Form, Input} from 'semantic-ui-react'

const request = axios.create({
    baseURL : 'https://backendvouch.herokuapp.com/' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: ''}
})

const mapStateToProps = state => {
    return {
        deleteCard : state.details.deleteCard
    }
}

class CardDelete extends React.Component{
    static get propTypes(){
        return{
            children : propTypes.any,
            dispatch : propTypes.any,
            deleteCard : propTypes.object
        }
    }

    state = {
        success : false,
        id:'',
        redirectToReferrer : false
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()

        const payload = {
            id : this.state.id
        }
    
        this.props.dispatch({
            type: 'EDIT_CARD',
            payload : {
                id : this.state.id
            }
        })

        request
        .post('/tickets/delete', payload)
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
            console.log('Isi card :', this.props.deleteCard)
        return(
            <Card centered>
                <Card.Content header="Delete Card"/>
                <Card.Content>
                    <Form onSubmit={this.handleSubmit.bind(this)}>

                    <Form.Field control={Input} 
                            label='Type Ticket ID'
                            name= 'id' 
                            placeholder='Type Ticket ID' 
                            id='id' 
                            onChange={this.handleChange.bind(this)}/>

                        <Form.Field control={Button} color='red'
                        onSubmit={this.props.handleSubmit}> Save </Form.Field>
                    </Form>
                </Card.Content>
            </Card>
        )
    }
}
}

export default connect(mapStateToProps)(CardDelete)