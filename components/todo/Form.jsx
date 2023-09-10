import { useState } from 'react';
import Button from './Button';

export default function Form({ addItem }) {
  const
    [value, setValue] = useState('-');
  console.debug('Form render');
  return <fieldset>
    <legend>Form</legend>
    <input value={value} onInput={evt => setValue(evt.target.value)} />
    <Button onClick={() => addItem(value)}>Add</Button>
  </fieldset >;
}