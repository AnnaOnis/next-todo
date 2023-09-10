import { useState } from 'react';
import Form from './Form';
import List from './List';
import { createItem } from './Item';

export default function ToDoApp() {
  const
    [list, setList] = useState([createItem('111'), createItem('222')]),
    addItem = text => setList(list.concat(createItem(text))),
    delItem = id => setList(list.filter(item => id !== item.id)),
    toggleCheckbox = id => {
      const
        index = list.findIndex(item => id === item.id),
        { checked, ...rest } = list[index];
      setList(list.with(index, { ...rest, checked: !checked }));
    };
  return <>
    <Form addItem={addItem} />
    <List list={list} delItem={delItem} toggleCheckbox={toggleCheckbox}/>
  </>;
}