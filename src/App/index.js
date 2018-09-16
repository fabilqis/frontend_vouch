import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { reduxStore } from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CardNavbar from '../Components/CardNavbar'
import Home from '../Home'
import CardAddTicket from '../Components/CardAddTicket'
import CardEditLog from '../Components/CardEditLog'
import CardDelete from '../Components/CardDelete'

const styles = {
    navbar : {
        width : '600px'
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={reduxStore}>
                <Router>
                    <div className="App">
                        <Container style={styles.navbar}>
                            <div><CardNavbar/></div>
                            <div>
                                <Switch>
                                    <Route exact path="/" component={Home}/>
                                    <Route path="/create" component={CardAddTicket}/>
                                    <Route path="/edit" component={CardEditLog}/>
                                    <Route path="/delete" component={CardDelete}/>
                                </Switch>
                            </div>
                        </Container>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App
