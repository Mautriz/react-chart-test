import { authTypes } from '../types/auth.types';

const initialState = {
    // il localstorage contiene solo stringhe, per avere un boolean devo controllare esistenza della stringa
    isAuthenticated: !!window.localStorage.getItem('isAuthenticated')
};

// semplice autenticazione, local storage è usato per la persistance
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
