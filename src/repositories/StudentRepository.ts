import { RNFirebase } from 'react-native-firebase';
import { QuerySnapshot } from 'react-native-firebase/firestore';

import { Student } from 'models/Student';
import BaseRepository from './BaseRepository';

type Callback = (students: Student[]) => void;

export class StudentRepository extends BaseRepository {
  constructor() {
    const ref = BaseRepository.getUserDoc().collection('students');

    super(ref);
  }

  onChange(callback: Callback) {
    this.ref.onSnapshot((querySnapshot: QuerySnapshot) => {
      const students = querySnapshot.docs.map(doc =>
        Object.assign(new Student(), {
          id: doc.id,
          ...doc.data(),
        }),
      );
      callback(students);
    });
  }
}
