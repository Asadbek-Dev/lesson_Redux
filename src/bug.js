export const BUG__ADDED = 'bugAdded';
export const BUG__RESOLVED = 'bugResolved';
export const BUG__REMOVED = 'bugRemoved';


export const bugAdded = (description) => ({
    type: BUG__ADDED,
    payload: {
        description,
    }
})

export const bugResolved = (id) => ({
    type: BUG__RESOLVED,
    payload: {
        id
    }
})

export const bugRemoved = (id) => ({
    type: BUG__REMOVED,
    payload: {
        id
    }
});


const initialValue = []
let lastId = 0;

export default function reducer(state = initialValue, action) {
    switch (action.type) {
        case BUG__ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                },
            ];
        case BUG__REMOVED:
            return state.filter((bug) => bug.id !== action.payload.id);

        case BUG__RESOLVED:
            return state.map((bug) =>
                bug.id === action.payload.id ? { ...bug, resolved: true } : bug);

        default:
            return state;
    }
}


