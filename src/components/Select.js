import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
  position: relative;
`;

const SelectElement = styled.select`
  width: 100%;
  height: 36px;
  background-color: white;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #498dda;
  box-shadow: 0px 4px 8px rgba(75, 78, 81, 0.2);
  padding-left: 8px;
  appearance: none;
  outline: none;
  cursor: pointer;
`;

const SelectOption = styled.option``;

const Select = ({ options, selectedOption, onChange }) => {
  return (
    <SelectContainer>
      <SelectElement id="dropdown" value={selectedOption} onChange={onChange}>
        <SelectOption value="">-- Select --</SelectOption>
        {options.map((option) => (
          <SelectOption key={option.id} value={option.id}>
            {option.name}
          </SelectOption>
        ))}
      </SelectElement>
    </SelectContainer>
  );
};

export default Select;
