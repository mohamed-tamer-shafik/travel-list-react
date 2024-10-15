export default function Item({
  itemData: { description, quantity, isPacked, id },
  onItemRemoving,
  onCheckBoxChange,
}) {
  return (
    <div className="main__item flex">
      <input
        type="checkbox"
        className="main__checkbox pointer "
        value={isPacked}
        onChange={() => onCheckBoxChange(id)}
      />
      <span
        className={`main__item-text ${
          isPacked ? "main__item-text--packed" : ""
        } `}
      >
        {quantity} {description}
      </span>
      <button
        className="main__close-btn pointer primary-family flex"
        onClick={() => onItemRemoving(id)}
      >
        &times;
      </button>
    </div>
  );
}
