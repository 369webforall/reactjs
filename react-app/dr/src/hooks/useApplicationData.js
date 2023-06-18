import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData(props) {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState((prev) => ({ ...prev, day }));

  function updateSpots(num) {
    state.days.forEach((day) => {
      if (day.name === state.day) {
        day.spots -= num;
      }
    });
    return state.days;
  }

  async function bookInterview(id, interview) {
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
    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, appointment)
      .then(() => {
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

    return axios
      .delete(`http://localhost:8001/api/appointments/${id}`, appointment)
      .then(() => {
        const days = updateSpots(-1);
        setState({ ...state, appointments, days });
      });
  }

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers'),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}
