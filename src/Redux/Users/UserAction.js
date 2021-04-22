import { GET_USER,FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_ERROR} from './userConstant';
import axios from 'axios';
export const getUser = () => {
    
 return {
     type:GET_USER
 }
}
export const fetchUserRequest = () => {
    return {
        type:FETCH_USER_REQUEST
    }
}
export const fetchUserSuccess = users =>{
    return {
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}
export const fetchUserError = error => {
    return {
        type:FETCH_USER_ERROR,
        payload:error
    }
}
export const fetchUsers = () =>{
    return (dispatch) => {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log("res", res)
            const users = res.data
            dispatch(fetchUserSuccess(users))
        })
        .catch(err =>{
            const error =err.message
            dispatch(fetchUserError(err))
        })
    }
}
