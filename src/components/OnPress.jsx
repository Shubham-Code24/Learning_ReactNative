

import React from 'react';

import {View, Text, Button} from 'react-native';


const OnPress = ()=>{

    const getName = ()=>{
        console.log('Namaste');
        return ;
    }


    const getAge = (Age)=>{
        console.warn(`Warning : Age is ${Age}`);
    }



    return(

        <View>
            <Text style = {{fontSize : 30}}>Onpress</Text>
            <Button title = "Press" onPress = {getName} />
        </View>


        
        // <View>
        //     <Text style = {{fontSize : 30}}>Onpress</Text>
        //     <Button title = "Press" onPress = {getName} />
        //     <Button title = "Press" onPress = {()=>{getAge(17)}} />

        // </View>

    );
};

export default OnPress;