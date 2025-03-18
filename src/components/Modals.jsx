

import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import React, {useState} from 'react';






// const Modals = () => {

//   const[modalVisible, setModalVisible] = useState(false);


//   return (

//     <View style = {styles.container}>

//       <TouchableOpacity style = {styles.openButton} onPress = {()=>setModalVisible(true)}>
//         <Text style = {styles.buttonText}>Show Modal</Text>
//       </TouchableOpacity>


//       <Modal
//       visible = {modalVisible}
//       animationType = "fade"   // slide - slide makes the modal overlay screen comes from bottom to top, fade - it comes slowly and smoothly
//       transparent = {true}   // to see screen behind modal 
//       onRequestClose={()=> setModalVisible(false)}   // compulsory prop , we do same work with visible prop but sometimes it;s not work on ios so use this prop to be on safeside

//       >
//         <View style = {styles.modalOverlay}>
//           <View style = {styles.modalView}>
//             <Text style = {styles.modalTitle}>Title</Text>
//             <Text style = {styles.modalText}>Description of Modal Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, delectus corporis quos harum consequuntur recusandae accusamus aut reiciendis? Sunt neque nam nemo ab provident voluptas eaque modi, praesentium obcaecati labore.</Text>
//             <TouchableOpacity style = {styles.closeButton} onPress = {() => setModalVisible(false)}>
//               <Text style = {styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>



//       {/* <Modal><Text>Hello</Text></Modal>

//       <Modal><Text>Namaste</Text></Modal>

//       <Modal><Text>SatShreeKal</Text></Modal> */}




//     </View>

//   );
// };

// export default Modals;




// const styles = StyleSheet.create({

//   container : {

//     borderWidth : 2,
//     flex : 1,
//     justifyContent : 'center',
//     alignItems : 'center',
//     backgroundColor : '#f0f0f0',

//   },

//   openButton : {


//     borderWidth : 2,
//     backgroundColor : '#6200ea',
//     paddingVertical : 12,
//     paddingHorizontal : 24,
//     borderRadius : 12,
//     elevation : 3,


//   },

//   buttonText : {

//     color : '#fff',
//     fontSize : 16,
//     fontWeight : 'bold',

//   },

//   modalOverlay : {

//     borderWidth : 2,
//     flex : 1,
//     justifyContent : 'center',
//     alignItems : 'center',
//     backgroundColor : 'rgba(0, 0, 0, 0.7)',       // as we know dialog box behind screen is also visible

//   },

//   modalView : {

//     borderWidth : 2,
//     width : '80%',
//     backgroundColor : '#fff',
//     borderRadius : 20,
//     padding : 20,
//     alignItems : 'center',
//     elevation : 5,
//   },

//   modalTitle : {
//     fontSize : 22,
//     fontWeight : 'bold',
//     marginBottom : 10,
//     color : '#333',

//   },

//   modalText : {
//     fontSize : 16,
//     marginBottom : 20,
//     textAlign : 'center',
//     color : '#555',  // black-grey shade 

//   },

//   closeButton : {
//     backgroundColor : '#03dace',
//     paddingVertical : 12,
//     paddingHorizontal : 20,
//     borderRadius : 20,
//     elevation : 1,

//   },


//   closeButtonText : {
//     color : '#fff',
//     fontWeight : 'bold',
//     fontSize : 16,


//   },

// });





// Prac - 1  (By me)





const Modals = () => {

  // state var to tell when dial box should appear

  const [modalVisible, setModalVisible] = useState(false);  // this is of no use unless it gets attached to Modal component

  return (

    <View style = {styles.container}>

      <TouchableOpacity style = {styles.openButton} onPress = {() => setModalVisible(true)}>
        <Text style = {styles.openButtonText}>Open Modal</Text>
      </TouchableOpacity>


     {/* Modal is just a wrapper */}

     <Modal
     visible = {modalVisible}
     >

      <View style = {styles.modalOverlay}>

        <View style = {styles.modalView}>

          <Text style = {styles.modalTitle}>Title</Text>
          <Text style = {styles.modalText}> Welcome to our custom modal Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti dicta, odit assumenda eaque fuga corrupti velit recusandae provident aperiam autem sequi cum excepturi iure laborum porro soluta repellendus quam!
          </Text>

          <TouchableOpacity styles = {styles.closeButton} onPress = {() => setModalVisible(false)}>
            <Text style = {styles.closeButtonText}>Close</Text>
          </TouchableOpacity>

        </View>

      </View>

     </Modal>



    </View>

  );


};




const styles = StyleSheet.create({


  container : {
    borderWidth : 2,
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#f0f0f0'
  },

  openButton : {
    borderWidth : 2,
    paddingHorizontal : 24,
    paddingVertical : 12,
    backgroundColor : '#6200ea',
   // elevation : 1,
    borderRadius : 18,

  },

  openButtonText : {
    color : '#fff',
    fontSize : 18,
    fontWeight : 'bold',
  },

  modalOverlay : {

    borderWidth : 2,
   flex : 1,
   justifyContent : 'center',
   alignItems : 'center',
   backgroundColor : 'rgba(0, 0, 0, 0.6)',

  },

  modalView : {
    borderWidth : 2,
    width : '80%',
    backgroundColor : '#f0f0f0',
    borderRadius : 12,
   alignItems : 'center',
   padding : 20,
  },


  modalTitle : {

  //  borderWidth : 2,
    color : '#555',
    fontSize : 24,
    fontWeight : 'bold',
    marginBottom : 18,

  },

  modalText : {

   // borderWidth : 2,
    fontSize : 15,
    color : '#333',
   // textAlign : 'center',
   marginHorizontal : 15,
    marginBottom : 18,

  },

  closeButton : {
        borderWidth : 2,
        backgroundColor : '#03dace',
        paddingVertical : 12,
        paddingHorizontal : 20,
        borderRadius : 20,
        elevation : 1,
  },




});





export default Modals;

















