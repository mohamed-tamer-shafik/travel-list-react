import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import Main from "./Main";

export default function App() {
  const [items, setItems] = useState([]);
  const handleItemAdding = (newItem) =>
    setItems((items) => [...items, newItem]);
  const handleItemRemoving = (id) =>
    setItems((items) => items.filter((item) => item.id !== id));
  const handleCheckBoxChange = (id) =>
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  function handleItemsClear(e) {
    e.preventDefault();
    const willClear = window.confirm(
      "are you sure that you want to clear all items"
    );
    if (willClear) setItems([]);
  }
  return (
    <>
      <Header />
      <Form onItemAdding={handleItemAdding} />
      <Main
        items={items}
        onItemRemoving={handleItemRemoving}
        onCheckBoxChange={handleCheckBoxChange}
        onItemsClear={handleItemsClear}
      />
      <Footer items={items} />
    </>
  );
}
