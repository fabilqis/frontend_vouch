import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import axios from 'axios'

import { Link } from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react'

const mapStateToProps = state => {
    return {
        _id: state.details._id,
        name: state.details.name,
        status: state.details.status,
        logs:state.details.logs
        
    }
}


class CardDetail extends React.Component{    
    render(){
        return(
            <Card centered>
                <Card.Content textAlign='center'>
                    <Card.Header> {this.props.name} </Card.Header>
                </Card.Content> 
                <Card.Content>
                    <Card.Description>
                        {this.props.logs} </Card.Description>
                </Card.Content> 
                <Card.Content extra>
                    <Link to="/editlogs"><Button fluid color='blue'> Edit Log </Button></Link> 
                    <Link to="/"><Button fluid color='vk'> Close </Button></Link>
                </Card.Content>
            </Card>
        )
    }
}

export default connect(mapStateToProps)(CardDetail)