import BaseRepository from './BaseRepository';

export class PlanRepository extends BaseRepository {
  constructor(studentID: string) {
    const ref = BaseRepository.getUserDoc()
      .collection('students')
      .doc(studentID)
      .collection('plans');

    super(ref);
  }

}
