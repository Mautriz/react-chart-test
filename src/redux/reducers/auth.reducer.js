import { authTypes } from '../types/auth.types';

const initialState = {
    isAuthenticated: !!window.localStorage.getItem('isAuthenticated')
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case authTypes.LOGIN:
            window.localStorage.setItem('isAuthenticated', 'randomvalue');
            return { ...state, isAuthenticated: true };
        case authTypes.LOGOUT:
            window.localStorage.removeItem('isAuthenticated');
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
};
