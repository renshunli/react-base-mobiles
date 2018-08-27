import { createAction } from 'redux-actions'
// import { getDataService } from '../../api/api.js';


export const setCommonState = createAction('SET_COMMON_STATE')

export const getCommonState = () => async dispatch => {
    // let result = await getDataService();
    dispatch(setCommonState('公共属性redux'));
};
