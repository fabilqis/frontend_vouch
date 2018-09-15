import React from 'react'
import axios from 'axios'
import propTypes from 'prop-types'
import { BrowserRouter as Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card, Button, Form, TextArea, Input, Select} from 'semantic-ui-react'

const mapStateToProps = state => {
    return {
        addCard : state.ticket.addCard
    }
}

const request = axios.create({
    baseURL: 'http://backendvouch.herokuapp.com/' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

const options = [
    { key: 'Open', text: 'Open', value: 'Open' },
]

class CardAddTicket extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            success : false,
            id : 0,
            name : '',
            status : '',
            logs : '',
            redirectToReferrer : false
        }
    }

    static get propTypes(){
        return{
            children : propTypes.any,
            dispatch : propTypes.any,
            addCard : propTypes.object
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const payload = {
            id : this.state.id,
            name : this.state.name,
            status : this.state.status,
            logs : this.state.logs
        }
        console.log(this.state)
        

        request
        .post('/tickets/add', payload)
        .then(response => {
            window.alert('Create ticket success')
            this.setState({success:true})
            console.log("Message :", response)
        })
        .catch(error => {
            window.alert(`${error.response.data.message}`);    
            console.log(error)
        })
    }


    render(){
        if (this.state.success){
            return (
                <Redirect to={'/'}/>
            )
        } else {
            // console.log('Isi card :', this.props.addCard)
            return(
                <Card centered >
                    <Card.Content header="Add Ticket"/>
                    <Card.Content>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field control={Input} 
                            label='Id' 
                            placeholder='Ticket Id.'
                             id='id' 
                            onChange={this.handleChange}/>

                            <Form.Field control={Input} 
                            label='Name' 
                            placeholder='Ticket Name' 
                            id='name' 
                            onChange={this.handleChange}/>

                            <Form.Field control={Select} 
                            label='Status' 
                            options={options} 
                            placeholder='Status' 
                            id='status' 
                            onChange={this.handleChange} />

                            <Form.Field control={TextArea} 
                            label='Logs' 
                            placeholder='Put text here...' 
                            id='logs' 
                            onChange={this.handleChange}/>

                            <Form.Field control={Button} 
                            color='vk'
                            onClick={this.props.handleSubmit}> Save </Form.Field>
                        </Form>
                    </Card.Content>
                </Card>
            )
        }
    }
}

export default connect(mapStateToProps)(CardAddTicket)