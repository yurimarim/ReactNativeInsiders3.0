// Primeiro arquivo a ser RENDERIZADO pelo APP.
// JSX = xml + html
// App.js configuração de navegação / da página etc.
import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}