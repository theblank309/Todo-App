import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import UtilityBar from "./components/UtilityBar";
import TodoCard from "./components/TodoCard";
import "./App.css";

export interface Todo {
  id: number;
  heading: string;
  body: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, heading: "Heading1", body: "More information about heading 1" },
  ]);
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
          <UtilityBar />
          <TodoCard todos={todos} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
