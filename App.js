import React from 'react'
import SwitchNavigator from './navigation/SwitchNavigator'
import Login from './screens/Login'
import Signup from './screens/Signup'

export default class App extends React.Component {
    render() {
        return <SwitchNavigator />
    }
}