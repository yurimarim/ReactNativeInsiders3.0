import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from './pages/Home';
import MyLinks from './pages/MyLinks';

import { Ionicons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

function Routes() {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeBackgroundColor: '#2CCBB9',
                activeTintColor: '#FFF',
                marginTop: 15,
                labelStyle: {
                    fontSize: 19,

                }
            }}
        >

            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Encurtar Link',
                    drawerIcon: ({ focused, size, color }) => (
                        <Ionicons
                            // Renderização Condicional - se o focused for true (?) vai renderizar o cube
                            // se não (:) vai renderizar o cube-outline
                            name={focused ? 'cube' : 'cube-outline'}
                            color={color}
                            size={size}
                        />
                    )

                }}
            />


            <Drawer.Screen
                name="MyLinks"
                component={MyLinks}
                options={{
                    title: 'Meus Links',
                    drawerIcon: ({ focused, size, color }) => (
                        <Ionicons
                            // Renderização Condicional - se o focused for true (?) vai renderizar o cube
                            // se não (:) vai renderizar o cube-outline
                            name={focused ? 'stats-chart' : 'stats-chart-outline'}
                            color={color}
                            size={size}
                        />
                    )

                }}
            />

        </Drawer.Navigator>
    )
}

export default Routes;