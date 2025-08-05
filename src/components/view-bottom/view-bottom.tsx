import TopTabNavigationScreen from "@/app/(tabs)/product-tabs";
import Configuration from "@/src/screens/configuration-page/configuration";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from 'react';


export default function ViewBottom(){
    const TabNav = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <TabNav.Navigator>
                <TabNav.Screen name='Inicio' component={TopTabNavigationScreen}/>
                <TabNav.Screen name='Configuracao' component={Configuration}/>

            </TabNav.Navigator>


        </NavigationContainer>
    )
}