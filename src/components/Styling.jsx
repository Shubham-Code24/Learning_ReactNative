


import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from '../style/style';





// Inline styling is never a good practice 



// External Styling - best practice 

const Styling = () => {
  return (
    <View>
      <Text style = {{fontSize : 40, backgroundColor : 'crimson', color : 'white'}}>Inline Styling</Text>


      <Text style = {style.text}>Internal Styling</Text>



      <Text style = {styles.text}>External Styling</Text>


    </View>
  );
};


const style = StyleSheet.create({

    text : {
        color : 'black',
        fontSize : 30,
        marginVertical : 10,
        padding : 6,
        backgroundColor : 'green',
        textAlign : 'center',
        borderColor : 'lightgreen',
        borderWidth : 9,

    },


});



export default Styling;