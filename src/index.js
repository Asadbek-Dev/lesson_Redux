import { bugAdded, bugRemoved, bugResolved } from './actions'
import store from './store'



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



