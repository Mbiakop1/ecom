import { createSelector} from 'reselect';

const selectUser = state =>  state.user;

export  const  selectCurrrentUser = createSelector( 
    [selectUser],
    user => user.currenyUser
);
