
const Product = ({producto,selected,seleccionar}) => {

    let clase = selected ? "product-container selected" : "product-container"

    return <>
        <div className={clase} onClick={(e)=> seleccionar(producto.id)}>
            <p className="product-nombre">{producto.nombre}</p>
            <p className="product-descripcion">{producto.descripcion}</p>
            <p className="product-precio">{producto.precio}</p>
        </div>

    </>
};
export default Product;