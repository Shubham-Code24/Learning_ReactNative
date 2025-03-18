import { View, Text, Button } from 'react-native';
import React, {useState} from 'react';

const UseStateHook = () => {


    const [name, setName] = useState('Vivek');

    const updateName = () => {
        setName("Shivam");
    }


  return (
    <View>
      <Text style = {{fontSize : 30}}>UseStateHook with {name}</Text>
      {/* <Button title = "Press" onPress = {() => setName("Sohan")} /> */}
       
    </View>
  );

};

export default UseStateHook;