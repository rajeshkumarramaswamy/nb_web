import React from 'react'
import {
    Container,
    Dropdown,
    Image,
    Menu,
  } from 'semantic-ui-react'
  import {connect} from 'react-redux'
import {signOut} from '../redux/actions/AuthActions'

const UserNav = (props) => {
    function handleSignOut() {
      props.signOut()
    }
    return ( 
        <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
              Project Name
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item as='a'>Home</Menu.Item>
              <Menu.Item as='a'>Orders</Menu.Item>
              <Dropdown item simple text={props.userDetails.email}>
                <Dropdown.Menu>
                  <Dropdown.Item>Edit Profile</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleSignOut}>Signout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Container>
        </Menu>
        </div> 
    );
}


const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
 
export default connect(null, mapDispatchToProps)(UserNav);