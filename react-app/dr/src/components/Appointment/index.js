import React from 'react';
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Confirm from './Confirm';
import Error from './Error';
import useVisualMode from 'hooks/useVisualMode';
import Axios from 'axios';

const Appointment = (props) => {
  const { id, interview, interviewers, time, state, setState } = props;

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

  function updateSpots(num) {
    state.days.forEach((day) => {
      if (day.name === state.day) {
        day.spots -= num;
      }
    });
    return state.days;
  }

  async function bookInterview(id, interview) {
    console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    /*--------*/
    // Make the PUT request to update the database
    return Axios.put(
      `http://localhost:8001/api/appointments/${id}`,
      appointment
    ).then(() => {
      if (!state.appointments[id].interview) {
        const days = updateSpots(1);
        setState({
          ...state,
          appointments,
          days,
        });
      } else {
        setState({
          ...state,
          appointments,
        });
      }
    });
  }

  async function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return Axios.delete(
      `http://localhost:8001/api/appointments/${id}`,
      appointment
    ).then(() => {
      const days = updateSpots(-1);
      setState({ ...state, appointments, days });
    });
  }

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
