

import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import React, { useState } from 'react';



// modal - built-in component to make beautiful dialog box (pop-up message).
// Modal is just a wrapper
// Rem - Modal component by default covers our whole screen.

// steps :-
// 1. Build a state boolean var (contains true/false) to tell when to open that dialog box


// structure of modal :-
// Modal - to create dialog box
// outer view - to wrap all content of dialog box 
// inner view - to tell the things inside of modal


const ModalDialogBox = () => {


    const [modalVisible, setModalVisible] = useState(false);




    return (


        <View style={styles.container}>
            <TouchableOpacity
                style={styles.openButton}
                onPress={() => setModalVisible(true)}
            >
                <Text>Show Modal</Text>
            </TouchableOpacity>



            <Modal>
                <View style = {styles.modalOverlay}>
                    <View style = {styles.modalView}>
                        <Text style = {styles.modalTitle}>Beautiful Modal</Text>
                        <Text style = {styles.modalText}>This is beautiful Modal</Text>
                        
                        <TouchableOpacity style = {styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Text>Close</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </Modal> 



        </View>


    );
};




const styles = StyleSheet.create({

    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',

    },

    openButton : {
        backgroundColor : '#6200ea',
        paddingVertical : 18,
        paddingHorizontal : 24,
        borderRadius : 18,
    },

    modalOverlay: {
       // flex : 1,
       // justifyContent : 'center',
      //  alignItems : 'center',
      //  backgroundColor : 'rgba(0, 0, 0, 0.7)',

        borderWidth : 3,

    },

    modalView : {
        borderWidth : 3,
    },


    modalTitle : {},


    modalText : {},


    closeButton : {},

});


export default ModalDialogBox;





