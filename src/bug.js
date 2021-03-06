import { createAction, createReducer, createSlice } from '@reduxjs/toolkit'

let lastId = 0;
const slice = createSlice({
    name: 'bug',
    initialState: [],
    reducers: {
        bugAdded: (state, action) => [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            },
        ],
        bugRemoved: (state, action) => state.filter((bug) => bug.id !== action.payload.id),
        bugResolved: (state, action) => state.map((bug) =>
            bug.id === action.payload.id ? { ...bug, resolved: true } : bug)
    }
});
export const { bugAdded, bugRemoved, bugResolved } = slice.actions;
export default slice.reducer
// export const BUG__ADDED = 'bugAdded';
// export const BUG__RESOLVED = 'bugResolved';
// export const BUG__REMOVED = 'bugRemoved';


// export const bugAdded = createAction("bugAdded")
// export const bugResolved = createAction('bugResolved')
// export const bugRemoved = createAction('bugRemoved')
// export const bugAdded = (description) => ({
//     type: BUG__ADDED,
//     payload: {
//         description,
//     }
// })

// export const bugResolved = (id) => ({
//     type: BUG__RESOLVED,
//     payload: {
//         id
//     }
// })

// export const bugRemoved = (id) => ({
//     type: BUG__REMOVED,
//     payload: {
//         id
//     }
// });


// const initialValue = []
// let lastId = 0;

// export default createReducer(initialValue, {
//     bugAdded: (state, action) => [
//         ...state,
//         {
//             id: ++lastId,
//             description: action.payload.description,
//             resolved: false
//         },
//     ],
//     bugRemoved: (state, action) => state.filter((bug) => bug.id !== action.payload.id),
//     bugResolved: (state, action) => state.map((bug) =>
//         bug.id === action.payload.id ? { ...bug, resolved: true } : bug)
// })
// function reducer(state = initialValue, action) {
//     switch (action.type) {
//         case BUG__ADDED:
//             return [
//                 ...state,
//                 {   
//                     id: ++lastId,
//                     description: action.payload.description,
//                     resolved: false
//                 },
//             ];
//         case BUG__REMOVED:
//             return state.filter((bug) => bug.id !== action.payload.id);

//         case BUG__RESOLVED:
//             return state.map((bug) =>
//                 bug.id === action.payload.id ? { ...bug, resolved: true } : bug);

//         default:
//             return state;
//     }
// }

