import { handleActions } from 'redux-actions'

export const homePage = handleActions(
    {
        SET_LIST: (state, action) => ({
            ...state,
            list: action.payload
        }),
    },
    {
        list: [{ text: '默认的redux值' }]
    }
)

/* default
const homePage = (state, action) => {
    switch (action.type) {
        case 'GET_LIST':
            return {
                ...state,
                data: action.payload
            }
    }
}
*/
