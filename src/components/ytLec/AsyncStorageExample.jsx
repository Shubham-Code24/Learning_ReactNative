

// import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

// import React, { useEffect, useState } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // local storage in web dev - here we store our data in form of key-value pairs locally in browser storage. That data
// //                            stored permanently means data still persist there even we refresh the page, minimize or
// //                            even close the browser . It can only be removed by us.


// // async storage - here we also stored our data in our device local storage. Here also data permanently stored
// //                 even you refresh/minimize/close the App.
// //          Rem - as data stored locally so we can access it even without internet or even without any api. 



// // Interview ques - how to remove data from async storage 

// // 3 ways to remove data from async storage :- 
// // remove cache 
// // uninstall the app
// // async storage package provides method 'removeItem' 

// // when to use and when to not ?
// // beneficial for small data (for eg we store username of user and now we can use that data in any screen or component) 
// // can't be used for heavy data(like files storage) and secured data(like passwords) (only database is preferred)



// // usecases eg - when we login in app then in next attempts app didnt ask for login id and passwd because it stores our data
// // as token (which tells that person is currently login) in async storage and it will only get deleted from async storage if we log out


// // why we call this storage async ?
// // because it is asynchrnous storage that means it doesnt block the code or freeze my app while read/write operation



// // Prac - 0 (video learning)





// const AsyncStorageExample = () => {

//     // state variables 

//     const [username, setUsername] = useState('');

//     const [storedUsername, setStoredUsername] = useState('');


//     const saveUsername = async() => {

//        const savedUsername =  await AsyncStorage.setItem('Username', username);

//        if(savedUsername){
//        setStoredUsername(savedUsername);
//        Alert.alert('Username saved successfully');

//        }
//        else{
//         Alert.alert('Username not saved');

//        }


//        // make input field empty again

//        setUsername('');


//     }



//     const getUsername = async() => {


//        const response =  await AsyncStorage.getItem('Username');

//        if(response){
//         setStoredUsername(response);

//        }
//        else{
//         Alert.alert('Username not found');
//        }



//     }



//     // useEffect(()=>{
//     //     getUsername();
//     // }, []);

//     return (

//         <View style = {styles.container}>

//             <TextInput
//               placeholder= "Enter the username"
//               value = {username}
//               onChangeText = {setUsername}

//             />

            

//             <Button title = "Save Username" containerStyle = {styles.button}/>
//             <Button title = "Get Username" />

//         </View>
// );

// };



// const styles = StyleSheet.create({
//     container : {},

//     title : {},

//     inputText : {},

//     button : {
//         marginBottom : 20,
//     },


// });


// export default AsyncStorageExample;




































