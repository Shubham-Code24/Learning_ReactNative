
import React from 'react';

import {View, Text} from 'react-native';


const Third = ()=>{
    const str = "I am third";

    return(
        <View>
            <Text style = {{fontSize : 30}}>Hello {str}</Text>
        </View>
    );
};

export default Third;


