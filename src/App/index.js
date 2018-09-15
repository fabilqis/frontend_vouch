import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CardNavbar from '../Components/CardNavbar'
import Home from '../Home'
import CardAddTicket from '../Components/CardAddTicket'
import CardDetail from '../Components/CardDetail'


const styles = {
    navbar : {
        width : '600px'
    }
}

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Container style={styles.navbar}>
                        <div><CardNavbar/></div>
                        <div>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/create" component={CardAddTicket}/>
                                <Route exact path="/detail:id" component={CardDetail}/>
                            </Switch>
                        </div>
                    </Container>
                </div>
            </Router>
        )
    }
}

export default App
