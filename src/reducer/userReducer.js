
import * as actionType from '../action/type';


const INITIAL_STATE = {
    listUser: [],
    // countUser: 0,
    isLoading: false,
    isError: false,
    isCreating: false,
};

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case actionType.FETCH_USER_REQUEST:
            console.log("FETCH_USER_REQUEST", action);
            // merge state
            return {
                ...state,
                isLoading: true,
                isError: false
            };

        case actionType.FETCH_USER_SUCCESS:
            console.log("FETCH_USER_SUCCESS", action);
            return {
                ...state,
                listUser: action.dataUser,
                // countUser: action.dataUser.length,
                isLoading: false,
                isError: false
            };

        case actionType.FETCH_USER_FAIL:
            console.log("FETCH_USER_FAIL");
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        case actionType.CREATE_USER_REQUEST:
            console.log("CREATE_USER_REQUEST", action);
            // merge state
            return {
                ...state,
                isCreating: true,
            };

        case actionType.CREATE_USER_SUCCESS:
            console.log("CREATE_USER_SUCCESS", action);
            return {
                ...state,
                isCreating: false,
            };

        case actionType.CREATE_USER_FAIL:
            console.log("CREATE_USER_FAIL");
            return {
                ...state,
                isCreating: false,
            };

        default: return state;

    }

};

export default userReducer;