import BaseRepository from './BaseRepository';

export class PlanItemRepository extends BaseRepository {
  constructor(studentID: string, planID: string) {
    const ref = BaseRepository.getUserDoc()
      .collection('students')
      .doc(studentID)
      .collection('plans')
      .doc(planID)
      .collection('planItems');

    super(ref);
  }
}
