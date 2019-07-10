import React, { Component } from 'react'
import { Menu, Dropdown, Grid, Modal, Button, Icon, Form, Popup, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { signOut } from '../redux/actions/AuthActions'
import AdminItemsList from './AdminItemsList';

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'Dashboard' }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleSignOut = () => {
    this.props.signOut()
  }




  render() {
    const { activeItem } = this.state
    const modalHeader = activeItem === 'Users' ? 'Add Users': 'Add Items';
    const modalForm1 = activeItem === 'Users' ? 'Email' : 'Item Name';
    const modalForm2 = activeItem === 'Users' ? 'Password': 'Item Image';
    const popUpContent = activeItem === 'Users' ? 'Add Users' : 'Add Items';
    return (
      <>
        <Menu>
          <Menu.Item
            name='Dashboard'
            active
            active={activeItem === 'Dashboard'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Orders'
            active={activeItem === 'Orders'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Users'
            active={activeItem === 'Users'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>

            <Modal trigger={
                 <Menu.Item
                 name={popUpContent}
               />
            }
            >
              <Modal.Header>{modalHeader}</Modal.Header>
              <Modal.Content >
                <Form>
                  <Form.Field>
                    <label>{modalForm1}</label>
                    <input placeholder={modalForm1} />
                  </Form.Field>
                  <Form.Field>
                    <label>{modalForm2}</label>
                    <input placeholder={modalForm2} />
                  </Form.Field>
                  <Button type='submit'>Submit</Button>
                </Form>
              </Modal.Content>
            </Modal>

            <Dropdown item simple text='Admin'>
              <Dropdown.Menu>
                <Dropdown.Item>Edit Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={this.handleSignOut}>Signout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
        {
          activeItem === 'Dashboard' &&
        <Grid centered>
          <AdminItemsList />
        </Grid>
        }
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(AdminDashboard);