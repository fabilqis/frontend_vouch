import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class DeleteConfirm extends Component {
  state = { open: false }

  closeConfigShow = (closeOnDimmerClick) => () => {
    this.setState({ closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })

  render() {
    const { open, closeOnDimmerClick } = this.state

    return (
      <div>
        <Button onClick={this.closeConfigShow(true, false)}>No Close on Dimmer Click</Button>

        <Modal
          open={open}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Delete Ticket</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete ticket ?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              Cancel
            </Button>
            <Button
              onClick={this.close}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Yes'
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default DeleteConfirm