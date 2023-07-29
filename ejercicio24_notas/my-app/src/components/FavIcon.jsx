import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
import favService from '../services/fav.service';
import { useEffect, useState } from 'react';



function FavIcon({i}){

    const [item, setItem] = useState(i);
    const [tap, setTap] = useState(false);


    useEffect(()=>{
        if (tap){
            if (favService.isValidId(item.id)){
                setItem(favService.change(item.id));
            }

            setTap(false)
        }
    },[tap])

    if (item!=undefined)
        return <div  className="BodyNota-favicon">

            {item.esFav ? <span onClick={(e)=>setTap(true)}><FontAwesomeIcon  icon={faStar} style={{color: "#dfd13a",cursor:"pointer"}} /></span> 
                        :   <span onClick={(e)=>setTap(true)}><FontAwesomeIcon icon={faStarRegular} style={{color: "#dfd13a",cursor:"pointer"}} /></span>}
        
            

        </div>
    else
        return null
   }

   export default FavIcon;
   