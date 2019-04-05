import firebase, { RNFirebase } from 'react-native-firebase';
import { CollectionReference } from 'react-native-firebase/firestore';

export default class BaseRepository {
  static getUserDoc() {
    const userId = firebase.auth().currentUser!.uid;
    return firebase
      .firestore()
      .collection('users')
      .doc(userId);
  }

  ref: CollectionReference;

  constructor(ref: CollectionReference) {
    this.ref = ref;
  }

  delete(modelId: string) {
    return this.ref.doc(modelId).delete();
  }

  update(modelId: string, obj: object) {
    return this.ref.doc(modelId).update(obj);
  }

  add(model: object) {
    return this.ref.add(model);
  }
}
