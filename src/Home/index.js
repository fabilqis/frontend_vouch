import React from 'react'
import axios from 'axios'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Cards from '../Components/Cards'
import CardButton from '../Components/CardAddTicketButton'

const request = axios.create({
    baseURL: 'http://backendvouch.herokuapp.com/' || 'http://localhost:3000',
    timeout: 50000,
    headers: { Authorization: '' }
})

class Home extends React.Component{
    addItem(item){
        this.setState(prevState => {
            return {
                ticket : prevState.items.concat(item)
            }
        })
    }

    UNSAFE_componentWillMount() {
        request
            .get('/tickets')
            .then(response => {
                return response.data
            })
            .then(data => {
                data.forEach(item => {
                    this.setState(prevState => {
                        return {
                            ticket : prevState.ticket.concat({
                                id: item.id,
                                name : item.name,
                                status : item.status,
                                logs : item.logs
                            })
                        }
                    })
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    constructor(props) {
        super(props)
        this.state = {
            ticket : [],
            name: this.props.name,
            status: this.props.status,
            logs : this.props.logs,
            id: this.props.id
        }
    }

    static get propTypes(){
        return {
            children: propTypes.any,
            dispatch: propTypes.any,
            key: propTypes.string,
            name: propTypes.string,
            status: propTypes.string,
            logs: propTypes.string,
        }
    }
    render(){
        const theCard = this.state.ticket.map((item) => {
            return (
                <Cards key={item.id}
                    name= {item.name} 
                    status= {item.status} 
                    logs= {item.logs} /> 
            ) 
        })
        return(
            <div>
                <CardButton/>
                {theCard}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        name : state.name,
        status : state.status,
        logs : state.logs,
        id: state.id
    }
}

export default connect(mapStateToProps)(withRouter(Home))