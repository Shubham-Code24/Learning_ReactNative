


import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import styles from '../style/style';
import Day from './Day';




const Weather = () => {


   // const country = 


  return (

    <View>

        <View>
            <Text style = {styles.text}>San Franciso</Text>
            <Text style = {styles.text}>Clear</Text>
            <Text style = {styles.text}>11</Text>

            <Text style = {styles.text}>January 28, 2025</Text>


        </View>



         <View>


        

            <Day day = 'Monday' weather = 'Sunny' temp = '30' />
            <Day day = 'Tuesday' weather = 'Rainy' temp = '20' />
            <Day day = 'Wednesday' weather = 'Sunny' temp = '25' />
            <Day day = 'Thursday' weather = 'Windy' temp = '15' />
            <Day day = 'Friday' weather = 'Cold' temp = '8' />
            <Day day = 'Saturday' weather = 'Mild Cold' temp = '12' />
            <Day day = 'Sunday' weather = 'Rainy' temp = '20' />



            
        </View>


          {/* <Day day = 'Monday' weather = 'Sunny' temp = '30' /> */}



          <View style = {styling.conatiner}>
            <Text style = {styling.text}>Weather Forecasts Today</Text>
          </View>

        

      



      

    </View>


  )

}


const styling = StyleSheet.create({
    conatiner : {
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',

        marginVertical : 50,
    },

    text : {
        fontSize : 15,
        fontWeight : 'bold',
        color : 'white',
        
    }

    
});


export default Weather;