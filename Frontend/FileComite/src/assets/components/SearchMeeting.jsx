import React from 'react'

 export const SearchMeeting = () => {
  return (
    <div>Search Meeting</div>
  )
}

export default SearchMeeting

/* import React, { useState } from 'react';

const Meeting = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Ocultar Detalles' : 'Mostrar Detalles'}
      </button>
      {isVisible && (
        <div>
          <p>Este es el contenido de la reunión.</p>
          <p>Aquí puedes poner más detalles sobre la reunión.</p>
        </div>
      )}
    </div>
  );
};

export default Meeting; */
