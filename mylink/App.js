// Primeiro arquivo a ser RENDERIZADO pelo APP.
// O JSX significa JavaScript XML e nos permite escrever HTML no React
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
