import { GET_USER,FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_ERROR} from './userConstant';
const initialState ={
    noOfUsers : 10,
    loading:false,
    users:[],
    error:''
}
const UserReducer =(state=initialState, action) =>{
    switch(action.type){
        case GET_USER :return{
            ...state,
            noOfUsers:state.noOfUsers -1
        }
        case FETCH_USER_REQUEST :return {
            ...state,
            loading:true
        }
        case FETCH_USER_SUCCESS :return {
            // ...state,
            loading:false,
            users:action.payload,
            error:''
        }
        case FETCH_USER_ERROR :return {
            // ...state,
            loading:false,
            users:[],
            error:action.payload
        }
        default: return state
    }
}
export default UserReducer;