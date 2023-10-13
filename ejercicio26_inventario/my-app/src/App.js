import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  // localStorage.clear();
  return (
    <div className="App">
      <button>Agregar producto</button>

      <button>Mostrar lista de productos</button>

      <ProductList />
      <ProductForm />
    </div>
  );
}

export default App;
