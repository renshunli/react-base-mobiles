import { handleActions } from 'redux-actions'

export const commonState = handleActions(
    {
        SET_COMMON_STATE: (state, action) => ({
            ...state,
            name: action.payload
        }),
    },
    {
        name: "通用redux"
    }
)
