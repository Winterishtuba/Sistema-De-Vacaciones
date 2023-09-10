import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';

const CenteredDatePicker = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

export default function ReactDatePicker() {
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [selectedValue, setSelectedValue] = useState('opcion 1');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <div>
        <h2>Selecciona una opción:</h2>
        <div>
          <input
            type="radio"
            id="opcion 1"
            name="opciones"
            value="opcion 1"
            checked={selectedValue === 'opcion 1'}
            onChange={handleChange}
          />
          <label htmlFor="opcion 1">Un día</label>
        </div>
        <div>
          <input
            type="radio"
            id="opcion 2"
            name="opciones"
            value="opcion 2"
            checked={selectedValue === 'opcion 2'}
            onChange={handleChange}
          />
          <label htmlFor="opcion 2">Más de un día</label>
        </div>
      </div>

      {selectedValue === 'opcion 1' ? (
        <CenteredDatePicker>
          <text>Elija el día:</text>
          <div className='DatePicker'>
            <DatePicker
              selected={selectedDate1}
              onChange={date => setSelectedDate1(date)}
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </CenteredDatePicker>
      ) : selectedValue === 'opcion 2' ? (
        <div>
          <CenteredDatePicker>
            <text>Desde: </text>
            <div className='DatePicker'>
              <DatePicker
                selected={selectedDate1}
                onChange={date => setSelectedDate1(date)}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </CenteredDatePicker>
          <CenteredDatePicker>
            <text>Hasta:  </text>
            <div className='DatePicker'>
              <DatePicker
                selected={selectedDate2}
                onChange={date => setSelectedDate2(date)}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </CenteredDatePicker>
        </div>
      ) : null}
      <div>
      <button onClick={() => console.log("Click")}>Enviar</button>
      </div>
    </div>

  );
}