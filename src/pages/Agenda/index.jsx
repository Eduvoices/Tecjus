import React, { useState, useEffect } from 'react';
import  CalendarHeader  from '../../components/CalendarHeader/index';
import  Day  from '../../components/Day/index';
import  NewEventModal  from '../../components/NewEventModal/index';
import  DeleteEventModal  from '../../components/DeleteEventModal/index';
import  {useDate}  from '../../components/hooks/useDate';

import * as S from './styles'

 const Agenda = () => {
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState();
  const [events, setEvents] = useState(
    localStorage.getItem('events') ? 
      JSON.parse(localStorage.getItem('events')) : 
      []
  );

  const eventForDate = date => events.find(e => e.date === date);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const { days, dateDisplay } = useDate(events, nav);

  return(
    <S.Body>
      <div id="container">
        <CalendarHeader 
          dateDisplay={dateDisplay}
          onNext={() => setNav(nav + 1)}
          onBack={() => setNav(nav - 1)}
        />

        <div id="weekdays">
          <div>Domingo</div>
          <div>Segunda-feira</div>
          <div>Terça-feira</div>
          <div>Quarta=feira</div>
          <div>Quinta-feira</div>
          <div>Sexta-feira</div>
          <div>Sábado</div>
        </div>

        <div id="calendar">
          {days.map((d, index) => (
            <Day
              key={index}
              day={d}
              onClick={() => {
                if (d.value !== 'padding') {
                  setClicked(d.date);
                }
              }}
            />
          ))}
        </div>
      </div>

      {
        clicked && !eventForDate(clicked) &&
        <NewEventModal
          onClose={() => setClicked(null)}
          onSave={title => {
            setEvents([ ...events, { title, date: clicked }]);
            setClicked(null);
          }}
        />
      }

      {
        clicked && eventForDate(clicked) &&
        <DeleteEventModal 
          eventText={eventForDate(clicked).title}
          onClose={() => setClicked(null)}
          onDelete={() => {
            setEvents(events.filter(e => e.date !== clicked));
            setClicked(null);
          }}
        />
      }
    </S.Body>
  );
};

export default Agenda