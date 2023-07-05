
import { INCREMENT, DECREMENT } from './type';

export const increaseCounter = () => {

    return {
        type: INCREMENT,
        payload: { like: 'Buy milk', name: 'drkhaik' }

    };

};

export const decreaseCounter = () => {

    return {
        type: DECREMENT,

    };

};