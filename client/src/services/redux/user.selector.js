import {
    createSelector
} from 'reselect'

const selectUser = state => state.user

export const selectPresentUser = createSelector(
    [selectUser],
    (user) => user.presentUser
)