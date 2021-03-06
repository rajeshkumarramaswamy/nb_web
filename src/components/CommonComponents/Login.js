import React, {Component} from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {userLogin} from '../redux/actions/AuthActions'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', isLoading: false }
  }

  componentDidMount() {
    this.setState({ isLoading : false });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.setState({ isLoading: true });
    this.props.userLogin(this.state);
  } 

  render() { 
    console.log('this.props.authError', this.props)
    return ( 
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        {this.props.userType}
      </Header>
      <Form size='large'>
        <Segment stacked loading={!this.props.auth.isLoaded}>
          <Form.Input 
            fluid
            id='email'
            onChange={this.handleChange} 
            icon='user' 
            iconPosition='left' 
            placeholder='E-mail address'
          />
          <Form.Input
            fluid
            icon='lock'
            id='password'
            onChange={this.handleChange}
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          <Button color='teal' fluid size='large' onClick={this.handleSubmit} loading={this.state.isLoading}>
            Login
          </Button>
        </Segment>
        <Message hidden={!this.props.authError}>
          {this.props.authError}
        </Message>
      </Form>
    </Grid.Column>
  </Grid>
     );
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (creds) => dispatch(userLogin(creds))
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.firebase.auth.authError
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
