import * as action from './actionTypes'

export const bugAdded = (description) => ({
    type: action.bugAdded,
    payload: {
        description,
    }
})

export const bugResolved = (id) => ({
    type: action.bugResolved,
    payload: {
        id
    }
})

export const bugRemoved = (id) => ({
    type: action.bugRemoved,
    payload: {
        id
    }
})

