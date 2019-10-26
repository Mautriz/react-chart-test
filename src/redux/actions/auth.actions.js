import { authTypes } from '../types/auth.types';

export const authLogin = () => ({
    type: authTypes.LOGIN
});

export const authLogout = () => ({
    type: authTypes.LOGOUT
});
