import React from "react";
import Item from "../models/item";

interface ShoppingListProps {
  items: Item[];
}
export default function ShoppingList({
  items,
}: ShoppingListProps): JSX.Element {
  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.product} : {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
