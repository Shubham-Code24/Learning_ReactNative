

import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';





// const InputText = () => {

//     // useState hook 

//     const [userName, setUserName] = useState('');


//     return (


//         <View style = {{backgroundColor : '#a4a7'}}>

//             <Text style={{ fontSize: 30,  }}>Username : {userName}</Text>

//             <TextInput style={style.textInput} placeholder="Enter Your Username" onChangeText={(data) => {setUserName(data)}} />

//         </View>
//     );

// };

// // Here we need to make a state so that whatever the changes we did inside this input box, we can easily store them inside state.

// const style = StyleSheet.create({

//     textInput: {
//         fontSize: 20,
//         borderWidth: 4,
//         borderColor: 'green',
//         height : 200,
//         width : 100,
//         borderRadius : 50 ,
//         margin : 50,
//         padding : 20,
//         overflow : 'hidden',
//     },
// });




const InputText = () => {


    const [userName, setUserName] = useState('');

    return (

        <View style={style.container}>
            <Text style={style.text}>Username : {userName}</Text>

            <TextInput style={style.textInput} placeholder="Enter your username" onChangeText = {(data) => setUserName(data)} value = {userName} ></TextInput>

            <Button title = 'Clear' onPress = {() => setUserName('')}/>;
        </View>
    );
}



const style = StyleSheet.create({

    container: {
        backgroundColor: '#ddd',
    },

    text: {
        fontSize: 25,
       // padding: 20,
        margin: 10,
        borderWidth: 2,
        borderColor: 'green',
        backgroundColor: 'skyblue',
    },

    textInput: {
        borderWidth : 3,
        borderColor : 'green',
        margin : 10,
    },


});


export default InputText;