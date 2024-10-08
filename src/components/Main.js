import { useState } from "react";
import DropList from "./DropList";
import Item from "./Item";

const mainDropListOpts = [
  "sort by input order",
  "sort by description",
  "sort by packed status",
];
export default function Main({
  items,
  onItemRemoving,
  onCheckBoxChange,
  onItemsClear,
}) {
  const [sortBy, setSortBy] = useState("sort by input order");
  const handleValueChange = (e) => setSortBy(e.target.value);
  let sortedItems;
  if (sortBy.includes("description"))
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else if (sortBy.includes("packed"))
    sortedItems = items.slice().sort((a, b) => a.isPacked - b.isPacked);
  else sortedItems = items;
  return (
    <main className="main">
      <div className="main__items-container">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            itemData={item}
            onItemRemoving={onItemRemoving}
            onCheckBoxChange={onCheckBoxChange}
          />
        ))}
      </div>
      <form className="main__form text-center">
        <DropList
          list={mainDropListOpts}
          modifier="list--main"
          selectValue={sortBy}
          onValueChange={handleValueChange}
        />
        <button
          className="main__btn pointer uppercase primary-bg primary-color fw-700 primary-family"
          onClick={onItemsClear}
        >
          clear list
        </button>
      </form>
    </main>
  );
}
