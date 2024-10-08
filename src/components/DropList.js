export default function DropList({
  list,
  modifier,
  selectValue,
  onValueChange,
}) {
  return (
    <select
      className={`list primary-color primary-bg fw-700 pointer  primary-family  ${modifier}`}
      value={selectValue}
      onChange={onValueChange}
    >
      {list.map((opt) => (
        <option className="list__option fw-700" value={opt} key={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
