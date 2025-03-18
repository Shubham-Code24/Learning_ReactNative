
import { View, Text, Button } from 'react-native';
import React from 'react';

const OnPress2 = () => {


    let name = "Rohit";

    


    const setName = ()=>{

        // changing value of name var 

        name = "Sumit" ;

        
        console.warn("New name is " + name);



    }


   // console.log("Name inside component onpress2 : " + name);
    



  return (


    <View>
    <Text style = {{fontSize:30}}>OnPress2 with {name}</Text>
    <Button title = "Press" onPress = {setName} />
    <Text style = {{fontSize:30}}>OnPress2 with {name}</Text>
  </View>
   
  );


};

export default OnPress2;