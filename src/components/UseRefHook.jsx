



import { View, Text, TextInput, StyleSheet, TouchableOpacity, } from 'react-native';

import React, { useRef } from 'react';




// What I want - on pressing button 'submit' I can directly target my input field without re-render the component




  // ref in react native :-

  // Refs can be used to access DOM nodes or React Native components created in the render method.

  // We can use Refs in react native with the help of the useRef hook which returns a ref object. The object has a .current property through which the React native components can be accessed. 

  // The returned object will remain persistent for the whole component lifespan. It means that whenever the ref object is updated it does not cause your component to re-render.

  // It’s helpful for keeping any mutable value around, similar to how you’d use instance fields in classes.

  // Refs in React Native provide a way to access and manipulate DOM elements directly. They are often used for managing focus, animations, and third-party libraries.


const UseRefHook = () => {


  // making instance of useRef hook (instance means exact copy i.e. useRef whole power is now in myRef)

  const myRef = useRef();

  const handleRef = () => {

  

   // // Manipulations on targeted component
    // myRef.current.setNativeProps({
    //   text: 'Arun',
    //   style: {
    //     color: 'white',
    //     backgroundColor: 'crimson',

    //   },
    // });


    // Focus on targeted component

  };



  return (
    <View style={styles.container}>

      <TextInput
        ref={myRef}    // ref prop used to give refernce of this component ... it creates link of this textInput component to myRef (now this whole component is stored in myRef.current)
        style={styles.inputText}
        placeholder="Enter your text abc"
        placeholderTextColor="#999"

      />


      <TouchableOpacity style={styles.button} onPress={handleRef}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>


    </View>
  );
};


const styles = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderWidth: 2,

  },

  inputText: {

    borderWidth: 2,
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 16,
    borderColor: '#ccc', // #ccc is grey like shade
    marginBottom: '20',


  },

  button: {
    borderWidth: 2,
    width: '100%',
    height: 50,
    backgroundColor: '#007Bff',   // blue color
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },

  buttonText: {

    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',

  },




});


export default UseRefHook;



























