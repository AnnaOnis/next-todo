export function createItem(text) {
    return { id: Math.random(), text, checked: false };
  }
  
  export default function Item({ item, delItem, toggleCheckbox }) {
    console.debug('Item render id=', item.id,);
    return <li>
      <input type="checkbox" onChange={() => toggleCheckbox(item.id)} />
      <span>{item.text}</span>
      <button onClick={()=>delItem(item.id)}>❌</button>
    </li>;
  }