import React from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  const items: string[] = ["Nigeria", "USA", "London"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={handleSelectItem}
      />
      <br />
      <Alert>
        <span>Hello World !</span>
      </Alert>
    </div>
  );
}

export default App;
