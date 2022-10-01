import {createStore} from 'redux'
import rootReducers from './reducer/Reduce'

const store = createStore(rootReducers)

export default store