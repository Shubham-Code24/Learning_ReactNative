

import { View, Text, FlatList, StyleSheet, Image,} from 'react-native';
import React from 'react';


// const img = require('./');

// for listing the data 
// flatlist only works when your data is in array form (simple array, array of objects)



// FlatList on static data 

const data = [


    { id : 1, title : 'Item 1'},
    { id : 2, title : 'Item 2'},
    { id : 3, title : 'Item 3'},
    { id : 4, title : 'Item 4'},
    { id : 5, title : 'Item 5'},
    { id : 6, title : 'Item 6'},
    { id : 7, title : 'Item 7'},
    { id : 8, title : 'Item 8'},
    { id : 9, title : 'Item 9'},
    { id : 10, title : 'Item 10'},
    { id : 11, title : 'Item 11'},
    { id : 12, title : 'Item 12'},
    { id : 13, title : 'Item 13'},
    { id : 14, title : 'Item 14'},
    { id : 15, title : 'Item 15'},
    { id : 16, title : 'Item 16'},
    { id : 17, title : 'Item 17'},
    { id : 18, title : 'Item 18'},
    { id : 19, title : 'Item 19'},
    { id : 20, title : 'Item 20'},
    { id : 21, title : 'Item 21'},
    { id : 22, title : 'Item 22'},
    { id : 23, title : 'Item 23'},
    { id : 24, title : 'Item 24'},
    { id : 25, title : 'Item 25'},
    { id : 26, title : 'Item 26'},
    

];



const FlatListScreen = () => {

    const renderItem = ({item}) => {
        return(
            <View style = {styles.box} >

               <View style = {styles.innerBox}>

                <Text style = {styles.title}>{item.title}</Text>

                </View>

            </View>
        )
    }
  return (
    <View style = {styles.container}>
      <FlatList
        data = {data}
        renderItem = {renderItem}
        keyExtractor = {item => item.id}
      />

    </View>
  );
};



// Internal StyleSheet

const styles = StyleSheet.create({


    container : {
        backgroundColor : 'rgb(94, 37, 37)',
        paddingTop : 15,
    },

    list : {
        paddingHorizontal : 20,
    },

    item : {
        backgroundColor : 'crimson'
    },

    title : {
        color : '#000000',
        fontSize : 40,
        textAlign : 'center',

    },


    box : {
        flex : 1,
        justifyContent : 'flex-start',
    },


    innerBox : {
        flex : 1,
        height : 200,
        width : 200,
        borderWidth : 3,
        borderColor : 'black',

    },


});


export default FlatListScreen;

















