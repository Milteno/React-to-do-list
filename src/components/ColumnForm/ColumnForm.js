import styles from './ColumnForm.module.scss';
import { useState } from 'react';

const ColumnForm = props => {
  const [value, setValue] = useState('');
  const addColumn = e => {
      e.preventDefault();
      props.action({ title: value });
      setValue('');
  }

return (
      <form onSubmit={addColumn}>
          <input type="text" value={value} onChange={e => setValue(e.target.value)} />
          <button>Add column</button>
      </form>
);
};

export default ColumnForm;