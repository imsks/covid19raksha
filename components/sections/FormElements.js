import React from "react";

export const FormLabelInputGroup = (props) => {
  const { label, inputType, handleInput, required = false } = props;

  return (
    <div className="form__group">
      <label className="form__label">{label}</label>
      <input
        type={inputType}
        className="form__input"
        onChange={handleInput}
        required={required}
      />
    </div>
  );
};

export const FormLabelSelectGroup = (props) => {
  const { label, handleSelectOption, options } = props;

  return (
    <div className="form__group">
      <label className="form__label">{label}</label>
      <select className="form__select" onChange={handleSelectOption}>
        {options.map((option, key) => {
          const { optionLabel, optionValue } = option;

          return (
            <option value={optionValue} key={key}>
              {optionLabel}
            </option>
          );
        })}
      </select>
    </div>
  );
};
