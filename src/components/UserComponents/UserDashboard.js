import React, {Component} from 'react'
import {
  Container,
} from 'semantic-ui-react'
import {conect} from 'react-redux'
import UserNav from './UserNav';
import UserFooter from './UserFooter';


class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSignOut = () => {
    this.props.signOut()
  }

  render() {
    return (
      <div>
        <UserNav userDetails={this.props.user} />
        <Container text style={{ marginTop: '7em' }}>

        </Container>
        <UserFooter />
      </div>
    );
  }
}





export default UserDashboard;