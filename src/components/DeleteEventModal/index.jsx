import React from 'react';

 const DeleteEventModal = ({ onDelete, eventText, onClose }) => {
  return(
    <>
      <div id="deleteEventModal">
        <h2>Event</h2>

        <p id="eventText">{eventText}</p>

        <button onClick={onDelete} id="deleteButton">Remover</button>
        <button onClick={onClose} id="closeButton">Fechar</button>
      </div>

      <div id="modalBackDrop"></div>
    </>
  );
};

export default DeleteEventModal