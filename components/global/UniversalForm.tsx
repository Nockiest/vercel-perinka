import React, { useState } from 'react';

const UniversalForm = ({ inputData, onSubmit, parentField = '', resetFormData, onDataChange }) => {
  const initialFormState = Object.keys(inputData).reduce((acc, key) => {
    acc[key] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    alert(JSON.stringify(formData)); // Convert formData to a string for the alert
    resetForm(); // Reset the form after submission
  };

  const handleChange = (field, value) => {
    setFormData((prevData) => {
      if (typeof prevData[field] === 'object' && typeof value === 'object') {
        // If the field is an object and the new value is an object, merge them
        return {
          ...prevData,
          [field]: {
            ...prevData[field],
            ...value,
          },
        };
      } else {
        // Otherwise, update the field directly
        return {
          ...prevData,
          [field]: value,
        };
      }
    });

    onDataChange && onDataChange({ [field]: value });
  };

  const resetForm = () => {
    setFormData((prevData) => {
      const updatedData = { ...prevData };

      Object.entries(inputData).forEach(([field, labelOrSubInputData]) => {
        if (typeof labelOrSubInputData !== 'string') {
          // For nested forms, set the specific key to the nested form's data
          updatedData[field] = resetFormData(field);
        }
      });

      return updatedData;
    });
  };

  return (
    <form className="max-w-md mx-auto p-4 bg-white rounded shadow-md" onSubmit={handleSubmit}>
      {Object.entries(inputData).map(([field, labelOrSubInputData]) => (
        <div key={field} className="mb-4">
          {typeof labelOrSubInputData === 'string' ? (
            <>
              <label htmlFor={field} className="block text-gray-700">
                {field}:
              </label>
              {inputData[field] === 'file' ? ( // Check if the field is of type 'file'
                <input
                  type="file"
                  id={field}
                  onChange={(e) => handleChange(field, e.target.files[0])}
                  className="w-full px-3 py-2 border rounded shadow appearance-none"
                />
              ) : (
                <input
                  type="text"
                  id={field}
                  value={formData[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                  className="w-full px-3 py-2 border rounded shadow appearance-none"
                />
              )}
            </>
          ) : (
            <div key={field} className="mb-4">
              <div className="mb-2 font-bold text-lg">{field}</div>
              <UniversalForm
                inputData={labelOrSubInputData}
                onSubmit={(data) => handleChange(field, data)}
                parentField={field}
                resetFormData={(nestedFormData) => {
                  setFormData((prevData) => ({
                    ...prevData,
                    [field]: nestedFormData,
                  }));
                }}
                onDataChange={(nestedData) => {
                  handleChange(field, nestedData);
                }}
              />
            </div>
          )}
        </div>
      ))}
      {parentField === '' && (
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={(event) => handleSubmit(event)}
        >
          Submit
        </button>
      )}
    </form>
  );
};

export default UniversalForm;
