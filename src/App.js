import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Este mensaje de greeting viene de ItemListContainer" />
    </>
  );
}

export default App;
