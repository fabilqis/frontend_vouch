import React from 'react'
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class CardButton extends React.Component{
    render(){
        return(
            <Link to="/create"> <Button fluid primary> + Add Ticket </Button></Link>
        )
    }
}
export default CardButton