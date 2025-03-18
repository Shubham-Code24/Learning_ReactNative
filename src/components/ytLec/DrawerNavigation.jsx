

import 'react-native-gesture-handler';
import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();



const HomeScreen = ({navigation}) => (
    <View style = {styles.screenContainer}>
        <Text style = {styles.title}>Home Screen</Text>
        <Button title = "Open Drawer" onPress = {() => navigation.openDrawer()}/>
    </View>
);




const ProfileScreen = ({navigation}) => (
    <View style = {styles.screenContainer}>
        <Text style = {styles.title}>Profile Screen</Text>
        <Button title = "Open Drawer" onPress = {() => navigation.openDrawer()}/>
    </View>
);




const SettingScreen = ({navigation}) => (
    <View style = {styles.screenContainer}>
        <Text style = {styles.title}>Setting Screen</Text>
        <Button title = "Open Drawer" onPress = {() => navigation.openDrawer()}/>
    </View>
);





const DrawerNavigation = () => {
  return (

    <NavigationContainer>
        <Drawer.Navigator
        screenOptions = {{
            drawerStyle : {
                backgroundColor : '#e6e6e6',
                borderRadius : 70,
                borderWidth : 5,
            },

            drawerLabelStyle : {

                color : '#333',

            },

            headerStyle : {
                backgroundColor : 'lightgreen',
            },

            headerTitleAlign : 'center',

            headerTintColor : 'pink',
        }}
        >

            <Drawer.Screen name = "Home" component = {HomeScreen}/>
            <Drawer.Screen name = "Profile" component = {ProfileScreen}/>
            <Drawer.Screen name = "Setting" component = {SettingScreen}/>


        </Drawer.Navigator>


    </NavigationContainer>

  );
};


const styles = StyleSheet.create({

    screenContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#f0f0f0',
    },

    title : {
        fontSize : 22,
        fontWeight : 'bold',
        marginBottom : 20,
    },



});

















export default DrawerNavigation;



