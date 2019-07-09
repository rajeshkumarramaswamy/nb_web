import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer'
import ItemsReducer from './ItemsReducer'
import OrdersReducer from './OrdersReducer'
import UsersReducer from './UsersReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

export const storeInitialState = {}

const RootReducer = combineReducers({
    auth: AuthReducer,
    items: ItemsReducer,
    orders: OrdersReducer,
    users: UsersReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});


export default RootReducer;