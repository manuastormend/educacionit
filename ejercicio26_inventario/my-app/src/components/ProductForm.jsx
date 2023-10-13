//Crear un componente ProductForm que se encargue de agregar y modificar productos.

import { useEffect, useState } from "react";
import FormTextInput from "../components/FormTextInput";
import FormContext from "../context/FormContext";
import localStorageService from "../services/localStorage.service";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = () => {

    /////// Parámetros /////////

    let {mode,id} = useParams();
    let parmId = id
    // console.log(mode,id)
    ///////////////////////////

    const [title,setTitle] = useState('');
    /////--------Inicializacion----------////

    const [nombre,setNombre] = useState('');
    const [descripcion,setDescripcion] = useState('');
    const [precio,setPrecio] = useState('');

    const [errorNombre,setErrorNombre] = useState(null);
    const [errorDescripcion,setErrorDescripcion] = useState(null);
    const [errorPrecio,setErrorPrecio] = useState(null);

    const [submit,setSubmit] = useState(false);
    const [update,setUpdate] = useState(false);
    const [firstSubmit, setFirstSubmit] = useState(false);
    const navigate = useNavigate();

    const context = {
        nombre,
        setNombre,
        errorNombre,
        setErrorNombre,
        descripcion,
        setDescripcion,
        errorDescripcion,
        setErrorDescripcion,
        precio,
        setPrecio,
        errorPrecio,
        setErrorPrecio,
        submit,
        setSubmit,
        firstSubmit,
        update,
        setUpdate

    }
    
    /////--------Fin inicializacion----------////

    useEffect(()=>{
        if (submit){
            
            if (errorPrecio || errorNombre || errorDescripcion){
                console.log("hay errores")
            }else{
    
                console.log("enviado correctamente")
                
                if (mode=="add"){
                    let newId = localStorageService.autonumerar();

                    let item = {
                        id: newId,
                        nombre: nombre,
                        descripcion: descripcion,
                        precio: precio
                    }
    
                    localStorageService.agregar(newId,item);
                }else{


                    let item = {
                        id: JSON.parse(parmId),
                        nombre: nombre,
                        descripcion: descripcion,
                        precio: precio
                    }

                    localStorageService.modificar(parmId,item)
                }



                
                setNombre(null)
                setPrecio(null)
                setDescripcion(null)
                setFirstSubmit(false)
                navigate("/")
            }
            setSubmit(false)
        }
    },[submit])

    
    async function handleSubmit() {

        await new Promise(resolve => {
            setFirstSubmit(true) 
            resolve("resolved")
        });
        await new Promise(resolve => {
            setSubmit(true) 
            resolve("resolved")
        });

        
    }


    ///////////////////////////////////////////////
    useEffect(()=>{
        if (mode=="update"){
            const item = JSON.parse(localStorageService.getItem(id));
            if (!update){
                setNombre(item.nombre)
                setDescripcion(item.descripcion)
                setPrecio(item.precio)
            }


            setUpdate(true)
        }
        if (mode=="update")
            setTitle("Modifica el producto")
        else
            setTitle("Agrega un producto")
        })

    



    return <>

        
            <FormContext.Provider value={context}>
                <div className="form-container">
                    
                        
                    <h2 className="contacto-form__title">{title}</h2>
                    
                    <FormTextInput label={"Ingrese su nombre:"} placeholder={"Escriba su nombre completo"} className={"contacto-form__input"} error={errorNombre} propiedad={"nombre"} ctxType={""}></FormTextInput>
                    <br></br>
                    <FormTextInput label={"Ingrese una descripcion:"} placeholder={"Escriba una breve descripcion del producto"} className={"contacto-form__input"} error={errorDescripcion} propiedad={"descripcion"} ctxType={""}></FormTextInput>
                    <br></br>
                    <FormTextInput label={"Ingrese un precio"} placeholder={"Escriba un precio para el producto"} className={"contacto-form__input"} error={errorPrecio} propiedad={"precio"} ctxType={""}></FormTextInput>

                    <label id="labelEnviar"></label>
                    <button className="form__button form__button__grey" onClick={handleSubmit} >Enviar</button>
                
                    
                </div>

            </FormContext.Provider>
            
        
    </>
};
export default ProductForm;