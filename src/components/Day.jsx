


import { View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Day = (props) => {
  return (
    <View  style = {style.container}>

        <View>
            <Text >{props.day}</Text>
        </View>
        <View>
            <Text >{props.weather}</Text>
        </View>
        <View>
            <Text>{props.temp}</Text>
        </View>
        
    </View>
  )
}



// style = {style.textStyle}
 




const style = StyleSheet.create({
    container : {

        flex : 1,
        flexDirection : 'row',
        justifyContent: 'space-around',

        alignItems : 'center',

        backgroundColor : 'rgb(97, 56, 97)',
        borderWidth : 4,
        borderColor : 'grey',

      
    },


    textStyle : {
        color : 'rgb(202, 197, 197)',
       
        // fontSize : 15,

    },


    // box : {

    //     height : 100,
    //     width : 100,

    // }




});




export default Day;
















