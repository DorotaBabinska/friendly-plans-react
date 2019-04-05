import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { Card, Icon, IconButton } from 'components';
import { i18n } from 'locale';
import { Student } from 'models';
import { NavigationService } from 'services';
import { palette, typography } from 'styles';
import { CreatePlanButton } from './CreatePlanButton';
import { StudentPlanList } from './StudentPlanList';

interface Props {
  student: Student;
  onUpdate: (id: string, obj: object) => void;
  onDelete: (id: string) => void;
}

interface State {
  name: string;
}

export class StudentListItem extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: props.student.name,
    };
  }

  handleNameChange = (name: string) => this.setState({ name });

  updateStudentName = () => {
    this.props.onUpdate(this.props.student.id, {
      name: this.state.name,
    });
  };

  deleteStudent = () => {
    const { student, onDelete } = this.props;

    NavigationService.navigate('Dialog', {
      title: i18n.t('studentList:removeStudentTitle'),
      description: i18n.t('studentList:removeStudentDescription', {
        name: student.name,
      }),
      buttonTitle: i18n.t('common:yes'),
      onPress: () => onDelete(student.id),
    });
  };

  render() {
    return (
      <Card>
        <View style={styles.topRow}>
          <Icon name="account" iconStyle={styles.icon} />
          <TextInput
            value={this.state.name}
            style={styles.input}
            onEndEditing={this.updateStudentName}
            onChangeText={this.handleNameChange}
            underlineColorAndroid={palette.primaryDark}
          />
          <IconButton onPress={this.deleteStudent} name="close" size={36} />
        </View>
        <StudentPlanList student={this.props.student} />
        <CreatePlanButton student={this.props.student} />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 48,
    marginEnd: 32,
  },
  input: {
    height: 42,
    ...typography.headline6,
    color: palette.textBlack,
    flex: 1,
    borderBottomColor: 'black',
    marginEnd: 120,
  },
});
