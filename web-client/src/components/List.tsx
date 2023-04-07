import { useState } from "react";

export default function List({
  items,
  name,
}: {
  items: string[];
  name: string;
}) {
  const [addItemComponentState, setAddItemComponentState] = useState(true);
  const [newItem, setNewItem] = useState("");

  const checkedAction = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
  };

  const addNewItemAction = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAddItemComponentState(!addItemComponentState);
  };

  const newItemTextCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(newItem);
    setNewItem(event.target.value);
  };

  const enterKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code !== "Enter") return;
    if (newItem.length === 0) {
      setAddItemComponentState(!addItemComponentState);
      return;
    }

    items.push(newItem);
    setNewItem("");
    setAddItemComponentState(!addItemComponentState);
  };

  const addNewItem = (state: boolean) => {
    if (state) {
      return <button onClick={addNewItemAction}>+ Create New Item</button>;
    }
    return (
      <input
        type="text"
        onChange={newItemTextCapture}
        value={newItem}
        onKeyDown={enterKeyPressed}
      />
    );
  };

  const listItems = items.map((item: string) => {
    return (
      <li key={item.toString()}>
        <input type="checkbox" onChange={checkedAction} />
        <span>{item}</span>
      </li>
    );
  });

  return (
    <div>
      <h4>{name}</h4>
      <ul>{listItems}</ul>
      {addNewItem(addItemComponentState)}
    </div>
  );
}
