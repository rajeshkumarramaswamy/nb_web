import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import UserDashboard from '../UserComponents/UserDashboard';
import AdminDashboard from '../AdminComponents/AdminDashboard'
import LoginForm from './Login';
import {connect} from 'react-redux'
import { compose } from 'redux'
import Delayed from './Delayed'
import { firestoreConnect} from 'react-redux-firebase'
import { Loader, Segment } from 'semantic-ui-react';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: false }
    }
    render() { 
        const {auth, users} = this.props;
        console.log('this.props.location', this.props.auth, window.location.pathname !== '/admin')
        const userType = window.location.pathname === '/admin' ? 'Admin login' : 'Login to your account'
        return ( 
                <>
                {
                    auth.isEmpty && window.location.pathname === '/admin' ? 
                    // <Delayed waitBeforeShow={2000}>                       
                        <LoginForm userType={userType} /> 
                    // </Delayed>
                    : window.location.pathname === '/admin' && users && users[auth.uid].isAdmin ? 
                        <AdminDashboard /> 
                    :
                    auth.isEmpty && window.location.pathname === '/' ?
                    // <Delayed waitBeforeShow={2000}> 
                    <LoginForm userType={userType} />
                    // </Delayed> 
                    : 
                    window.location.pathname !== '/admin' ?
                    <UserDashboard user={auth} /> : <></>
                }
                </> 
         );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        users: state.firestore.data.users
    }
}
 
export default withRouter(compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'users'
        }
    ])
)(Navigation));