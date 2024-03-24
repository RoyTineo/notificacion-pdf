import React from 'react';

const DateSelector = ({ label, options, selectedValue, onChange }) => {
  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <select id={label} value={selectedValue} onChange={onChange}>
        <option value="">Selecciona {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default DateSelector;
