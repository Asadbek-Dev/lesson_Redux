export const bugAdded = (description) => ({
    type: 'bugAdded',
    payload: {
        description,
    }
})

export const bugResolved = (id) => ({
    type: 'bugResolved',
    payload: {
        id
    }
})

export const bugRemoved = (id) => ({
    type: 'bugRemoved',
    payload: {
        id
    }
})

