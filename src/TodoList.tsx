import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TodoList = () => {
  useQuery({
    queryKey: ["todos0"],
    queryFn: () => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.data);
    },
  });

  return <div>TodoList</div>;
};

export default TodoList;
