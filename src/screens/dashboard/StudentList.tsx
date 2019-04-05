import React from 'react';
import { FlatList } from 'react-native';
import { RNFirebase } from 'react-native-firebase';

import { Student } from 'models';
import { StudentRepository } from '../../repositories';
import { StudentListItem } from './StudentListItem';

interface State {
  students: Student[];
}

export class StudentList extends React.PureComponent<{}, State> {
  repository: any;
  state = {
    students: [],
  };

  componentDidMount() {
    this.repository = new StudentRepository();
    this.repository.onChange(this.handleStudentsChange);
  }

  handleStudentsChange = (students: Student[]) => this.setState({ students });

  extractKey = (student: Student) => student.id;

  renderItem = ({ item }: { item: Student }) => (
    <StudentListItem
      student={item}
      onUpdate={this.repository.update.bind(this.repository)}
      onDelete={this.repository.delete.bind(this.repository)}
    />
  );

  render() {
    return (
      <FlatList
        data={this.state.students}
        renderItem={this.renderItem}
        keyExtractor={this.extractKey}
      />
    );
  }
}
