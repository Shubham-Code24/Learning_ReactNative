

import { View, Text } from 'react-native';
import React, {useEffect} from 'react';

const UseEffectHook = () => {

    useEffect(()=>{

        console.log(`API calling 1st`);
        console.log(`API call again 2nd`);

    }, []);

  return (

    <View>
      <Text>UseEffectHook1</Text>
      <Text>UseEffectHook2</Text>
      <Text>UseEffectHook3</Text>
      <Text>UseEffectHook4</Text>
      <Text>UseEffectHook5</Text>
      <Text>UseEffectHook6</Text>
      <Second/>
    </View>

  );

};



// second component ( locally )

const Second = () => (

    <View>
        <Text>Second</Text>
    </View>
)

export default UseEffectHook;



















