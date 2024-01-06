import "./index.css"
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="App" style={{maxWidth: "1200px", margin: "0 auto"}}>
      <Header />
      <Form />
      <Cards/>
    </div>
  );
}

export default App;
