import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import UtilityBar from "./components/UtilityBar";
import "./App.css";

function App() {
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
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
