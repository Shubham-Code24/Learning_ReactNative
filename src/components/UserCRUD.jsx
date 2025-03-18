/* eslint-disable jsx-quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */



import { View, Text, Alert, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getUsers, updateUser, addUser, deleteUser } from '../../database/firestoreCRUD';




const UserCRUD = () => {


  

  // state var to store data of every user
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [phone, setPhone] = useState('');


  // state var for CRUD operations 

  const [users, setUsers] = useState([]);    // state in which our 'users' (array of objects) get fetched so initialise with empty array
  // whatever the data present in my collection 'users' should come here


  const [editId, setEditId] = useState(null);


  // functions for CRUD operations


  // Fetch all the 'users' collection in form of array of objects which we store in 'users' state variable using setUsers
  // so thats users (private data of component) should remain up-to-date with 'users' collection



  const fetchUsers = async () => {

    try {

      const usersList = await getUsers();       // getUsers fxn return a array of objects 
      setUsers(usersList);

    } catch (error) {

      Alert.alert('Error ', error.message);

    }

  };



  // useEffect to make sure when component gets mounted, useEffect fxn gets called and all the data which is in database will come inside users state var

  useEffect(() => {

    fetchUsers();

  }, []);




  // to handle submit button 

  const handleSubmit = async () => {

    if (!name || !email || !phone) {

      Alert.alert('Error ', 'Please fill all the fields first then submit');
      return;

    }

    // if all fields gets filled up, make a object of it and save in users Collection

    const userData = { name, email, phone };  // bind all data of user in userData object so that we can use our firestoreCRUD fxns on it


    // now 2 works possible on submit - add or edit this userData object


    try {
      if (editId) {   // editId not null -> means there is a document to edit

        await updateUser(editId, userData);
        Alert.alert('Success', '  User updated successfully');

      }

      else {   // add the userData

        await addUser(userData);
        Alert.alert('Success', '  User added successfully');

      }


      // make all input fields empty

      setName('');
      setEmail('');
      setPhone('');

      // 
      setEditId(null);


      // to see all updates on home screen 

      await fetchUsers();


    } catch (error) {

      Alert.alert('Error', error.message);

    }


  };

























  // to handle delete button 

  const handleDelete = async (id) => {

    try {

      await deleteUser(id);
      Alert.alert('Success', '  User deleted successfully');

      // to update ui 
      await fetchUsers();

    } catch (error) {

      Alert.alert('Error', error.message);

    }


  };



  // to handle edit button  (no need to use async as all are synchronous operations)

  // real edit is done handleSubmit here we only update all state var to get updated

  const handleEdit = (user) => {

    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);

    setEditId(user.id);

  };



  return (

    <View style={styles.container}>


      <View style={styles.box}>

        <Text style={styles.text}>{ editId ? 'Edit User' : 'Add User' } </Text>

      
        <TextInput
          placeholder='Enter name'
          value={name}
          onChangeText={setName}

        />

       <TextInput
          placeholder='Enter email'
          value={email}
          onChangeText={setEmail}

        />

        <TextInput
          placeholder='Enter phone no'
          value={phone}
          onChangeText={setPhone}

        />



        <TouchableOpacity>
          <Text></Text>
        </TouchableOpacity>


      </View>

    </View>

  );






};



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#555',

  },


  box: {



  },


  text: {

  },


  inputText: {

    borderWidth : 3,
    borderColor : '#333',

    padding : 4,

    width : 'auto',

    borderRadius : 20,

    

    

  },


});



export default UserCRUD;












































