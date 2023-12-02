import React, { useState } from 'react';

const UniversalForm = ({ inputData, onSubmit, parentField = '' }) => {
  const initialFormState = Object.keys(inputData).reduce((acc, key) => {
    acc[key] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    onSubmit(formData);
    alert(formData)
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(inputData).map(([field, labelOrSubInputData]) => (
        <div key={field}>
          {typeof labelOrSubInputData === 'string' ? (
            <>
              <label htmlFor={field}>{labelOrSubInputData}:</label>
              <input
                type="text"
                id={field}
                value={formData[field]}
                onChange={(e) => handleChange(field, e.target.value)}
              />
            </>
          ) : (
            <UniversalForm
              inputData={labelOrSubInputData}
              onSubmit={(data) => handleChange(field, data)}
              parentField={field}
            />
          )}
        </div>
      ))}
      {parentField === '' && <button type="submit" className='action-button'>Submit</button>}
    </form>
  );
};

export default UniversalForm;
