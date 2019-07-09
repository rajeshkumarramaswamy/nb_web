import React, { Component } from 'react'
import AdminNavbar from './AdminNavbar';
import { Menu, Dropdown } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {signOut} from '../redux/actions/AuthActions'

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
    const {activeItem } = this.state
    console.log(activeItem);
    return ( 
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
        <Dropdown item simple text='Admin'>
                <Dropdown.Menu>
                  <Dropdown.Item>Edit Profile</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={this.handleSignOut}>Signout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
        </Menu.Menu>
      </Menu>
     );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
}
 
export default connect(null, mapDispatchToProps)(AdminDashboard);