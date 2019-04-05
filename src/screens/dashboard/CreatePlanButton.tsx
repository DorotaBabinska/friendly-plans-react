import React from 'react';

import { FlatButton } from 'components';
import { i18n } from 'locale';
import { Student } from 'models';
import { palette } from 'styles';

import { PlanRepository } from '../../repositories';

interface Props {
  student: Student;
}

export class CreatePlanButton extends React.PureComponent<Props> {
  createPlanForStudent = () => {
    new PlanRepository(this.props.student.id).add({
      name: i18n.t('planList:planNamePlaceholder'),
      studentId: this.props.student.id,
    });
  };

  render() {
    return (
      <FlatButton
        title={i18n.t('planList:createPlan')}
        icon={{
          name: 'database-plus',
          type: 'material-community',
          color: palette.primaryDark,
        }}
        onPress={this.createPlanForStudent}
      />
    );
  }
}
