import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Details, Search, Akun, Splash } from '../pages';
import BottomNavigator from 'Component/bottomNavigator';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
        <Tab.Screen name="Home" component={Akun} options={{headerShown: false}} />
        <Tab.Screen name="Pesanan" component={Home} options={{headerShown: false}} />
        <Tab.Screen name="Simpan" component={Details} options={{headerShown: false}} />
        <Tab.Screen name="Akun" component={Search} options={{headerShown: false}} />

      </Tab.Navigator>
    )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
    <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
    <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} /> 
    {/* <Stack.Screen name="ComponentSetting" component={ComponentSetting} options={{headerShown: false}} /> 
    <Stack.Screen name="ComponentNotifikasi" component={ComponentNotifikasi} options={{headerShown: false}} /> 
    <Stack.Screen name="ComponentChat" component={ComponentChat} options={{headerShown: false}} /> 
    <Stack.Screen name="LihatProfil" component={LihatProfil} options={{headerShown: false}} />  */}
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({
 
})