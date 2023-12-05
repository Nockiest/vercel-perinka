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

  export default ArrayInput