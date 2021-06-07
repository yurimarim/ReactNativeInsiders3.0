import React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

function StatusBarPage(props) {
    const isFocused = useIsFocused();

    // Renderização Condicional - se o focused for true (?) vai renderizar o cube
    // se não (:) vai renderizar o cube-outline
    return isFocused ? <StatusBar {...props} /> : null
}

export default StatusBarPage;