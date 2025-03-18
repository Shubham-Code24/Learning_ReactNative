import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const LoginForm = () => {

    // we are defining 2 states to store and manage the input field values, we use useState hook for this.

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

// write the logic to handle login when someone press login button (its actually the backend part where data gets erased from 
// input field and stored inside database 
// but here we just want that on pressing those entered email passwd prints in console and gets erased from input fields


const handleLogin = ()=>{


    console.log('Email : ', email);
    console.log('Password : ', password);

    setEmail('');
    setPassword('');
    

    // These both fxn calls make the state value empty but to empty the input fields we use value prop with each 
    // TextInput component
    
}

    return (
        <View style={style.container}>
            <Text style={style.heading}>Login</Text>

            <TextInput
                style={style.textInput}
                placeholder="Email"
                placeholderTextColor='#999'   // #999 - grey color like
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none' // as email address letters are always small

            />

            <TextInput 
            style={style.textInput}
            placeholder = 'Password'
            placeholderTextColor='#999'
            value = {password}
            onChangeText = {setPassword}
            secureTextEntry = {true}



            />

            {/* Now we have to make login button */}

            <TouchableOpacity style = {style.button} onPress = {handleLogin}>
                <Text style = {style.buttonText}>Login</Text>
            </TouchableOpacity>


        </View>
    );
};



const style = StyleSheet.create({

    container: {
        backgroundColor : '#f0f0f0',
        justifyContent : 'center',
        paddingHorizontal : 20,
        paddingTop : 40,
    },

    heading: {
        fontSize : 25,
        fontWeight : 'bold',
        marginBottom : 30,
        textAlign : 'center',
        color : '#333'

    },

    textInput: {
        borderWidth: 2,
        borderColor: 'green',
        marginBottom : 20,  // to get some space below the bottom of text container
        paddingHorizontal : 15,   // to get some inner space horizontally 
        borderRadius : 10,
        backgroundColor : '#fff',   // #fff - white color
        fontSize : 16,
        color : '#333',    // #333 - black color
    },


    button : {
        backgroundColor : '#6200EE',
        paddingVertical : 15,
        borderRadius : 10,
        alignItems : 'center',
        marginBottom : 20,
    },


    buttonText : {
        color : '#fff',
        fontSize : 18,
        fontWeight : 'bold',
    },

});



export default LoginForm;