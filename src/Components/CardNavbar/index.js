import React from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

const options = [
    { key: 'Open', text: 'Open', value: 'Open' },
    { key: 'Active', text: 'Active', value: 'Active' },
    { key: 'Failed', text: 'Failed', value: 'Failed' },
    { key: 'Closed', text: 'Closed', value: 'Closed' },
]

class CardNavbar extends React.Component{
    render(){
        return(
            <Menu borderless>
                <Menu.Item header>
                    Ticket App
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Dropdown placeholder='Status' search selection options={options}/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default CardNavbar