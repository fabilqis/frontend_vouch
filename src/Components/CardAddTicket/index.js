import React from 'react'
import axios from 'axios'
import propTypes from 'prop-types'
import { BrowserRouter as Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card, Button, Form, TextArea, Input, Select} from 'semantic-ui-react'


const request = axios.create({
    baseURL: 'https://backendvouch.herokuapp.com/' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

const mapStateToProps = state => {
    return {
        addCard : state.details.addCard
    }
}

const options = [
    { key: 'Open', text: 'Open', value: 'Open' },
]

class CardAddTicket extends React.Component{
    static get propTypes(){
        return{
            children : propTypes.any,
            dispatch : propTypes.any,
            addCard : propTypes.object

        }
    }

    state = {
            success : false,
            name : '',
            status : '',
            logs : '',
            redirectToReferrer : false
        }
    

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()

        const payload = {
            name : this.state.name,
            status : this.state.status,
            logs : this.state.logs
        }
        this.props.dispatch({
            type: 'ADD_CARD',
            payload : {
                name : this.state.name,
                status : this.state.status,
                logs : this.state.logs
            }
        })
        

        request
        .post('/tickets/add', payload)
        .then(response => {
            window.alert('Create ticket success')
            this.setState({success:true})
            console.log("Message :", response)
        })
        .catch(error => {
            window.alert("Error");    
            console.log(error)
        }) 
    }


    render(){
        if (this.state.success){
            return (
                <Redirect to={'/ '}/>
            )
        } else {
            console.log('Isi card :', this.props.addCard)
            return(
                <Card centered >
                    <Card.Content header="Add Ticket"/>
                    <Card.Content>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <Form.Field control={Input} 
                            label='Name'
                            name= 'name' 
                            placeholder='Ticket Name' 
                            id='name' 
                            onChange={this.handleChange.bind(this)}/>

                            <Form.Field control={Select} 
                            label='Status' 
                            options = {options}
                            placeholder='Ticket Status' 
                            name = 'status'
                            id='status' 
                            onChange={this.handleChange.bind(this)}/>

                            <Form.Field control={TextArea} 
                            label='Logs' 
                            placeholder='Put text here...' 
                            id='logs'
                            name ='logs' 
                            onChange={this.handleChange.bind(this)}/>

                            <Form.Field control={Button} 
                            color='vk'
                            onSubmit={this.props.handleSubmit}> Save </Form.Field>
                        </Form>
                    </Card.Content>
                </Card>
            )
        }
    }
}


export default connect(mapStateToProps)(CardAddTicket)