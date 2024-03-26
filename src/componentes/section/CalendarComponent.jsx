import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es"; // Importa el archivo de idioma español

import "./StyleCalendar.css";

// Función para agregar clases a los días específicos
const highlightDates = (date) => {
  const day = date.getDay(); // Obtiene el día de la semana (0 - Domingo, 6 - Sábado)

  // Feriados (por ejemplo, 1 de enero y 25 de diciembre)
  const feriados = [
    new Date(date.getFullYear(), 0, 1),
    new Date(date.getFullYear(), 11, 25),
    new Date(date.getFullYear(), 2, 29),
    new Date(date.getFullYear(), 4, 1),
    new Date(date.getFullYear(), 5, 29),
    new Date(date.getFullYear(), 6, 23),
    new Date(date.getFullYear(), 6, 26),
    new Date(date.getFullYear(), 6, 28),
    new Date(date.getFullYear(), 6, 29),
    new Date(date.getFullYear(), 7, 6),
    new Date(date.getFullYear(), 7, 30),
    new Date(date.getFullYear(), 7, 8),
    new Date(date.getFullYear(), 10, 1),
    new Date(date.getFullYear(), 11, 6),
    new Date(date.getFullYear(), 11, 8),
    new Date(date.getFullYear(), 11, 9),
    new Date(date.getFullYear(), 11, 23),
    new Date(date.getFullYear(), 11, 24),
    new Date(date.getFullYear(), 11, 30),
    new Date(date.getFullYear(), 11, 31),
  ];

  // Si es sábado o domingo, o es un día feriado, devuelve la clase 'highlighted'
  if (
    day === 0 ||
    day === 6 ||
    feriados.some((d) => d.getTime() === date.getTime())
  ) {
    return "highlighted";
  }
};

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          locale={es}
          inline
          todayButton="Hoy"
          dayClassName={highlightDates}  // Aplica estilos a los días según la función
        />
   
  );
};

export default CalendarComponent;
