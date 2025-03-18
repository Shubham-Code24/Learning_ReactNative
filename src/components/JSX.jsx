import { View, Text } from 'react-native'
import React from 'react'

const JSX = () => {
  // var decl - statement
    let fname = "Sachin";


// fxn decl - statement
    function getName(){
        return "Sachin";
    }


  return (
    // I am writing jsx inside return statement

    <View>
      <Text style = {{fontSize : 30}}>Learning jsx with {fname = "Vivan"} and {getName()}</Text>
    </View>

  );
};

export default JSX;







