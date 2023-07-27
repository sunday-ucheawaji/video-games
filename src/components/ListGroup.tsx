import React, { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedItem, setSelectedItem] = useState(-1);
  return (
    <React.Fragment>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedItem(index);
              onSelectItem(item);
            }}
            className={`${
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ListGroup;
