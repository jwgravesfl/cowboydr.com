import { createStore } from 'redux'
import rootReducer from '../reducers'

const store = createStore(
    rootReducer,
    {
        contact: [{ 
            name: 'Enter Full Name',
            phone: 'Enter Phone Number with Area Code',
            email: 'Email@address.com',
            cityst: 'City and State',
            contactTime: 'Best Time to Contact'
        }]
    },
    window.devToolsExtension && window.devToolsExtension()
    )

export default store