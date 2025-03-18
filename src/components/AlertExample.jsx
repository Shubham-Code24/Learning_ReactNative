

import { View, Text, Alert, Button} from 'react-native';
import React from 'react';



// why Alert ?
// if we want customize dialog box (where styling matters) - we use modal component
// nut if we want a simple pop up message (alert message/ confirmation message /informative message etc) 
// we cant implement styling here










const AlertExample = () => {

  const showAlert = () => {

  //  Alert.alert(
      // 4 parameters - title, description/ alert message , array of objects(each object defines button when we want button with alert or not), object



 //   )

      Alert.alert("Warning !!", "This message is visible", [{text : 'cancel' }]);


  };


  return (


    <View>
      {/* <Text style = {{fontSize : 25,}}>Alert Example</Text> */}

      <Button title = "Show Alert" onPress = {showAlert} />

    </View>


  );



};





export default AlertExample;















