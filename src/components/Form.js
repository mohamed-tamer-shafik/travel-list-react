import { useState } from "react";
import DropList from "./DropList";

const formDropListOpts = Array.from({ length: 20 }, (_, i) => i + 1);
export default function Form({ onItemAdding }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleDescrpChange = (e) => setDescription(e.target.value);
  const handleQuantityChange = (e) => setQuantity(Number(e.target.value));
  function handleFormSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, isPacked: false, id: Date.now() };
    onItemAdding(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="form text-center" onSubmit={handleFormSubmit}>
      <label className="form__label primary-color ">
        What do you need for your 😍 trip?
      </label>
      <DropList
        list={formDropListOpts}
        modifier="list--form"
        selectValue={quantity}
        onValueChange={handleQuantityChange}
      />
      <input
        type="text"
        className="form__field primary-bg fw-700 primary-color  primary-family"
        placeholder="Item..."
        value={description}
        onChange={handleDescrpChange}
      />
      <button className="form__btn  primary-color fw-700 pointer uppercase  primary-family">
        add
      </button>
    </form>
  );
}
