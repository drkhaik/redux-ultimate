
import * as action from './type';
import axios from 'axios';

export const increaseCounter = () => {

    return {
        type: action.INCREMENT,
        payload: { like: 'Buy milk', name: 'drkhaik' }
    };
};

export const decreaseCounter = () => {

    return {
        type: action.DECREMENT,
    };
};

export const fetchAllUser = () => {

    return async (dispatch, getState) => {
        dispatch(fetchAllUserRequest());
        try {
            const res = await axios.get("http://localhost:8081/users/all");
            // console.log(">>> check data axios", res);
            let data = res && res.data ? res.data : []
            dispatch(fetchAllUserSuccess(data))
        } catch (err) {
            console.log(err)
            dispatch(fetchAllUserFail())
        }
    }
}

export const fetchAllUserRequest = () => {
    return {
        type: action.FETCH_USER_REQUEST
    }
}

export const fetchAllUserSuccess = (data) => {
    return {
        type: action.FETCH_USER_SUCCESS,
        dataUser: data
    }
}


export const fetchAllUserFail = () => {
    return {
        type: action.FETCH_USER_FAIL
    }
}


export const createUser = (email, password, username) => {
    return async (dispatch, getState) => {
        dispatch(createUserRequest());
        try {
            const res = await axios.post("http://localhost:8081/users/create", { email, password, username });
            console.log(">>> check data axios", res);
            if (res && res.data.errCode === 0) {
                dispatch(createUserSuccess())
                dispatch(fetchAllUser());
            }
        } catch (err) {
            console.log(err)
            dispatch(createUserFail())
        }
    }
}

export const createUserRequest = () => {
    return {
        type: action.CREATE_USER_REQUEST
    }
}

export const createUserSuccess = () => {
    return {
        type: action.CREATE_USER_SUCCESS,
    }
}


export const createUserFail = () => {
    return {
        type: action.CREATE_USER_FAIL
    }
}

export const deleteUser = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await axios.post(`http://localhost:8081/users/delete/${id}`);
            if (res && res.data.errCode === 0) {
                dispatch(deleteUserSuccess())
                dispatch(fetchAllUser());
            }
        } catch (err) {
            console.log(err);

        }
    }
}

export const deleteUserSuccess = () => {
    return {
        type: action.DELETE_USER_SUCCESS,
    }
}