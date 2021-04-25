import { bugAdded, bugRemoved, bugResolved } from './bug'
import store from './configureStore'

// redux toolkit

const unsubscribe = store.subscribe(() => {
    console.log('store changed', store.getState())
})


console.log(store)

store.dispatch(bugAdded({ description: 'bug 1 wsgakjgcsagjsdxs' }))
store.dispatch(bugAdded({ description: 'bug 2' }))
store.dispatch(bugAdded({ description: 'bug 3' }))
store.dispatch(bugAdded({ description: 'bug 4' }))
unsubscribe()
store.dispatch(bugRemoved({ id: 2 }))
store.dispatch(bugResolved({ id: 3 }))
store.dispatch(bugResolved({ id: 4 }))

console.log(store.getState())



