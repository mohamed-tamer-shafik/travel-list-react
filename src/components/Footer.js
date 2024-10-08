export default function Footer({ items }) {
  if (items.length === 0)
    return (
      <footer className="footer text-center">
        <em className="footer__content primary-color ">
          Start adding some items to your packing list 🚀
        </em>
      </footer>
    );
  const totalItems = items.length;
  const packedItems = items.reduce(
    (acc, item) => (item.isPacked ? acc + 1 : acc),
    0
  );
  const packedPrecentage = Math.round((packedItems / totalItems) * 100);
  return (
    <footer className="footer text-center">
      <em className="footer__content primary-color ">
        {packedPrecentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 you have ${totalItems} on your list , and you already packed ${packedItems} (${packedPrecentage}%)`}
      </em>
    </footer>
  );
}
