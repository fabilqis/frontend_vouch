import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import CardNavbar from '../Components/CardNavbar'
import CardButton from '../Components/CardAddTicketButton'
import Cards from '../Components/Cards'
import CardDetail from '../Components/CardDetail'
import CardEditLog from '../Components/CardEditLog'
import CardAddTicket from '../Components/CardAddTicket'
import DeleteConfirm from '../Components/DeleteConfirm'

const styles = {
    navbar : {
        width : '600px'
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container style={styles.navbar}>
                    <div><CardNavbar/></div>
                    <br/>
                    <div><CardButton/></div>
                    <br/>
                    <div><Cards/></div>
                    <br/>
                    <div><CardDetail/></div>
                    <br/>
                    <div><CardEditLog/></div>
                    <br/>
                    <div><CardAddTicket/></div>
                    <br/>
                    <div><DeleteConfirm/></div>
                </Container>
            </div>
        )
    }
}

export default App
