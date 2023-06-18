import React, { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

const Form = (props) => {
  const [student, setStudent] = useState(props.student || '');
  const [interviewerId, setInterviewerId] = useState(props.interviewer || null);

  function save() {
    onSave(student, interviewerId);
  }
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            value={student}
            placeholder="Enter Student Name"
            onChange={(e) => setStudent(e.target.value)}
            /*
                      This must be a controlled component
                      your code goes here
                    */
          />
        </form>
        <InterviewerList
          onChange={setInterviewerId}
          value={interviewerId}
          interviewers={props.interviewers}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button confirm onClick={save}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
};

export default Form;
