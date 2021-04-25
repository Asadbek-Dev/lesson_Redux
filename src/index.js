import { bugAdded, bugRemoved, bugResolved } from './bug'
import store from './configureStore'

// redux toolkit

const unsubscribe = store.subscribe(() => {
    console.log('store changed', store.getState())
})


console.log(store)

store.dispatch(bugAdded('bug 1'))
store.dispatch(bugAdded('bug 2'))
unsubscribe()
store.dispatch(bugRemoved(1))
store.dispatch(bugResolved(2))

console.log(store.getState())



