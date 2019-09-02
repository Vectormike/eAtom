import { SET_CURRENT_USER } from '../constant';

export const setCurrentUser = user  => ({
    type: SET_CURRENT_USER,
    payload: user,
});

