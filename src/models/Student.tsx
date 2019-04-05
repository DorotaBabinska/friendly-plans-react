import firebase from 'react-native-firebase';
import { CollectionReference } from 'react-native-firebase/firestore';

export class Student {
  name!: string;
  id!: string;
}

// DEPRECATED - DELETE ME
export const getStudentsRef = (
  userId = firebase.auth().currentUser!.uid,
): CollectionReference =>
  firebase
    .firestore()
    .collection('users')
    .doc(userId)
    .collection('students');
