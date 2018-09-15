import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CardNavbar from '../Components/CardNavbar'
import Home from '../Home'
import CardAddTicket from '../Components/CardAddTicket'
import CardDetail from '../Components/CardDetail'
import CardEditLog from '../Components/CardEditLog'

const initialState = {
    ticket : {
        id : 0,
        name : '',
        status : '',
        logs : '',
        addCard : {}
    },
    message : ''
}

const reducer = (state = initialState, action) => {
    switch (action.type){
    case 'EDIT_STATUS' : {
        return {
            ticket: {
                ...state.ticket,
                status: action.payload.status 
            }
        }
    }

    case 'EDIT_LOG' : {
        return {
            ticket: {
                ...state.ticket,
                logs : action.payload.logs
            }
        }
    }

    case 'ADD_CARD' : {
        return {
            ...state, 
            ticket:{
                ...state.ticket,
                addCard: action.payload
            }
        }
    }

    case 'FILTERED_CARD' : {
        return {
            ticket: {
                ...state.ticket,
                status: action.payload.status
            }
        }
    }

    case 'SHOW_CARD' : {
        return {
            ticket: {
                ...state.ticket,
                name : action.payload.name,
                status : action.payload.status,
                logs : action.payload.logs
            }
        }
    }
    default :
        return state
    }
}

const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const styles = {
    navbar : {
        width : '600px'
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Container style={styles.navbar}>
                            <div><CardNavbar/></div>
                            <div>
                                <Switch>
                                    <Route exact path="/" component={Home}/>
                                    <Route path="/create" component={CardAddTicket}/>
                                    <Route path="/detail:id" component={CardDetail}/>
                                    <Route path="/editlogs" component={CardEditLog}/>
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
