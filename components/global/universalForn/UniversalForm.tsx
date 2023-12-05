import React, { useEffect, useState } from "react";
import ArrayInput from "./UniversalFormArray";

const UniversalForm = ({
  inputData,
  onSubmit,
  parentField = "",
  resetFormData = null,
  onDataChange = null,
}) => {
  // console.log(
  //   inputData,
  //   onSubmit,
  //   parentField,
  //   resetFormData,
  //   onDataChange,
  //   "input data"
  // );
  const initialFormState = Object.keys(inputData).reduce((acc, key) => {
    acc[key] = Array.isArray(inputData[key]) ? ["test"] : "";
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
    const newData = { ...prevData };

    // Split the field path into keys
    const keys = field.split('.');

    // Use reduce to navigate through the keys and nest the values
    keys.reduce((acc, key, index) => {
      if (index === keys.length - 1) {
        // Last key, assign the value
        acc[key] = value;
      } else {
        // Not the last key, create an object if necessary
        acc[key] = acc[key] || {};
      }

      return acc[key];
    }, newData);

    return newData;
  });
};


  useEffect(() => {
    onDataChange && onDataChange(parentField, { formData });
  }, [formData]);

  const resetForm = () => {
    setFormData((prevData) => {
      const updatedData = { ...prevData };

      Object.entries(inputData).forEach(([field, labelOrSubInputData]) => {
        if (typeof labelOrSubInputData !== "string" && resetFormData) {
          // For nested forms, set the specific key to the nested form's data
          updatedData[field] = resetFormData(field);
        }
      });

      return updatedData;
    });
  };

  const renderInputField = (fieldType, fieldId) => {
    // console.log(typeof fieldType === "object", fieldType, fieldId);
    if (fieldType === "file") {
      return (
        <input
          type="file"
          id={fieldId}
          onChange={(e) => handleChange(fieldId, e.target.files)}
          className="w-full px-3 py-2 border rounded shadow appearance-none"
        />
      );
    } else if (fieldType === "array") {
      return (
        <ArrayInput
          value={formData[fieldId] || []}
          onChange={(value) => handleChange(fieldId, value)}
        />
      );
    } else if (fieldType instanceof Object) {
      console.log("field, type", fieldType, fieldId);
      return (
        <UniversalForm
          inputData={fieldType}
          onSubmit={(event) => handleSubmit(event)}
          onDataChange={(field, value) => handleChange(field, value)}
          parentField={fieldId}
        />
      );
    } else {
      // const commonProps = {
      //   id: fieldId,
      //   value: formData[fieldId],
      //   onChange: (e) => handleChange(fieldId, e.target.value),
      //   className: "w-full px-3 py-2 border rounded shadow appearance-none",
      // };

      // switch (fieldType) {
      //   case 'button':
      //   case 'reset':
      //   case 'submit':
      //     return <input type={fieldType}  />;
      //   case 'checkbox':
      //   case 'radio':
      //     return <input type={fieldType} checked={formData[fieldId]}  />;
      //   case 'file':
      //     return <input type="file" id={fieldId} onChange={(e) => handleChange(fieldId, e.target.files)} />;
      //   default:
      //     return <input type="text" {...commonProps} />;
      // }
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
    <form
      className="max-w-md mx-auto p-4 bg-white rounded shadow-md"
      onSubmit={handleSubmit}
    >
      {Object.entries(inputData).map(([field, fieldType]) => (
        <div key={field} className="mb-4">
          <label htmlFor={field} className="block text-gray-700">
            {field}:
          </label>
          {renderInputField(fieldType, field)}
        </div>
      ))}
      {parentField === "" && (
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


  // const handleChange = (field, value) => {
  //   console.log(field[0], value  );
  //   setFormData((prevData) => {
  //     if (typeof prevData[field] === "object" && typeof value === "object") {
  //       // If the field is an object and the new value is an object, merge them
  //       console.log(1, {
  //         ...prevData,

  //         [field[0]]: {
  //           // ...prevData[field],
  //           ...value,
  //         },
  //       });
  //       return {
  //         ...prevData,
  //         [field]: {
  //           // ...prevData[field],
  //           ...value,
  //         },
  //       };
  //     } else {
  //       console.log(2);
  //       return {
  //         ...prevData,
  //         [field]: value,
  //       };
  //     }
  //   });
  // };
