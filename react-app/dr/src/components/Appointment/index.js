import React from 'react';
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Confirm from './Confirm';
import Status from './Status';
import Error from './Error';
import useVisualMode from 'hooks/useVisualMode';

const Appointment = (props) => {
  const { id, time, interview, interviewers, bookInterview, cancelInterview } =
    props;

  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const SAVING = 'SAVING';
  const CONFIRM = 'CONFIRM';
  const EDIT = 'EDIT';
  const DELETING = 'DELETING';
  const ERROR_SAVE = 'ERROR_SAVE';
  const ERROR_DELETE = 'ERROR_DELETE';

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // const updateSpots = (num) => {
  //   const days = state.days.map((day) => {
  //     if (day.name === state.day) {
  //       return { ...day, spots: day.spots - num };
  //     }
  //     return day;
  //   });
  //   //  return updatedDays;
  //   return setState((prev) => ({ ...prev, days }));
  // };

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    bookInterview(id, interview)
      .then(() => transition(SHOW))
      .catch((error) => transition(ERROR_SAVE, true));
  }

  function destroy() {
    transition(DELETING, true);
    cancelInterview(id)
      .then(() => transition(EMPTY))
      .catch((error) => transition(ERROR_DELETE, true));
  }

  return (
    <>
      <article className="appointment">
        <Header time={time} />
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && (
          <Show
            student={interview.student}
            interviewer={interview.interviewer}
            onEdit={() => transition(EDIT)}
            onDelete={() => transition(CONFIRM)}
            onCancel={back}
          />
        )}

        {mode === CREATE && (
          <Form
            interview={interview}
            interviewers={interviewers}
            onSave={save}
            onCancel={back}
          />
        )}

        {mode === SAVING && <Status message="Saving" />}

        {mode === EDIT && (
          <Form
            student={interview.student}
            interviewer={interview.interviewer.id}
            interviewers={interviewers}
            onSave={save}
            onCancel={back}
          />
        )}

        {mode === CONFIRM && (
          <Confirm
            message="Would u like to delete?"
            onCancel={back}
            onConfirm={destroy}
          />
        )}

        {mode === DELETING && <Status message="Deleting" />}

        {mode === ERROR_SAVE && (
          <Error message="Could not save appointment" onClose={() => back()} />
        )}

        {mode === ERROR_DELETE && (
          <Error
            message="Could not delete appointment"
            onClose={() => back()}
          />
        )}
      </article>
    </>
  );
};

export default Appointment;
