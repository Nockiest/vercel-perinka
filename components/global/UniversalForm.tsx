import React, { useEffect, useState } from 'react';

const ArrayInput = ({ value, onChange }) => {

  if (typeof value === 'object') {
    value = Object.values(value);
    // do something with newObj
  }

  const handleAddField = () => {
    onChange([...value, '']);
  };

  const handleFieldChange = (index, fieldValue) => {
    const updatedValue = [...value];
    updatedValue[index] = fieldValue;
    console.log(updatedValue)
    onChange(updatedValue);
  };

  const handleRemoveField = (index) => {
    const updatedValue = [...value];
    updatedValue.splice(index, 1);
    onChange(updatedValue);
  };

  return (
    <div>

      {value.map((field, index) => (

        <div key={index} className="flex mb-2">
          <input
            type="text"
            value={field}
            onChange={(e) => handleFieldChange(index, e.target.value)}
            className="w-full px-3 py-2 border rounded shadow appearance-none  mr-2"
          />
          <button type="button" className='action-button pr-2' onClick={() => handleRemoveField(index)}>
           Del
          </button>
        </div>
      ))}
      <button type="button" className='action-button' onClick={handleAddField}>
        Add Field
      </button>
    </div>
  );
};

const UniversalForm = ({ inputData, onSubmit  , parentField = '', resetFormData=null, onDataChange=null }) => {
  const initialFormState = Object.keys(inputData).reduce((acc, key) => {
    acc[key] = Array.isArray(inputData[key]) ? ['test'] : '';
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
    console.log(field[0], value)
    setFormData((prevData) => {
      if (typeof prevData[field] === 'object' && typeof value === 'object') {
        // If the field is an object and the new value is an object, merge them
        console.log(1, {
          ...prevData,
          [field]: {
            ...prevData[field],
            ...value,
          },
        } )
        return {
          ...prevData,
          [field]: {
            ...prevData[field],
            ...value,
          },
        };
      } else {
        console.log(2)
        return {
          ...prevData,
          [field]: value,
        };
      }
    });

    onDataChange && onDataChange({ [field]: value });
  };
  useEffect(() => {
    onDataChange && onDataChange({ formData })
  }, [formData])

  const resetForm = () => {
    setFormData((prevData) => {
      const updatedData = { ...prevData };

      Object.entries(inputData).forEach(([field, labelOrSubInputData]) => {
        if (typeof labelOrSubInputData !== 'string' && resetFormData) {
          // For nested forms, set the specific key to the nested form's data
          updatedData[field] = resetFormData(field);
        }
      });

      return updatedData;
    });
  };
  console.log(inputData, onSubmit  , parentField , resetFormData , onDataChange  , 'input data')
  const renderInputField = (fieldType, fieldId) => {
    console.log(typeof fieldType==='object' , fieldType, fieldId)
    switch (fieldType) {
      case 'file':
        return (
          <input
            type="file"
            id={fieldId}
            onChange={(e) => handleChange(fieldId, e.target.files)}
            className="w-full px-3 py-2 border rounded shadow appearance-none"
          />
        );
      case 'array':
        return (
          <ArrayInput
            value={formData[fieldId] || []}
            onChange={(value) => handleChange(fieldId, value)}
          />
        );
      case fieldType instanceof Object:

        console.log('field, type' ,fieldType,)
        return (
          <UniversalForm
            inputData={fieldType}
            onSubmit={(value) => handleChange(fieldId, value)}
            parentField={fieldId}
          />
        );
      default:
        console.log(fieldType, fieldType instanceof Object, ' is asigned a regular text field')
        return (
          <input
            type="text"
            id={fieldId}
            value={formData[fieldId]}
            onChange={(e) => handleChange(fieldId, e.target.value)}
            className="w-full px-3 py-2 border rounded shadow appearance-none"
          />
        );
    }
  };


  return (
    <form className="max-w-md mx-auto p-4 bg-white rounded shadow-md" onSubmit={handleSubmit}>
      {Object.entries(inputData).map(([field, fieldType]) => (
        <div key={field} className="mb-4">
          <label htmlFor={field} className="block text-gray-700">
            {field}:
          </label>
          {renderInputField(fieldType, field)}
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
