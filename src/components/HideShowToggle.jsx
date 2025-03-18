

import { View, Text, Button } from 'react-native';
import React, {useState} from 'react';
import HideShowComp from './HideShowComp';

const HideShowToggle = () => {


    const [status, setStatus] = useState(true);

  return (
    <View>
      <Text style = {{fontSize : 30}}>HideShowToggle</Text>

      {
        status ? <HideShowComp/> : null
      }

      <Button title= "Hide" onPress = {() => setStatus(false)}/>

        <Button title = "Show" onPress = {()=>{setStatus(true)}}/ >
    </View>
  );

};




export default HideShowToggle;


















