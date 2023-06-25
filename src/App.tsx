import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import UtilityBar from "./components/UtilityBar";
import TodoCard from "./components/TodoCard";
import "./App.css";

export interface Todo {
  id?: number | null;
  heading: string;
  body: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onSubmitTodo = (data: Todo) => {
    let newId = 0;
    if (todos.length > 0) {
      let lastTodo = todos[todos.length - 1];
      newId = lastTodo.id ? lastTodo.id + 1 : 1;
    }
    console.log(newId);
    setTodos([...todos, { ...data, id: newId }]);
  };

  const onDeleteTodo = (data: Todo) => {
    setTodos(todos.filter((todo) => todo.id !== data.id));
  };

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"` }}
        templateColumns={{ base: "1fr" }}
        paddingLeft="25px"
        paddingRight="25px"
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main">
          <UtilityBar onSubmitTodo={onSubmitTodo} />
          <TodoCard todos={todos} onDeleteTodo={onDeleteTodo} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
