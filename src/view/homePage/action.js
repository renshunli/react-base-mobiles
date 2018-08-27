import { createAction } from 'redux-actions'
import { getDataService } from '../../api/api.js';


export const setList = createAction('SET_LIST')

export const getList = () => async dispatch => {
    let result = await getDataService();
    dispatch(setList(result.data.list));
};

/* default
const getList = list => {
    return {
        type: "GET_LIST",
        payload:list
    }
}
*/
