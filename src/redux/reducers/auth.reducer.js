import { authTypes } from '../types/auth.types';

const initialState = {
    isAuthenticated: false
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case authTypes.LOGIN:
            return { ...state, isAuthenticated: true };
        case authTypes.LOGOUT:
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
};
