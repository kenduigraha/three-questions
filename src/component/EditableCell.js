import React, { useState } from 'react';

const EditableCell = React.memo(({ value, onChange }) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  const handleBlur = () => {
    setEditing(false);
    onChange(draft);
  };

  return (
    <td onClick={() => setEditing(true)}>
      {editing ? (
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={handleBlur} 
          autoFocus
        />
      ) : (
        value
      )}
    </td>
  );
});

export default EditableCell;
