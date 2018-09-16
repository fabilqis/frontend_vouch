import React from 'react'
import axios from "axios";
import { Card, Form, Button, Modal, Input} from 'semantic-ui-react'

class CardDelete extends React.Component{
    constructor(props) {
        super(props);
        this.state = { modal: false };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    
      handleClick = () => {
        this.setState({ active: !this.state.active });
      };
    
      handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
      handleSubmit = async event => {
        event.preventDefault();
    
        const URL = "http://backendvouch.herokuapp.com/tickets/delete";
        const data = {
          _id: this.state._id
        };
    
        await axios
          .post(URL, data)
          .then(response => {
            this.setState({
              title: "Ticket delete success",
              message: response.data.status,
              modal: true
            });
          })
          .catch(error => {
            this.setState({
              title: "Failed",
              message: error.response.data,
              modal: true
            });
          });
      };
    
    render(){
        return(
            <Card centered >
                    <Card.Content header="Delete Ticket"/>
                    <Card.Content>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field control={Input} 
                            label='Id' 
                            placeholder='Ticket Id.'
                            onChange={this.handleChange}/>

                            <Form.Field control={Button} 
                            color='vk'
                            onClick={this.handleClick}> Save </Form.Field>
                        </Form>
                            <Modal
                            isOpen={this.state.modal}
                            toggle={this.toggle}
                            className={this.props.className}
                            >
                            <Modal.Header toggle={this.toggle}>{this.state.title}</Modal.Header>
                            <Modal.Content>{this.state.message}</Modal.Content>
                            <Modal.Actions>
                                <Button primary onClick={this.toggle}>
                                Close
                                </Button>
                            </Modal.Actions>
                            </Modal>
                    </Card.Content>
                </Card>
        )
    }
}

export default CardDelete