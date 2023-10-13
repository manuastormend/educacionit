//Crear un componente ProductList que se encargue de mostrar la lista de productos.

import { useEffect, useState } from "react";
import localStorageService from "../services/localStorage.service";
import Product from "./Product";
import { Link } from "react-router-dom";

const ProductList = () => {
    
    const [products, setProducts] = useState([]);
    const [selectedProduct,setSelectedProduct] = useState('');

    useEffect(()=>{
        if (products.length==0 && localStorage.length!=0)
            setProducts(localStorageService.get());
    })


    function handleSelection(selectedId){
        if (selectedProduct == selectedId){
            setSelectedProduct(null);
        }else{
            setSelectedProduct(selectedId)
        }
    }
    let list = products.map((product,clave)=><Product key={clave} producto={product} selected={selectedProduct == product.id ? true : false} seleccionar={handleSelection}></Product>)
    
    
    async function handleDelete() {
        localStorageService.eliminar(localStorageService.getKey(selectedProduct))
        setProducts(localStorageService.get());
    }

    return <>
        <div className="button-box">
            <Link to={"/Form/add/000"}><button>Agregar producto</button></Link>
            {selectedProduct != null ? <>
                <Link to={`/Form/update/${selectedProduct}`}><button>Modificar producto</button></Link>
                <button onClick={()=>handleDelete()}>Eliminar producto</button>
            </>: null}
        </div>
        <div className="product-list">
            {list.length != 0 ? list : 
                <div>No se encontraron resultados, agregue un producto</div>}
        </div>

    </>
};
export default ProductList;